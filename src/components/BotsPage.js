import React from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";
import { useEffect } from "react";
import { useState } from "react";


function BotsPage() {
  //start here with your code for step one
  const [botArray, setBotArray] = useState([])
  const [renderBotCollection, setRenderBotCollection] = useState(false)
  const [selectedBots, setSelectedBots] = useState([])

  useEffect(()=>{
    console.log("useEffect called")
    setRenderBotCollection(true)
    fetch("http://localhost:4000/bots")
    .then((r)=> r.json())
    .then((data)=>setBotArray(data))
    setRenderBotCollection(true)
    //console.log(botArray) 
  },[])


  function addBotToSelected(event){
    const selectedBotId = event.target.name;
    //alert(selectedBotId)
    //if(typeof selectedBotId == 'string'){alert('Its a String')}
    //const result = Array.isArray(botArray)
    //alert(result)
    const returnedBot = botArray.find((bot)=> bot.name.includes(selectedBotId))
    setSelectedBots([...selectedBots,returnedBot])
  }

  function removeFromSelection(event){
    let selectedBot = String(event.target.id)
    //alert(selectedBot)
    let amendedSelection = selectedBots.filter((item)=> item.id != selectedBot)
    setSelectedBots(amendedSelection)
  }

  function removefromBotArray(event){
    let selectedBot = String(event.target.id);
    
  }

  return (
    <div>
      <h3>BotsPage</h3>
{/*       <div>{selectedBots.map((bot) => (<p>
        {bot}
      </p>))}</div> */}
      <YourBotArmy selectedBots={selectedBots} removeFromSelection={removeFromSelection} />
      <BotCollection botArray={botArray} selectedBots={selectedBots}  addBotToSelected={addBotToSelected} />
    </div>
  )
}

export default BotsPage;
