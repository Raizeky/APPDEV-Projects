import { useLocation } from "react-router-dom";
import '../Component Css/GameInfo.css';

export default function GameInfo() {
    const location = useLocation();
    const game = location.state?.game;  // Safeguard in case `game` is not passed

    // Check if game data is available
    if (!game) {
        return <div>Game information not available.</div>;
    }

    return (
        <div className="game-info">
            <h1>{game.name}</h1>
            <img src={game.image} alt={game.name} className="game-image" />
            <div className="game-details">
                <h2>Description:</h2>
                <p>{game.description}</p>
                
                <h2>Publisher:</h2>
                <p>{game.publisher}</p>
                
                <h2>Developer:</h2>
                <p>{game.developer}</p>
            </div>

            <div>
                <h2>Reviews:</h2>
                <ul>
                    {game.review.map((review, index) => (
                        <li key={index}>{review}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
