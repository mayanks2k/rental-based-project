"use client";

import React, { useState, useEffect } from "react";
import { Detector } from "react-detect-offline";
import { ImConnection } from "react-icons/im";
import { MdOutlineSignalWifiConnectedNoInternet4 } from "react-icons/md";

const NetworkStatus = () => {
  const [showOnlineMessage, setShowOnlineMessage] = useState(false);
  const [wasOffline, setWasOffline] = useState(false);

  useEffect(() => {
    let timer:string | number | NodeJS.Timeout | undefined;
    if (showOnlineMessage) {
      timer = setTimeout(() => {
        setShowOnlineMessage(false);
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [showOnlineMessage]);

  return (
    <Detector
      render={({ online }) => {
        if (online && wasOffline) {
          setShowOnlineMessage(true);
          setWasOffline(false);
        }

        if (!online) {
          setWasOffline(true);
        }

        return (
          <div className="fixed top-0 right-0 p-4 z-50">
            <div
              className={`flex items-center space-x-2 p-2 rounded-lg shadow-md ${
                online
                  ? showOnlineMessage
                    ? "bg-green-100 text-green-800"
                    : "hidden"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {online && showOnlineMessage ? (
                <>
                  <ImConnection className="text-2xl" />
                  <span className="font-medium">You are currently online</span>
                </>
              ) : (
                <>
                  <MdOutlineSignalWifiConnectedNoInternet4 className="text-2xl" />
                  <span className="font-medium">No Internet Connection</span>
                </>
              )}
            </div>
          </div>
        );
      }}
    />
  );
};

export default NetworkStatus;
