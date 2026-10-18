
import React, { Suspense } from 'react';
import Users from '@/components/users';

const getUsers = async () => {
  const response = await fetch('http://localhost:5000/users');

  if (!response.ok) {
    throw new Error('Failed to fetch users');
  }

  return response.json();
};

const UsersPage = () => {
  const usersPromise = getUsers();

  return (
    <div>
      <h2>Users Data:</h2>

      <Suspense fallback={<h2>Loading...</h2>}>
        <Users users={usersPromise} />
      </Suspense>
    </div>
  );
};

export default UsersPage;
