import React, { useState } from 'react'

function PopUp(props) {
  return (
    <div style={{
        position: 'absolute',
        margin: '100px 100px',
        border: '2px solid ',
        borderRadius: '20px',
        textAlign: "center",
        height: '100%',
        maxHeight: '400px',
        width: '100%',
        backgroundColor: "red",
        zIndex: "100"
    }}>
        <img src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${props.data}.svg`} />
    </div>
  )
}

export default PopUp