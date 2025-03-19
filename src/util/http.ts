export const fetchPokemonData = async (): Promise<any[]> => {
  try {
    let fetchedPokemons = [];
    for (let i = 1; i <= 5; i++) {
      let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`);
      if (!response.ok) throw new Error(`Failed to fetch Pokémon #${i}`);
      let data = await response.json();
      fetchedPokemons.push(data);
    }
    return fetchedPokemons;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
};
