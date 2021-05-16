import React, { useState, useEffect } from "react";
import socketIOclient from "socket.io-client";

function Component() {
  const server = "https://localhost:4000";
  const [sock, setSock] = useState("");
  useEffect(() => {
    const socket = socketIOclient(server);
    socket.on("FROMAPI", (data) => {
      setSock(data);

      return () => socket.disconnect();
    });
  }, []);
  return (
    <div>
      <p>
        <time dateTime={sock}>{sock}</time>
      </p>
    </div>
  );
}

export default Component;
