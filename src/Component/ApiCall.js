import React, { useEffect, useState } from "react";

function ApiCall() {
    const [state, setState] = useState();
    const [newState, setNewState] = useState([]);
    var data ;

    useEffect (()=>{
      apiCallFun();
    },[])

    async function apiCallFun() {
      let response = await fetch('https://pokeapi.co/api/v2/pokemon/');
      let movies = await response.json();
      setState(JSON.stringify(movies));
    }
   

    async function apiCallNext (event) {
      let response = await fetch(event);
      let a = await response.json();
      setState(JSON.stringify(a));
    }

    async function apiCallPrevious (event) {
      let response = await fetch(event);
      let a = await response.json();
      setState(JSON.stringify(a));
    }
    
    const updateNext = () =>{
       data = JSON.parse(state);
      let newUrl = data.next;
      apiCallNext(newUrl);
    }

    const updatePrevious = () =>{
      data = JSON.parse(state);
      let newUrl = data.previous;
      apiCallPrevious(newUrl);
    }

  return (
    <div className="App">
      <div><button onClick={updateNext}> Next</button> </div>
      <div><button onClick={updatePrevious}> Previous</button></div>
      {/* {newState.map((val, index)=> <div><li key={index}>{val}</li></div>)} */}
      <div>{state}</div>
    </div>
  );
}

export default ApiCall;
