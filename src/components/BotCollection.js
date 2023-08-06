import React from "react";
import { useState } from "react";

function BotCollection({botArray,addBotToSelected,selectedBots }) {

  const cardStyle ={
    width: "18rem"
  }

  const cardPictureStyle ={
    width:'250px',
    height: '250px'
  }

     
   const botArrayDisplay = botArray.map((bot)=>{
    return <div className="card" style={cardStyle} onClick={addBotToSelected} key={bot.key} >
      <img name={bot.name} className="card-img-top" style={cardPictureStyle} src={bot.avatar_url}></img>
      <div id={bot.id} className="card-body">
        <h5 id={bot.id} className="card-header">{bot.name}</h5>
        <img></img>
        <p id={bot.id} className="card-text">{bot.catchphrase}</p>
      </div>
      <div className="card-footer">
        <p>{bot.health}</p>  
      </div>    
    </div>
  })

  return (
    <div className="ui four column grid">
      <div className="row">
        {botArrayDisplay}
      </div>
    </div>
  );
}

export default BotCollection;
