import React from 'react';
import "../styles/player.css";

const Player = () => {
   return(
      <div id='playerStats'>
         <h1>MIT MIRANI</h1>
         <div id='playerStats_lines'>
            <span id='player_lines_thick'></span>
            <span id='player_lines_thin'></span>
         </div>
         <h2>Fullstack Developer</h2>
      </div>
   )
};

export default Player;