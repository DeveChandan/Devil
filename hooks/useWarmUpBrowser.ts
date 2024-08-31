import React from "react";
import * as WebBrowser from "expo-web-browser";

export const useWarmUpBrowser = () => {
  React.useEffect(() => {
    // Warm up the WebBrowser
    void WebBrowser.warmUpAsync();

    // Cleanup function to cool down the WebBrowser
    return () => {
      void WebBrowser.coolDownAsync();
    };
  }, []); // Empty dependency array to run effect only on mount and unmount
};