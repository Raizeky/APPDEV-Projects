import React, { useState, useEffect } from "react";
import Axios from "axios";
import { motion } from "framer-motion";
import { Bar } from "react-chartjs-2"; 
import './CSS/AllPoke.css';
import logo from './IMG/logo.png';
import loadingGif from './IMG/Pika.gif';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'; 

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend); 

const typeColors = {
    normal: '#A8A77A',
    fire: '#EE8130',
    water: '#6390F0',
    electric: '#F7D02C',
    grass: '#7AC74C',
    ice: '#96D9D6',
    fighting: '#C22E28',
    poison: '#A33EA1',
    ground: '#E2BF65',
    flying: '#A98FF3',
    psychic: '#F95587',
    bug: '#A6B91A',
    rock: '#B6A136',
    ghost: '#735797',
    steel: '#B7B7CE',
    dragon: '#6F35FC',
    dark: '#705746',
    fairy: '#D685AD',
};

const statColors = {
    hp: '#FF6384',
    attack: '#FF9F40',
    defense: '#00CC00',
    special_attack: '#007BFF',
    special_defense: '#FF69B4',
    speed: '#9933FF',
};

export default function AllPoke() {
    const [pokemonList, setPokemonList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedPokemon, setSelectedPokemon] = useState(null);

    useEffect(() => {
        const fetchPokemon = async () => {
            try {
                const response = await Axios.get("https://pokeapi.co/api/v2/pokemon?limit=1000");
                const gen2Pokemon = response.data.results.slice(151, 251);

                const pokemonData = await Promise.all(
                    gen2Pokemon.map(async (pokemon) => {
                        const pokeDetails = await Axios.get(pokemon.url);
                        const speciesDetails = await Axios.get(pokeDetails.data.species.url);
                        const description = speciesDetails.data.flavor_text_entries.find(entry => 
                            entry.language.name === 'en'
                        )?.flavor_text.replace(/[\f\n\r]/g, ' ') || 'No description available.';
                        
                        const speciesName = speciesDetails.data.genera.find(genus =>
                            genus.language.name === 'en'
                        )?.genus || 'Unknown Species';

                        return {
                            name: pokeDetails.data.name,
                            id: pokeDetails.data.id,
                            sprite: pokeDetails.data.sprites.other['official-artwork'].front_default,
                            height: pokeDetails.data.height,
                            weight: pokeDetails.data.weight,
                            types: pokeDetails.data.types.map(type => type.type.name),
                            stats: pokeDetails.data.stats.map(stat => ({
                                name: stat.stat.name,
                                value: stat.base_stat,
                            })),
                            description,
                            species: speciesName
                        };
                    })
                );

                setPokemonList(pokemonData);
            } catch (error) {
                console.error("Error fetching Pokémon data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPokemon();
    }, []);

    const handlePokemonClick = (pokemon) => {
        setSelectedPokemon(pokemon);
    };

    const getGradientBackground = (types) => {
        if (types.length === 1) {
            return typeColors[types[0].toLowerCase()];
        }
        if (types.length > 1) {
            const color1 = typeColors[types[0].toLowerCase()];
            const color2 = typeColors[types[1].toLowerCase()];
            return `linear-gradient(135deg, ${color1} 30%, ${color2} 70%)`;
        }
        return '#FFFFFF';
    };

    const handleNextPokemon = (direction) => {
        if (selectedPokemon) {
            const currentIndex = pokemonList.findIndex(p => p.id === selectedPokemon.id);
            let nextIndex = (currentIndex + direction + pokemonList.length) % pokemonList.length; 
            setSelectedPokemon(pokemonList[nextIndex]);
        }
    };

    const handleKeyDown = (event) => {
        if (event.key === 'ArrowRight') handleNextPokemon(1);
        else if (event.key === 'ArrowLeft') handleNextPokemon(-1);
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedPokemon, pokemonList]);
    const barChartData = {
        labels: selectedPokemon ? selectedPokemon.stats.map(stat => stat.name.charAt(0).toUpperCase() + stat.name.slice(1)) : [],
        datasets: [
            {
                label: 'Stats',
                data: selectedPokemon ? selectedPokemon.stats.map(stat => stat.value) : [],
                backgroundColor: selectedPokemon ? selectedPokemon.stats.map(stat => statColors[stat.name] || '#000000') : [], 
                borderColor: selectedPokemon ? selectedPokemon.stats.map(stat => statColors[stat.name] || '#000000') : [],
                borderWidth: 1,
            },
        ],
    };
    
    const barChartOptions = {
        indexAxis: 'y',
        scales: {
            x: {
                ticks: {
                    color: 'black',
                    font: {
                        weight: 'bold',
                    },
                },
                beginAtZero: true,
            },
            y: {
                ticks: {
                    color: 'black',
                    font: {
                        weight: 'bold',
                    },
                },
                beginAtZero: true,
            },
        },
        plugins: {
            legend: {
                labels: {
                    color: 'black',
                    font: {
                        weight: 'bold',
                    },
                },
            },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        return `${context.dataset.label}: ${context.raw}`;
                    },
                },
            },
        },
        elements: {
            bar: {
                borderWidth: 2,
            },
        },
    };
    
    

    if (loading) {
        return (
            <div className="loading-container">
                <img src={loadingGif} alt="Loading..." style={{ width: '150px', height: '150px' }} />
            </div>
        );
    }

    return (
        <div>
            <img src={logo} alt="Logo" className="logo" />
            <div className="List">
                {pokemonList.map(pokemon => (
                    <motion.div 
                        key={pokemon.id} 
                        onClick={() => handlePokemonClick(pokemon)} 
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        style={{ background: getGradientBackground(pokemon.types) }} 
                    >
                        <img src={pokemon.sprite} alt={pokemon.name} />
                        <div>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</div>
                    </motion.div>
                ))}
            </div>

            {selectedPokemon && (
                <div className="modal">
                    <div className="modal-content" style={{ background: getGradientBackground(selectedPokemon.types) }}>
                        <h2 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', margin: '10px 0' }}>
                            <strong style={{ marginBottom: '5px' }}>
                                {selectedPokemon.name.charAt(0).toUpperCase() + selectedPokemon.name.slice(1)}
                            </strong>
                            <span style={{ fontSize: '14px', color: '#FFFFFF' }}>
                                #{selectedPokemon.id}
                            </span>
                        </h2>

                        <div className="type-block">
                            {selectedPokemon.types.map((type) => (
                                <span 
                                    key={type} 
                                    className={`type-badge ${type.toLowerCase()}`}
                                >
                                    {type.charAt(0).toUpperCase() + type.slice(1)}
                                </span>
                            ))}
                        </div>

                        <img src={selectedPokemon.sprite} alt={selectedPokemon.name} style={{ width: '150px', height: 'auto', marginBottom: '10px' }} />
                        <p><strong>Height:</strong> {(selectedPokemon.height / 10).toFixed(1)} m</p>
                        <p><strong>Weight:</strong> {(selectedPokemon.weight / 10).toFixed(1)} kg</p>
                        <p><strong>Species:</strong> {selectedPokemon.species}</p>
                        
                        <p><strong>Stats:</strong></p>
                        <Bar data={barChartData} options={barChartOptions} />

                        <p style={{ textAlign: 'center', marginBottom: '10px' }}><strong>Facts:</strong></p>
                        <p style={{ textAlign: 'center', marginBottom: '10px' }}>{selectedPokemon.description}</p>
                        <button onClick={() => setSelectedPokemon(null)}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
}
