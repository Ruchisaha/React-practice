import React from "react";

function Profile() {
  const user = JSON.parse(localStorage.getItem("user")); 

  if (!user) {
    return <p>No user data found!</p>;
  }

  return (
    <>
      <h1>User Profile</h1>
      <p><strong>First Name:</strong> {user.first_name}</p>
      <p><strong>Last Name:</strong> {user.last_name}</p>
      <p><strong>Email:</strong> {user.email}</p>
    </>
  );
}

export default Profile;
