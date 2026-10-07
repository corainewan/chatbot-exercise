import RobotAvatarImage from "../assets/robot.png";
import UserAvatarImage from "../assets/user.png";
import "./ChatMessage.css";

export function ChatMessage({ message, sender }) {
  return (
    <div className={sender === "robot" ? "robot-message" : "user-message"}>
      {sender === "robot" && <img src={RobotAvatarImage} className="avatar" />}
      <div className="chat-text">{message}</div>
      {sender === "user" && <img src={UserAvatarImage} className="avatar" />}
    </div>
  );
}
