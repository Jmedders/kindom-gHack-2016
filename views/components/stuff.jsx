import React from 'react'

const PlayerStats = (props) => {
  return(
    <div className="player-stats col-xs-4">
      <span>{props.player.name}</span>
    </div>
  );
};

export default PlayerStats
