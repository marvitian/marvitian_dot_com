import React from  'react';

function HomeButton() {
  return (
    <button className="contentBox" onClick={() => window.location.href = '/'}>Home</button>
  );
}