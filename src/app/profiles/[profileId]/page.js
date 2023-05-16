import React from 'react';
import { Globe } from 'react-feather';

import { getProfileInfo } from '../../../helpers';

async function ProfilePage({
  params,
  searchParams,
}) {
  const profile = await getProfileInfo(
    params.profileId
  );

  if (!profile) {
    return (
      <main>
        <div className="content">
          <p>Profile not found</p>
        </div>
      </main>
    );
  }

  return (
    <main>
      <div className="content">
        <h1>{profile.name}</h1>
        <p className="handle">
          {profile.username}
        </p>

        <p className="bio">{profile.bio}</p>
        <p className="location">
          <Globe size={16} />
          {profile.location}
        </p>

        <dl className="stats">
          <dt>Following:</dt>
          <dd>{profile.following}</dd>
          <dt>Followers:</dt>
          <dd>{profile.followers}</dd>
        </dl>
      </div>
    </main>
  );
}

export default ProfilePage;
