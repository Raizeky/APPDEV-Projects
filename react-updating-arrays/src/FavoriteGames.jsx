import React, {useState} from 'react'
export default function Header(){
    const [games, setGames] = useState(["Hades", "Risk of Rain 2", "Doomsday Hunters", "Eldren Ring"])
    //function to add games
    function handleAddGame(){
        //referencing our text box
        const newGame = document.getElementById("gameInput").value;
        setGames(g => [... g, newGame])
        //reset textbox
        document.getElementById("gameInput").value= " ";
    }
    //function to remove a game from the list
    function handleRemoveGame(index){
        const newGame = games.filter((game, i) => i !== index)
        setGames(newGame)
    }
    return(
        <>
        <div>
            <h2>There are my favorite Games in 2024:</h2>
            <ul>
                {
                games.map((game, index) =>
                <li key = {index} onClick = {() => handleRemoveGame(index)}>{game}</li>)
                }
            </ul>
            <input type="text" name="gameInput" id="gameInput"/>
            <button type="button" onClick = {handleAddGame}>Add Game</button>
        </div>
        </>
    )
}