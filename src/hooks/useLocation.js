import { useState, useEffect } from "react";
import {
  Accuracy,
  requestForegroundPermissionsAsync,
  requestBackgroundPermissionsAsync,
  watchPositionAsync,
} from "expo-location";

export default (callback) => {
  const [err, setErr] = useState(null);

  useEffect(() => {
    let subscriber;

    const startWatching = async () => {
      try {
        // await requestBackgroundPermissionsAsync();
        let { status } = await requestForegroundPermissionsAsync();
        if (status !== "granted") {
          setErr("Permission to access location was denied");
          return;
        }

        await requestBackgroundPermissionsAsync();
        const subscriber = await watchPositionAsync(
          {
            accuracy: Accuracy.BestForNavigation,
            timeInterval: 1000,
            distanceInterval: 10,
          },
          callback
        );
      } catch (e) {
        setErr(e);
      }
    };

    startWatching();
    console.log("use effect");

    return () => {
      if (subscriber) {
        subscriber.remove();
      }
    };
  }, [callback]);

  return [err];
};
