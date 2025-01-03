import React from 'react';

const UserProfile = () => {
  const { user } = useParams();
  return (
    <div>
      <Feed user={user} />
    </div>
  );
};

export default UserProfile;
