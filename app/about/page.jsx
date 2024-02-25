"use client";

import React, { useEffect } from "react";

const About = () => {
  useEffect(() => {
    const openAppOrStore = async () => {
      const appScheme = "candycrushsaga://"; // Replace with your app's scheme

      try {
        // Attempt to open the app
        await fetch(appScheme, { method: "HEAD" });
        alert("app install");
        // window.location.href = appScheme; // If successful, open the app
        console.log("Opening 1");
      } catch (error) {
        alert("app not install");
        // If an error occurs, the app is not installed
        // Redirect to the app store or a web URL
        console.log("Opening 2");
        // window.open(
        //   "https://play.google.com/store/apps/details?id=com.thehuntrpartner",
        //   "_blank"
        // ); // Replace with your app's App Store URL
      }
    };

    openAppOrStore();
  }, []);

  //   useEffect(() => {
  //     setTimeout(function () {
  //       console.log(
  //         window.open(
  //           "https://play.google.com/store/apps/details?id=com.thehuntrpartner",
  //           "_blank"
  //         ),
  //         "1"
  //       );
  //     }, 25);
  //     console.log(window.open(`thehuntrpartner://place/1`, "_blank"), "2");
  //   }, []);
  return <div>About</div>;
};

export default About;
