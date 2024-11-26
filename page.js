import React from 'react';
import UserProfile from './components/UserProfile'; // Adjust the path as needed

function App() {
  return (
    <div>
      <UserProfile 
        name="John Doe" 
        email="john.doe@example.com" 
        photoUrl="https://example.com/john-doe-photo.jpg"
      />
      <UserProfile />
    </div>
  );
}

export default App;