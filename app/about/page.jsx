"use client";
import { useEffect } from "react";

const MyAppComponent = () => {
  useEffect(() => {
    const checkWhatsAppInstalled = () => {
      // Attempt to open WhatsApp using its custom scheme
      window.location.href = "whatsapp://";

      // Set a timeout to detect if WhatsApp was opened
      const whatsappOpenTimeout = setTimeout(() => {
        // If WhatsApp wasn't opened, redirect to the Play Store
        window.location.href =
          "https://play.google.com/store/apps/details?id=com.whatsapp";
      }, 2000); // Adjust the timeout as needed

      // Detect if WhatsApp was opened successfully
      window.addEventListener("pagehide", () => {
        clearTimeout(whatsappOpenTimeout);
      });
    };

    checkWhatsAppInstalled();
  }, []);

  return <div>{/* Your component JSX */}</div>;
};

export default MyAppComponent;
