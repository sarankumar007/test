import React, { useEffect, useState, useRef } from "react";
import io from "socket.io-client";
import { useParams } from "react-router-dom";
import { useSpring, animated } from "react-spring";
const IframePage = () => {
  const [followersData, setFollowersData] = useState(null);
  const [visible, setVisible] = useState(false);

  //   const transition = useTransition(followersData, {
  //     from: { opacity: 0, transform: "translateX(100%)" },
  //     enter: { opacity: 1, transform: "translateX(0%)" },
  //     leave: { opacity: 0, transform: "translateX(100%)" },
  //   });

  const notificationStyle = useSpring({
    opacity: visible ? 1 : 0,
    // transform: visible ? "translateX(0%)" : "translateX(100%)",
    backgroundColor: visible ? "#f0f0f0" : "#e0e0e0",
    // config: { duration: 2000 },
  });
  const audioRef = useRef(null);

  const handlePlay = () => {
    audioRef.current.play();
  };

  const handlePause = () => {
    audioRef.current.pause();
  };

  const delay = (delayInms) => {
    return new Promise((resolve) => setTimeout(resolve, delayInms));
  };
  const { id } = useParams();
  useEffect(() => {
    const socket = io("/", {
      auth: {
        params: id,
      },
    });

    // Handle incoming events from the server
    socket.on("event-to-client", async (data) => {
      console.log("Received data from server:", data);
      setFollowersData(data);
      setVisible(true);
      handlePlay();
      await delay(10000);
      setFollowersData(null);
      setVisible(false);
      handlePause();
    });

    // Emit events to the server
    socket.emit("event-from-client", "Hello from client");

    // Clean up the socket connection when the component unmounts
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div>
      <audio ref={audioRef}>
        <source src="/R2ZWYCP-notification.mp3" type="audio/mpeg" />
      </audio>
      {followersData?.type === "follow" ? (
        <div style={{ height: "100vh", width: "40vw" }}>
          <div className="d-flex justify-content-center">
            <span className="notification-text">
              {followersData?.type === "follow"
                ? `You have a new follower ${followersData?.userName}`
                : followersData?.type === "raid"
                ? `You have a new raid ${followersData?.userName}`
                : followersData?.type === "follow"
                ? `You have a new subscribe ${followersData?.subscribe}`
                : ""}
            </span>
          </div>
          <img
            // height="100%"
            src={followersData?.imgUrl}
            class="card-img-top"
            alt="..."
          />
        </div>
      ) : (
        <></>
      )}
      {/* <animated.div style={notificationStyle} className=""> */}

      {/* <div className="notification-content">
          <div className="notification-message">
            <span className="notification-text">
              {followersData?.type === "follow"
                ? `You have a new follower ${followersData?.userName}`
                : followersData?.type === "raid"
                ? `You have a new raid ${followersData?.userName}`
                : followersData?.type === "follow"
                ? `You have a new subscribe ${followersData?.subscribe}`
                : ""}
            </span>
          </div>
        </div> */}
      {/* </animated.div> */}
    </div>
  );
};

export default IframePage;
