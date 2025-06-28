import "./styles.css";
import React, { useEffect } from "react";

export default function App() {
  useEffect(() => {
    window.history.pushState({ page: 1 }, "", "");

    const handlePopState = (event) => {
      console.log("Browser Back Button Clicked");
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  return (
    <div>
      <h1>Detect Browser Back Button</h1>
      <p>Open the browser console and click the back button.</p>
    </div>
  );
}
