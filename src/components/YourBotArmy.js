import React, { useEffect, useState } from "react";

function YourBotArmy({ selectedBots, removeFromSelection }) {
  //your bot army code here...
  //const [botFullDetails, setBotFullDetails] = useState([selectedBots])

/*   useEffect(() => {
    const querySelectedBots = selectedBots.map((item) => (
      fetch(`http://localhost:4000/bots/${item}`)
        .then((r) => r.json())
        .then((data) => setBotFullDetails([...botFullDetails, data]))
    ))
  }, [selectedBots]) */



  const cardStyle ={
    width: "18rem"
  }

  const cardPictureStyle ={
    width:'250px',
    height: '250px'
  }

  const printSelectedBots = selectedBots.map((bot) => (
    <div className="card" style={cardStyle} onClick={removeFromSelection}>
      <img id={bot.id} src={bot.avatar_url} style={cardPictureStyle}></img>
      <h3 key={bot.id}>{bot.name}</h3>
    </div>

  ))

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {/*...and here...*/}
          Your Bot Army
          {printSelectedBots}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
