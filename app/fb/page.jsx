"use client";
import { useEffect } from "react";

const MyAppComponent = () => {
  useEffect(() => {
    const checkFacebookInstalled = () => {
      // Attempt to open Facebook using its custom scheme
      window.href = "fb://";

      // Set a timeout to detect if Facebook was opened
      const facebookOpenTimeout = setTimeout(() => {
        // If Facebook wasn't opened, redirect to the Play Store
        window.open(
          "https://play.google.com/store/apps/details?id=com.facebook.katana",
          "_blank"
        );
      }, 2000); // Adjust the timeout as needed

      // Detect if Facebook was opened successfully
      window.addEventListener("pagehide", () => {
        clearTimeout(facebookOpenTimeout);
      });
    };

    checkFacebookInstalled();
  }, []);

  return <div>{/* Your component JSX */}</div>;
};

export default MyAppComponent;
