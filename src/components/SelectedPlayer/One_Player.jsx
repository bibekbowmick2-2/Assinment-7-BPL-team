import React from 'react';

import myImage4 from '../../../assets/delete.png';

export default function One_Player({ data, handleDelete }) {
  const { playerId, image, name, type } = data;

  return (
    <div role="alert" className="alert shadow-lg w-4/5 mx-auto mt-6">
      <div className="avatar">
        <div className="w-16 rounded">
          <img src={image} alt="Player Avatar" />
        </div>
      </div>

      <div>
        <h3 className="font-bold">{name}</h3>
        <div className="text-xs">{type}</div>
      </div>

      {/* Pass playerId directly to handleDelete */}
      <button onClick={() => handleDelete(playerId)} className="btn btn-sm">
        <img className="h-7 w-7" src={myImage4} alt="Delete Icon" />
      </button>
    </div>
  );
}
