import React, { useEffect, useState } from 'react'

function PokemonApiCall() {
    const [ids, setIds] = useState({});
    const [open, setOpen] = useState(false);
    const [currentId, setCurrentId] = useState();

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
        setOpen(false);
        let newUrl = ids?.nextUrl;
        apiCallNext(newUrl);
    }

    const updatePrevious = () => {
        setOpen(false);
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
            {open && (
                <div style={{
                    position: 'absolute',
                    textAlign: 'center',
                    margin: '200px 220px',
                    border: '2px solid ',
                    borderRadius: '20px',
                    textAlign: "center",
                    height: '100%',
                    maxHeight: '400px',
                    width: '70%',
                    backgroundColor: "lightyellow",
                    zIndex: "100"
                }}>
                    <div style={{ padding: '20px', textAlign: "right", float: "right" }} onClick={OpenPopUpClose}> <button
                        style={{
                            backgroundColor: "red",
                        }}>Close</button></div>
                    <img style={{
                                width: '200px',
                                height: '200px'
                            }} src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${currentId}.svg`} />
                </div>
            )}
            {/* {JSON.stringify(ids)} */}
            <div style={{ margin: '30px 100px', border: '2px solid red', borderRadius: '20px', textAlign: "center", float: "center" }}>
                <div style={{
                    display: 'grid',
                    // gridAutoColumns: "400px 400px",
                    gridTemplateColumns: '154px 154px 154px 154px 154px 154px 154px 158px '
                }}>
                    {ids?.pokId?.map((imgId, ind) =>
                        <div style={{
                            backgroundColor: "lightblue",
                            border: '1px solid black',
                            borderRadius: '20px'
                        }} onClick={() => { OpenPopUp(imgId.id) }} key={ind}>
                            <img style={{
                                width: '100px',
                                height: '100px'
                            }}
                                src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${imgId.id}.svg`} />
                            <h1>Id : {imgId.id}</h1>
                            <h5>Name : {imgId.name}</h5>
                        </div>)}
                </div>
                <br></br>
                <div><span style={{ textAlign: "left", height:'200px'}}><button style={{  
                 border: '2px solid black',
                  borderRadius: '20px', 
                  color:'green',
                  height:'50px',
                  width:'270px'

                }} onClick={updateNext}>Next </button> </span>
                <span style={{ textAlign: "right" }}><button style={{  
                 border: '2px solid black',
                  borderRadius: '20px', 
                  color:'green',
                  width:'270px',
                  height:'50px'
                }} onClick={updatePrevious}>Previous </button> </span></div>
            </div>
            {/* <div><span style={{ textAlign: "left" }}><button onClick={updateNext}>Next </button> </span>
                <span style={{ textAlign: "right" }}><button onClick={updatePrevious}>Previous </button> </span></div> */}



        </div>
    )
}

export default PokemonApiCall
