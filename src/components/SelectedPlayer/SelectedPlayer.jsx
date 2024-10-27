import React from 'react'

import One_Player from "./One_Player";

export default function SelectedPlayer(props) {

    const {player,handleDelete,handleSwitchbutton}= props;
  return (
    <>
    <div className='ml-48 mt-6'>SelectedPlayer({player.length}/6)</div>
    
        {
            player.map((p) => (
            <One_Player key={p.playerId} data={p} handleDelete={handleDelete} />
          ))
        }

      
      <div className='mt-11 ml-36'>
        <button onClick={()=>handleSwitchbutton("available")} class="btn btn-warning border-slate-800">Add More Player</button>
        </div>

</>
  )
}
