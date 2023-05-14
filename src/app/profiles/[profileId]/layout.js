import React from 'react';

import './styles.css';

function ProfileLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

export default ProfileLayout;
