import React from "react";
import UserCard from "./UserCard";

export default function Users(props) {
  return (
    <div className="product-wrapper">
      {props.users.map((item, index) => (
        <UserCard
          key={item.id}
          onShowMore={() => props.onUserClick(item)}// In onUserClick key come a function(handleUserClick) from parent and 
          onDelete={() => props.onDelete(item)}//from child send user details by calling some(item) parameter(onUserClick(item))
          user={item}
          image={"https://i.pravatar.cc/200/200" + index}
        />
      ))}
    </div>
  );
}