// components/UserProfile.js
import React from 'react';

function UserProfile(props) {
  return (
    <div className="profile-card">
      <h2>User Profile</h2>
      <img 
        src={props.photoUrl || "https://example.com/default-photo.jpg"}
        alt="User Photo" 
        className="photo" 
      />
      <p>Name: {props.name || "Jane Doe"}</p>
      <p>Email: {props.email || "jane.doe@example.com"}</p>
      <a href={`mailto:${props.email || "jane.doe@example.com"}`}>Send Email</a>
    </div>
  );
}

export default UserProfile;