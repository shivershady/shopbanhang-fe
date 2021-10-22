import React, { useState } from "react";

const Notification = props => {
  const [exit, setExit] = useState(false);
  const [width, setWidth] = useState(0);
  const [intervalID, setIntervalID] = useState(null);

  const handleStartTimer = () => {
    const id = setInterval(() => {
      setWidth(prev => {
        if (prev < 100) {
          return prev + 0.5;
        }

        clearInterval(id);
        return prev;
      });
    }, 10);

    setIntervalID(id);
  };

  const handlePauseTimer = () => {
    clearInterval(intervalID);
  };

  const handleCloseNotification = () => {
    handlePauseTimer();
    setExit(true);
    setTimeout(() => {
      props.dispatch({
        type: "REMOVE_NOTIFICATION",
        id: props.id
      })
    }, 400)
  };

  React.useEffect(() => {
    if (width === 100) {
      // Close notification
      handleCloseNotification()
    }
  }, [width])

  React.useEffect(() => {
    handleStartTimer();
  }, []);

  return (
    <div
      onMouseEnter={handlePauseTimer}
      onMouseLeave={handleStartTimer}
      className={`notification-item ${props.type} ${exit ? "exit" : ""}`}
    >
      {props.type=="success" &&
      <div className="flex items-center bg-green-200 w-ful">
        <div className="mr-4">
          <div className="h-10 w-10 text-white bg-green-600 rounded-full flex justify-center items-center">
            <i className="fas fa-check"></i>
          </div>
        </div>
        <div className="flex justify-between w-full">
          <div className="text-green-600">
            <p className="mb-2 font-bold">Succes</p>
            <p className="text-xs">{props.message}</p>
          </div>
          <div className="text-sm text-gray-500 p-6">
            <span onClick={handleCloseNotification}>x</span>
          </div>
        </div>
      </div>}
      {props.type=="info" &&
      <div className="flex items-center bg-blue-200 w-ful">
        <div className="mr-4">
          <div className="h-10 w-10 text-white bg-blue-600 rounded-full flex justify-center items-center">
            <i className="fas fa-info"></i>
          </div>
        </div>
        <div className="flex justify-between w-full">
          <div className="text-blue-600">
            <p className="mb-2 font-bold">Info</p>
            <p className="text-xs">{props.message}</p>
          </div>
          <div className="text-sm text-gray-500 p-6">
            <span onClick={handleCloseNotification}>x</span>
          </div>
        </div>
      </div>}
      {props.type=="warning" &&
      <div className="flex items-center bg-yellow-200 w-ful">
        <div className="mr-4">
          <div className="h-10 w-10 text-white bg-yellow-600 rounded-full flex justify-center items-center">
            <i className="fas fa-exclamation-triangle"></i>
          </div>
        </div>
        <div className="flex justify-between w-full">
          <div className="text-yellow-600">
            <p className="mb-2 font-bold">Warning</p>
            <p className="text-xs">{props.message}</p>
          </div>
          <div className="text-sm text-gray-500 p-6">
            <span onClick={handleCloseNotification}>x</span>
          </div>
        </div>
      </div>}
      {props.type=="error" &&
      <div className="flex items-center bg-red-200 w-ful">
        <div className="mr-4">
          <div className="h-10 w-10 text-white bg-red-600 rounded-full flex justify-center items-center">
            <i className="fas fa-times"></i>
          </div>
        </div>
        <div className="flex justify-between w-full">
          <div className="text-red-600">
            <p className="mb-2 font-bold">Danger</p>
            <p className="text-xs">{props.message}</p>
          </div>
          <div className="text-sm text-gray-500 p-6">
            <span onClick={handleCloseNotification}>x</span>
          </div>
        </div>
      </div>}
      <div className={"bar"} style={{ width: `${width}%` }} />
    </div>
  );
};

export default Notification;
