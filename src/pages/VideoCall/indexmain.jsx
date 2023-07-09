import { useState } from "react";
import { VideoRoom } from "./VideoRoom";
import Header from "../../components/Header";
function VideoCall() {
  return (
    <>
     <div className="bg-white_A700 flex flex-col font-nunitosans items-center justify-start mx-auto w-full responsive-view">
    <Header className="bg-orange_500 w-full" />
      <div className="App w-full">
        {/* <h1> Virtual Call</h1> */}
        <VideoRoom />
      </div>
      </div>
    </>
  );
}

export default VideoCall;
