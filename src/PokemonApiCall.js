import React, { useEffect, useState } from 'react'
import PopUp from './PopUp';

function PokemonApiCall() {
    const [ids, setIds] = useState({});
    const [open, setOpen] = useState(false);
    const[currentId, setCurrentId] = useState();

    let data;



    useEffect(() => {
        apiCallFun();
    }, [])

    async function apiCallFun() {
        const pokId = [];
        let response = await fetch('https://pokeapi.co/api/v2/pokemon/');
        let movies = await response.json();
        //   setState(movies);
        console.log(movies);
        movies?.results.map((obj, index) =>
        //   {obj.url} 
        {
            console.log(obj.url)
            let arr = obj.url.split("/");
            const newObjId = { id: arr.at(-2), name: obj.name, url: obj.url };
            pokId.push(newObjId);
        }
        )
        console.log("pokId", pokId)
        console.log(movies.next);
        setIds({ pokId: pokId, nextUrl: movies.next, previousUrl: movies.previous });
    }


    async function apiCallNext(event) {
        const pokId = [];
        let response = await fetch(event);
        let movies = await response.json();
        //   setState(movies);
        console.log(movies);
        movies?.results.map((obj, index) =>
        //   {obj.url} 
        {
            console.log(obj.url)
            let arr = obj.url.split("/");
            const newObjId = { id: arr.at(-2), name: obj.name, url: obj.url };
            pokId.push(newObjId);
        }
        )
        console.log("pokId", pokId)
        console.log(movies.next);
        setIds({ pokId: pokId, nextUrl: movies.next, previousUrl: movies.previous });

    }

    async function apiCallPrevious(event) {
        const pokId = [];
        let response = await fetch(event);
        let movies = await response.json();
        //   setState(movies);
        console.log(movies);
        movies?.results.map((obj, index) =>
        //   {obj.url} 
        {
            console.log(obj.url)
            let arr = obj.url.split("/");
            const newObjId = { id: arr.at(-2), name: obj.name, url: obj.url };
            pokId.push(newObjId);
        }
        )
        console.log("pokId", pokId)
        console.log(movies.next);
        setIds({ pokId: pokId, nextUrl: movies.next, previousUrl: movies.previous });
    }

    const updateNext = () => {

        let newUrl = ids?.nextUrl;
        apiCallNext(newUrl);
    }

    const updatePrevious = () => {
        let newUrl = ids?.previousUrl;
        apiCallPrevious(newUrl);
    }


    const OpenPopUp = (data) => {
        // alert(data)
        setOpen(true);
        setCurrentId(data);

        // return (

    }
    const OpenPopUpClose = () => {
        setOpen(false);
    }



    return (
        <div>
            {open &&  (
             <div style={{
                position: 'absolute',
                textAlign:'center',
                margin: '200px 220px',
                border: '2px solid ',
                borderRadius: '20px',
                textAlign: "center",
                height: '100%',
                maxHeight: '400px',
                width: '70%',
                backgroundColor: "red",
                zIndex: "100"
            }}>
                <div style={{ textAlign: "right", float: "right" }} onClick={OpenPopUpClose}> <FontAwesomeIcon icon="fa-solid fa-xmark" /></div>
                <img src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${currentId}.svg`} />
            </div>
            )}
            {/* {JSON.stringify(ids)} */}
            <div style={{ margin: '30px 100px', border: '2px solid red', borderRadius: '20px', textAlign: "center", float: "center" }}>
                {ids?.pokId?.map((imgId, ind) => <div class={"flex-container"} onClick={ ()=> { OpenPopUp(imgId.id)}  } key={ind}>
                    <img src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${imgId.id}.svg`} />
                </div>)}
            </div>
            <div><span style={{ textAlign: "left" }}><button onClick={updateNext}>Next </button> </span>
                <span style={{ textAlign: "right" }}><button onClick={updatePrevious}>Previous </button> </span></div>



        </div>
    )
}

export default PokemonApiCall