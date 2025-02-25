import React from "react";

const Profile: React.FC = () => {
    const username = localStorage.getItem('username') || 'User';

  return (
    <div className="p-8 text-center">
      <h1 className="text-4xl font-bold mb-4">Мой профиль</h1>
      <p className="text-lg">
      <h2>Имя: {username}</h2>
      </p>
    </div>
  );
};

export default Profile;
