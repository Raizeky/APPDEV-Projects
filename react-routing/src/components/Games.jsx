import { Link } from "react-router-dom"
const games = [
    {id:1, name: 'Teamfight Tactics', description: 'This is the best game chess auto battler in the world.'},
    {id:2, name: 'Valorant', description: 'This is the most popular FPS game in the world.'},
    {id:3, name: '2KXO', description: 'This is the upcoming 2v2 Team Fighing Game.'},
]

export default function Games(){
    return(
        <>
        <h1>Games List</h1>
        <ul>
            {games.map((game) => (
                <li key={game.id}>
                    <Link to ={`/games/${game.id}`} state={{game}}>
                        {game.name.toLocaleUpperCase()}</Link> - {game.description}
                </li>
            ))}
        </ul>
        </>
    )
}