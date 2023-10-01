import { secured } from "api/interceptors";
import NotificationModal from "components/Notification";
import { useEffect, useState } from "react";
import { FaBell, FaUser } from "react-icons/fa";
import "../../styles/header.css";
import Popover from "../Popover";

const Header = (props) => {
  const [notifications, setNotifications] = useState([]);
  const [showMore, setShowNore] = useState(false);
  const [showRedDot, setRedDot] = useState(0);
  const fetchNotifications = () => {
    // setLoading(true);
    let url = `/notifications`;
    secured.get(url).then((response) => {
      let notifi = [];
      if (response.data.data && response.data.data.length > 3) {
        notifi = response.data.data.slice(0, 3);
        setShowNore(true);
      } else {
        notifi = response.data.data;
      }

      let count = 0;
      if (response?.data?.data && response?.data?.data?.length) {
        for (let ele of notifi) {
          if (!ele.seen) {
            count++;
          }
        }
        setRedDot(count);
      } else {
        setRedDot(0);
      }

      setNotifications(notifi);
    });
  };

  const hideRedDot = () => {
    setRedDot(false);
  };

  useEffect(() => {
    fetchNotifications();
  }, []);

  return (
    <>
      <header className={props.className}>
        <div className="flex justify-end p-3 m-2">
          {/* <div className="flex items-center head-men-width justify-between">
            <Button
              className="cursor-pointer flex items-center"
              rightIcon={
                <Img
                  src="images/img_question.svg"
                  className="mt-px ml-[15px]"
                  alt="question"
                />
              }
              shape="CircleBorder20"
              size="sm"
              variant="OutlineWhiteA700"
            >
              <div className="font-nunitosans font-semibold text-amber_A700 text-left">
                <a href="/mentee"> Mentee</a>
              </div>
            </Button>
            <Button
              href="/mentor"
              className="cursor-pointer flex items-center"
              rightIcon={
                <Img
                  src="images/img_volume.svg"
                  className="mt-px ml-[15px] mr-[5px]"
                  alt="volume"
                />
              }
              shape="CircleBorder20"
              size="sm"
              variant="OutlineWhiteA700_1"
            >
              <div className="font-nunitosans font-semibold text-left text-white_A700">
                <a href="/mentor"> Mentor</a>
              </div>
            </Button>
          </div> */}

          <div className="flex items-center head-btn-width justify-between">
            {showRedDot ? (
              <NotificationModal
                notifications={notifications}
                showMore={showMore}
                setRedDot={setRedDot}
                showRedDot={showRedDot}
              >
                <div className="bell-icon" data-count={showRedDot}>
                  <FaBell style={{ color: "white", fontSize: "1.5rem" }} />
                </div>
              </NotificationModal>
            ) : (
              <NotificationModal
                notifications={notifications}
                showMore={showMore}
              >
                {/* <Img
                className="head-img-width"
                src="images/img_notification.svg"
                alt="notification"
              /> */}
                <FaBell style={{ color: "white", fontSize: "1.5rem" }} />
              </NotificationModal>
            )}

            <Popover>
              {/* <Img
                src="images/img_user.svg"
                alt="user"
                className="head-img-width"
              /> */}
              <FaUser style={{ color: "white", fontSize: "1.5rem" }} />
            </Popover>
          </div>
        </div>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
