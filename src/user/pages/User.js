import React from "react";

import UsersList from "../components/UsersList";

const User = () => {
  const USERS = [
    {
      id: "u1",
      name: "Sam",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
      places: 3,
    },
  ];
  return <UsersList items={USERS} />;
};

export default User;
