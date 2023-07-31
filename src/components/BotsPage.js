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
    //let selectedBot = event.target.id;
    alert(event.target.id)
  }

 
  
  return (
    <div>
      <h3>BotsPage</h3>
      <YourBotArmy />
      <BotCollection botArray={botArray} addBotToSelected={addBotToSelected} />
    </div>
  )
}

export default BotsPage;
