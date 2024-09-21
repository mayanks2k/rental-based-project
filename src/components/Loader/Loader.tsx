import React from "react";

type LoaderProps = {
  show: boolean;
};

const Loader: React.FC<LoaderProps> = ({ show }) => {
  return (
    <>
      {show && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <style jsx>{`
            @keyframes spin {
              from {
                transform: rotate(0deg);
              }
              to {
                transform: rotate(360deg);
              }
            }
            .anima {
              animation: spin 1s linear infinite;
            }
          `}</style>
          <div
            className="animate-spin rounded-full h-32 w-32 border-t-10 border-b-4 
          border-blue-600 dark:border-emerald-300 anima"
          ></div>
        </div>
      )}
    </>
  );
};

export default Loader;
