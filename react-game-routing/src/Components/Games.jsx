import { Link } from "react-router-dom";
import '../Component Css/Games.css'
const games = [
    {id:1, name: 'The Legend of Zelda: Breath of the Wild', 
        description: 'An open-world action-adventure game where players explore the vast kingdom of Hyrule, solve puzzles, and defeat enemies to rescue Princess Zelda and defeat Calamity Ganon.',
        publisher: 'Nintendo',
        developer: 'Nintendo EPD',
        review: ['The Legend of Zelda: Breath of the Wild is one of the best games ever made.',
            'Breath of the Wild is a defining moment for The Legend of Zelda series, and the most impressive game Nintendo has ever delivered.',
            'A game that marries the best bits of the franchise’s long history with the best bits of the rest of the gaming world, and produces something even greater than the sum of its parts.',
        ],
        image:'https://assets.vg247.com/current/2017/01/the_legend_of_zelda_breath_of_the_wild_new_header_finally.jpg'
        
    },
    {id:2, name: 'Super Mario Odyssey', 
        description: 'Super Mario Odyssey is a popular 3D platformer game developed by Nintendo for the Nintendo Switch. In this adventure, Mario travels across various kingdoms beyond the Mushroom Kingdom, each with its own unique theme and challenges. His mission is to rescue Princess Peach from Bowser, who plans to marry her against her will.',
        publisher: 'Nintendo',
        developer: 'Nintendo EPD',
        review: ['This is another Mario all-time classic that we’ll be remembering and celebrating for decades to come.',
            'A joyful celebration - and evolution - of the Super Mario series, that encapsulates all the fun and creativity of video gaming at its very best.',
            'A mix of the nostalgic, the fantastical, and the wonderfully bizarre, Mario’s latest adventure provides more than a dozen tantalizing playgrounds to explore. With hundreds of collectibles, Kingdoms full of delightful details, and secrets waiting around every corner, Super Mario Odyssey is bound to keep players exploring long after the credits roll.'
        ],
        image:'https://th.bing.com/th/id/OIP.G18BVhve_JrJnUF_sSQanwHaE2?w=1500&h=983&rs=1&pid=ImgDetMain'
    },
    {id:3, name: 'Wicher 3: Wild Hunt', 
        description: 'An open-world RPG where players control Geralt of Rivia, a monster hunter, as he searches for his adopted daughter while navigating a war-torn world filled with rich storytelling and complex characters.',
        publisher: 'CD Projekt',
        developer: 'CD Projekt Red',
        review: ['This game has got characters that you actually care about, a story that is very engaging from the get go and almost flawless gaming mechanics.',
            'The way in which the developers manage to wrangle the various, divergent threads of your unique journey, with all of its composite choices and outcomes, while entirely concealing the seams is masterly.',
            'The Witcher 3: Wild Hunt is equal parts daunting, accessible, beautiful and hideous, but every aspect combines in such a remarkable way that it’s nearly impossible to not give it a sweeping recommendation.'
        ],
        image:'https://www.heypoorplayer.com/wp-content/uploads/2015/06/wildhunt.jpg'
    },
    {id:4, name: 'Minecraft', 
        description: 'A sandbox game that allows players to build and explore virtual worlds made up of blocks, offering various modes including survival, creative, and adventure.',
        publisher: 'Mojang Studios',
        developer: 'Mojang Studios',
        review: ['Minecraft is a masterpiece, a seminal title which will be played and studied for years.',
            'For anyone looking for the ultimate in expression and aesthetic satisfaction, or merely searching for a game that will virtually limitless exploration and achievement, Minecraft offers it all.',
            'Minecraft is a towering achievement in the very possibilities of gaming, and it does this without losing itself to either esoterica or cynicism. It is a game anyone can play and anyone can get something out of, no matter how skilled or imaginative they are. They will make something and they will have an experience that feels like theirs and theirs alone.'
        ],
        image:'https://cdn11.dienmaycholon.vn/filewebdmclnew/public/userupload/files/Minecraft%20(1).png'
    },
    {id:5, name: 'Hollow Knight', 
        description: 'Hollow Knight is a critically acclaimed action-adventure game set in the beautifully hand-drawn, dark, and mysterious world of Hallownest. Players take on the role of a small, silent knight exploring the depths of a fallen kingdom filled with unique characters, challenging enemies, and intricate platforming mechanics. With a focus on exploration, combat, and storytelling, players uncover the secrets of Hallownest while acquiring new abilities and upgrades to help them navigate the vast interconnected world.',
        publisher: 'Team Cherry',
        developer: 'Team Cherry EPD',
        review: ['This is one of the best Metroidvania’s ever made. A modern classic.',
            'Hollow Knight is deliberate in ways few games are, from its tough-love first hours all the way to the end of its long, content-packed journey. Challenging end-game bosses put every single skill I had to the test and left me with a sense of mastery.',
            'Hollow Knight is a big, beautiful, forbidding Metroidvania that is absolutely thick with detail. From its punchy combat system to its charming art and sound design, this is one of the finest adventures you can have on Nintendo Switch.'
        ],
        image:'https://wallpapercave.com/wp/wp4265340.jpg'
    },
];

export default function Games() {
    return (
        <>
            <h1>Games List</h1>
            <div className="games-container">
                <div className="game-list">
                    <ul>
                        {games.map((game) => (
                            <li key={game.id}>
                                <Link to={`/games/${game.id}`} state={{ game }}>
                                    <img src={game.image} alt={game.name}/>
                                    {game.name.toLocaleUpperCase()}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}