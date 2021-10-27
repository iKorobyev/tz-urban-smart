import React, {FC, useEffect, useState} from 'react'
import {IUser} from "./types/user";

interface ProfileProps {
  user: IUser
}

const Profile: FC<ProfileProps> = ({ user}) => {
  let [login, setLogin] = useState<string | null>('');
  useEffect(() => {
    setLogin(localStorage.getItem('login'))
  }, [])

  return (
    <div className="flex justify-center items-center min-h-screen">
      <h1>{login && user.login}</h1>
    </div>
  );
};

export default Profile;