import { useCollection } from "../hooks/useCollection";
import Avatar from "./Avatar";

import "./OnlineUsers.css";

export default function OnlineUsers() {
  const { documents, error } = useCollection("users");

  return (
    <div className="user-list">
      <h2>Online Users</h2>
      {error && <div className="error">{error}</div>}
      {documents &&
        documents.map((user) => (
          <div className="user-list-item" key={user.id}>
            <span className="online-status"></span>
            <span>{user.displayName}</span>
            <Avatar src={user.photoURL} />
          </div>
        ))}
    </div>
  );
}
