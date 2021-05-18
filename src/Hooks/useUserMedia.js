import { useState, useEffect } from "react";

export default function useUserMedia(requestedMedia, isActivated) {
  const [mediaStream, setMediaStream] = useState(null);

  useEffect(() => {
    async function enableVideoStream() {
      try {
        if (isActivated) {
          const stream = await navigator.mediaDevices.getUserMedia(requestedMedia);
          setMediaStream(stream);
        }
      } catch (err) {
        // Handle the error
      }
    }

    if (!mediaStream) {
      enableVideoStream();
    } else {
      return function cleanup() {
        mediaStream.getTracks().forEach(track => {
          track.stop();
        });
      };
    }
  }, [mediaStream, requestedMedia]);

  return mediaStream;
}
