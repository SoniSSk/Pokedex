import React, { useEffect, useState } from 'react'

function Ss() {
    const [data1, setData1 ] = useState([]);
    // var data ;

    useEffect (()=>{
      apiCallFun();
    },[])
    
    // useEffect (()=>{
    //   console.log(data1);
    // },[data1])

    async function apiCallFun() {
    //   let response =  fetch('https://pokeapi.co/api/v2/pokemon/')
    //   .then((response) => response.json())
    //   .then((response) => setData1(response.results))
    //   let data = await response.json();
    // //   console.log("a")
    //   console.log(JSON.stringify(data));
    const res = {"count":1154,"next":"https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20","previous":null,"results":[{"name":"bulbasaur","url":"https://pokeapi.co/api/v2/pokemon/1/"},{"name":"ivysaur","url":"https://pokeapi.co/api/v2/pokemon/2/"},{"name":"venusaur","url":"https://pokeapi.co/api/v2/pokemon/3/"},{"name":"charmander","url":"https://pokeapi.co/api/v2/pokemon/4/"},{"name":"charmeleon","url":"https://pokeapi.co/api/v2/pokemon/5/"},{"name":"charizard","url":"https://pokeapi.co/api/v2/pokemon/6/"},{"name":"squirtle","url":"https://pokeapi.co/api/v2/pokemon/7/"},{"name":"wartortle","url":"https://pokeapi.co/api/v2/pokemon/8/"},{"name":"blastoise","url":"https://pokeapi.co/api/v2/pokemon/9/"},{"name":"caterpie","url":"https://pokeapi.co/api/v2/pokemon/10/"},{"name":"metapod","url":"https://pokeapi.co/api/v2/pokemon/11/"},{"name":"butterfree","url":"https://pokeapi.co/api/v2/pokemon/12/"},{"name":"weedle","url":"https://pokeapi.co/api/v2/pokemon/13/"},{"name":"kakuna","url":"https://pokeapi.co/api/v2/pokemon/14/"},{"name":"beedrill","url":"https://pokeapi.co/api/v2/pokemon/15/"},{"name":"pidgey","url":"https://pokeapi.co/api/v2/pokemon/16/"},{"name":"pidgeotto","url":"https://pokeapi.co/api/v2/pokemon/17/"},{"name":"pidgeot","url":"https://pokeapi.co/api/v2/pokemon/18/"},{"name":"rattata","url":"https://pokeapi.co/api/v2/pokemon/19/"},{"name":"raticate","url":"https://pokeapi.co/api/v2/pokemon/20/"}]};
    setData1(res);
    }
   
//     async function apiCallNext (event) {
//       let response = await fetch(event);
//       let a = await response.json();
//       setData1(JSON.stringify(a));
//     }

//     async function apiCallPrevious (event) {
//       let response = await fetch(event);
//       let a = await response.json();
//       setData1(JSON.stringify(a));
//     }
    
//     const updateNext = () =>{
//        data = JSON.parse(data1);
//       let newUrl = data.next;
//       apiCallNext(newUrl);
//     }

//     const updatePrevious = () =>{
//       data = JSON.parse(data1);
//       let newUrl = data.previous;
//       apiCallPrevious(newUrl);
//     }
    
//     const OpenPopUp = (data) =>{
//         return (
//         alert("Welcome")
//         );
//    }

  return (
    <div>
        {/* <div style={{margin:'30px 100px', border: '2px solid red' , borderRadius:'20px', textAlign: "center", float:"center" }}>
            <div><p onClick={OpenPopUp}>{data1}</p></div>
        </div>
        <div><span style={{ textAlign: "left" }}><button onClick={updateNext}>Next </button> </span>
        <span style={{ textAlign: "right" }}><button onClick={updatePrevious}>Previous </button> </span></div> */}

        {/* <button style={{ textAlign: "right" }} >Previous </button></div> */}
            {/* {da.map((a) => <div><li key={a}>{a}</li></div>)} */}
            {JSON.stringify(data1.results)}

            {/* {data1.results.map((a, index)=> <div key={index}><li >{a}</li></div>)} */}
    </div>
  )
}

export default Ss