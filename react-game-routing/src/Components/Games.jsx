import { Link } from "react-router-dom"

const games = [
    {id:1, name: 'The Legend of Zelda: Breath of the Wild', 
        description: 'An open-world action-adventure game where players explore the vast kingdom of Hyrule, solve puzzles, and defeat enemies to rescue Princess Zelda and defeat Calamity Ganon.',
        publisher: 'Nintendo',
        developer: 'Nintendo EPD',
        
    },
    {id:2, name: 'Super Mario Odyssey', 
        description: 'A 3D platformer that follows Mario on a globe-trotting adventure to rescue Princess Peach from Bowser, featuring innovative gameplay mechanics with Mario`s new companion, Cappy.',
        publisher: 'Nintendo',
        developer: 'Nintendo EPD'
    },
    {id:3, name: 'Wild Hunt', 
        description: 'An open-world RPG where players control Geralt of Rivia, a monster hunter, as he searches for his adopted daughter while navigating a war-torn world filled with rich storytelling and complex characters.',
        publisher: 'CD Projekt',
        developer: 'CD Projekt Red'
    },
    {id:4, name: 'Minecraft', 
        description: 'A sandbox game that allows players to build and explore virtual worlds made up of blocks, offering various modes including survival, creative, and adventure.',
        publisher: 'Mojang Studios',
        developer: 'Mojang Studios'
    },
    {id:5, name: ' Hollow Knight', 
        description: 'Hollow Knight is a critically acclaimed action-adventure game set in the beautifully hand-drawn, dark, and mysterious world of Hallownest. Players take on the role of a small, silent knight exploring the depths of a fallen kingdom filled with unique characters, challenging enemies, and intricate platforming mechanics. With a focus on exploration, combat, and storytelling, players uncover the secrets of Hallownest while acquiring new abilities and upgrades to help them navigate the vast interconnected world.',
        publisher: 'Team Cherry',
        developer: 'Team Cherry EPD',
        
    },
]

export default function Games() {
    return (
        <>
            <h1>Games List</h1>
            <ul>
                {games.map((game) => (
                    <li key={game.id}>
                        <Link to={`/games/${game.id}`} state={{ game }}>
                            {game.name.toLocaleUpperCase()}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
}