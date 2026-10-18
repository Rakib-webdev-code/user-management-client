
'use client';

import { use } from 'react';

const Users = ({ users }) => {
  const usr = use(users);

  // API যদি সরাসরি Array দেয়
  const usersList = Array.isArray(usr) ? usr : [usr];

  return (
    <div>
      {usersList.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
};

export default Users;
