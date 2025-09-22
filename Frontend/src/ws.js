import { io } from "socket.io-client";

export function connectWS() {
  const socket = io("http://localhost:4600");
  return socket;
}

//  end code
