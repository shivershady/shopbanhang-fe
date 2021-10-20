import { useEffect, useState } from "react";

const Alert = (props) => {
  const [isShow, setIsShow] = useState(false);
  const [status, setStatus] = useState("error");
  useEffect(() => {
    if (props.message && props.status) {
      setIsShow(true);
      setStatus(props.status);
      setTimeout(() => {
        setIsShow(false);
      }, 3000);
    }
  }, [props.message]);

  return (
    <>
      {isShow && (
        <>
          {status=="success" &&
          <div className="flex bg-green-200 p-4 w-96 m-8 fixed fixed-y  right-0  border border-gray-200 shadow-lg rounded-md">
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
              <div className="text-sm text-gray-500">
                <span>x</span>
              </div>
            </div>
          </div>}
          {status=="info" &&
          <div className="flex bg-blue-200 p-4">
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
              <div className="text-sm text-gray-500">
                <p>x</p>
              </div>
            </div>
          </div>}
          {status=="warning" &&
          <div className="flex bg-yellow-200 p-4">
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
              <div className="text-sm text-gray-500">
                <span>x</span>
              </div>
            </div>
          </div>}
          {status=="error" &&
          <div className="flex bg-red-200 p-4">
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
              <div className="text-sm text-gray-500">
                <p>x</p>
              </div>
            </div>
          </div>}
        </>
      )}
    </>
  );
};
export default Alert;
