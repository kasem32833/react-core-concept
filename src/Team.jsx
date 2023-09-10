import { useState } from "react"

export default function Team(){
    const [player, setPlayer ] = useState(11)

    function addClickHandler(){
        setPlayer(player + 1)
    }
    function removeClickHandlaer(){
        setPlayer(player - 1)

    }


    return(
        <>
        <div style={{border: "5 px solid indigo", padding: "40px", margin: "40px"}}>
        <h3>Player:{player} </h3>
        <button style={{marginRight: "20px"}} onClick={addClickHandler}>Add Player</button>
        <button onClick={removeClickHandlaer}>Remove Player</button>

        </div>
        
        </>
    )
}