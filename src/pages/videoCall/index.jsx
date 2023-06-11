import { useState } from "react";
import { VideoRoom } from "./VideoRoom";
import Header from "../../components/Header";
function App() {
  const [joined, setJoined] = useState(true);
  return (
    <>
    <Header className="bg-orange_500 flex flex-row items-center justify-center md:px-5 w-full" />
      <div className="App">
        {/* <h1> Virtual Call</h1> */}

        {!joined && <button onClick={() => setJoined(true)}>Join Room</button>}

        {joined && <VideoRoom />}
      </div>
    </>
  );
}

export default App;