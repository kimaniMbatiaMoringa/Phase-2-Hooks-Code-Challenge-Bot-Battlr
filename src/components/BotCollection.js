import React from "react";
import { useState } from "react";

function BotCollection({botArray,addBotToSelected}) {

     
   const botArrayDisplay = botArray.map((bot)=>{
    return <div   onClick={addBotToSelected} key={bot.key} className="card">
      <img id={bot.id} className="card-img-top" src={bot.avatar_url}></img>
      <div className="card-body">
        <h5 className="card-title">{bot.name}</h5>
        <img></img>
        <p className="card-text">{bot.catchphrase}</p>
      </div>    
    </div>
  })

  //console.log(botArray)

  return (
    <div className="ui four column grid">
      <div className="row">
        {botArrayDisplay}
      </div>
    </div>
  );
}

export default BotCollection;
