import { useLocation } from "react-router-dom";

export default function GameInfo() {
    const location = useLocation();
    const game = location.state.game;

    return (
        <div className="game-info">
            <h1>{game.name}</h1>
            <div className="game-details">
                <h2>Description</h2>
                <p>{game.description}</p>
                
                <h2>Publisher</h2>
                <p>{game.publisher}</p>
                
                <h2>Developer</h2>
                <p>{game.developer}</p>
            </div>
        </div>
    );
}