import React, { CSSProperties, useEffect, useState } from "react";
import AgoraUIKit, { layout } from "agora-react-uikit";
import "agora-react-uikit/dist/index.css";
import { secured } from "api/interceptors";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";

const VideoCall = () => {
  const history = useNavigate();

  const [videocall, setVideocall] = useState(true);
  const [isHost, setHost] = useState(true);
  const [isPinned, setPinned] = useState(false);
  const [bookingData, setBookingData] = useState(null);
  const [username, setUsername] = useState("");
  const [channel, setChannel] = useState("");
  const [agoraToken, setAgoraToken] = useState("");
  const [appID, setAppId] = useState("e27fafd3d0c24c3da5fc2a25d546c40f");
  const [uid, setUserId] = useState("");
  const { bookingId } = useParams();

  const userData = JSON.parse(localStorage.getItem("userData"));

  useEffect(() => {
    async function getAgoraToken() {
      try {
        // Fetch the token from the API
        const response = await secured.get(`/rtc?bookingId=${bookingId}`);
        const tokenData = response?.data?.data;
        if (tokenData) {
          setChannel(tokenData?.channel);
          setAgoraToken(tokenData?.token);
          setVideocall(true);
          setUserId(tokenData?.user_id);

          if (tokenData?.channel && tokenData?.bookingId) {
            acquireCloudRecording(
              tokenData?.channel,
              tokenData?.bookingId
            );
          }
        }
      } catch (error) {
        const message = error.response.data.message || "Something went wrong";
        toast.error(message);
        history("/profile");
      }
    }
    getAgoraToken();

    getBookingData();
  }, []);

  const getBookingData = () => {
    secured.get(`/slots/booking/${bookingId}`).then((response) => {
      if (response?.data?.bookings?.length) {
        console.log(response.data.bookings[0]);
        setBookingData(response?.data?.bookings[0]);
      }
    });
  };

  async function acquireCloudRecording(channel, bookingId) {
    if (userData?.type === "mentor") {
      const response = await secured.post("/rtc/recording", {
        channel,
        bookingId
      });
    }
  }

  const stopRecording = async () => {
    if (userData?.type === "mentor") {
      secured.post("/rtc/stop-recording", {
        bookingId,
      });
    }
  };

  const endCall = async () => {
    if (userData?.type === "mentor") {
      secured.post("/rtc/end-call", {
        bookingId,
      });
    }
  };

  const handleEndCall = () => {
    setVideocall(false);
    stopRecording();
    endCall();
    history(`/feedback/${bookingData.mentorId}`);
  };
  return (
    <div style={styles.container}>
      <div style={styles.videoContainer}>
        {videocall && channel && uid && agoraToken ? (
          <AgoraUIKit
            rtcProps={{
              appId: appID,
              channel: channel,
              token: agoraToken, // add your token if using app in secured mode
              uid: uid,
              layout: isPinned ? layout.pin : layout.grid,
              enableScreensharing: true,
              disableRtm: true,
            }}
            rtmProps={{ username: username || "user", displayUsername: true }}
            callbacks={{
              EndCall: handleEndCall,
            }}
          />
        ) : null}
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    flex: 1,
    backgroundColor: "#007bff22",
  },
  heading: { textAlign: "center", marginBottom: 0 },
  videoContainer: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
  },
  nav: { display: "flex", justifyContent: "space-around" },
  btn: {
    backgroundColor: "#007bff",
    cursor: "pointer",
    borderRadius: 5,
    padding: "4px 8px",
    color: "#ffffff",
    fontSize: 20,
  },
  input: { display: "flex", height: 24, alignSelf: "center" },
};

export default VideoCall;
