import React, {FC} from 'react'
import {IUser} from "./types/user";

interface ProfileProps {
  user: IUser
}

const Profile: FC<ProfileProps> = ({ user}) => {

  return (
    <div className="flex justify-center items-center min-h-screen">
      <h1>{user.login}</h1>
    </div>
  );
};

export default Profile;