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
    let selectedBot = event.target.id;
/*       let checker =selectedBots.filter(item => {
        if (item.id.includes(selectedBot)){
          return true
        }
        else{
          return false
        }
        
      })
      alert(checker) */
      setSelectedBots([...selectedBots,selectedBot])
   
  }

  function removeFromSelection(event){
    let selectedBot = event.target.id;
    alert(selectedBot)
    let amendedSelection = selectedBots.filter((item)=> item !== selectedBot)
    setSelectedBots(amendedSelection)
  }

  return (
    <div>
      <h3>BotsPage</h3>
      <div>{selectedBots.map((bot) => (<p>
        {bot}
      </p>))}</div>
      <YourBotArmy selectedBots={selectedBots} removeFromSelection={removeFromSelection} />
      <BotCollection botArray={botArray} selectedBots={selectedBots}  addBotToSelected={addBotToSelected} />
    </div>
  )
}

export default BotsPage;
