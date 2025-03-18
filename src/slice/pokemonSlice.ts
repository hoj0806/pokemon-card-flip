import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
interface pokemonSliceType {
  data: any[];
}

const initialState: pokemonSliceType = {
  data: [
    { pokemonName: "Bulbasaur", number: 1, imageUrl: "" },
    { pokemonName: "Ivysaur", number: 2, imageUrl: "" },
    { pokemonName: "Venusaur", number: 3, imageUrl: "" },
    { pokemonName: "Charmander", number: 4, imageUrl: "" },
    { pokemonName: "Charmeleon", number: 5, imageUrl: "" },
    { pokemonName: "Charizard", number: 6, imageUrl: "" },
    { pokemonName: "Squirtle", number: 7, imageUrl: "" },
    { pokemonName: "Wartortle", number: 8, imageUrl: "" },
    { pokemonName: "Blastoise", number: 9, imageUrl: "" },
    { pokemonName: "Caterpie", number: 10, imageUrl: "" },
    { pokemonName: "Metapod", number: 11, imageUrl: "" },
    { pokemonName: "Butterfree", number: 12, imageUrl: "" },
    { pokemonName: "Weedle", number: 13, imageUrl: "" },
    { pokemonName: "Kakuna", number: 14, imageUrl: "" },
    { pokemonName: "Beedrill", number: 15, imageUrl: "" },
    { pokemonName: "Pidgey", number: 16, imageUrl: "" },
    { pokemonName: "Pidgeotto", number: 17, imageUrl: "" },
    { pokemonName: "Pidgeot", number: 18, imageUrl: "" },
    { pokemonName: "Rattata", number: 19, imageUrl: "" },
    { pokemonName: "Raticate", number: 20, imageUrl: "" },
    { pokemonName: "Spearow", number: 21, imageUrl: "" },
    { pokemonName: "Fearow", number: 22, imageUrl: "" },
    { pokemonName: "Ekans", number: 23, imageUrl: "" },
    { pokemonName: "Arbok", number: 24, imageUrl: "" },
    { pokemonName: "Pikachu", number: 25, imageUrl: "" },
    { pokemonName: "Raichu", number: 26, imageUrl: "" },
    { pokemonName: "Sandshrew", number: 27, imageUrl: "" },
    { pokemonName: "Sandslash", number: 28, imageUrl: "" },
    { pokemonName: "Nidoran♀", number: 29, imageUrl: "" },
    { pokemonName: "Nidorina", number: 30, imageUrl: "" },
    { pokemonName: "Nidoqueen", number: 31, imageUrl: "" },
    { pokemonName: "Nidoran♂", number: 32, imageUrl: "" },
    { pokemonName: "Nidorino", number: 33, imageUrl: "" },
    { pokemonName: "Nidoking", number: 34, imageUrl: "" },
    { pokemonName: "Clefairy", number: 35, imageUrl: "" },
    { pokemonName: "Clefable", number: 36, imageUrl: "" },
    { pokemonName: "Vulpix", number: 37, imageUrl: "" },
    { pokemonName: "Ninetales", number: 38, imageUrl: "" },
    { pokemonName: "Jigglypuff", number: 39, imageUrl: "" },
    { pokemonName: "Wigglytuff", number: 40, imageUrl: "" },
    { pokemonName: "Zubat", number: 41, imageUrl: "" },
    { pokemonName: "Golbat", number: 42, imageUrl: "" },
    { pokemonName: "Oddish", number: 43, imageUrl: "" },
    { pokemonName: "Gloom", number: 44, imageUrl: "" },
    { pokemonName: "Vileplume", number: 45, imageUrl: "" },
    { pokemonName: "Paras", number: 46, imageUrl: "" },
    { pokemonName: "Parasect", number: 47, imageUrl: "" },
    { pokemonName: "Venonat", number: 48, imageUrl: "" },
    { pokemonName: "Venomoth", number: 49, imageUrl: "" },
    { pokemonName: "Diglett", number: 50, imageUrl: "" },
    { pokemonName: "Dugtrio", number: 51, imageUrl: "" },
    { pokemonName: "Meowth", number: 52, imageUrl: "" },
    { pokemonName: "Persian", number: 53, imageUrl: "" },
    { pokemonName: "Psyduck", number: 54, imageUrl: "" },
    { pokemonName: "Golduck", number: 55, imageUrl: "" },
    { pokemonName: "Mankey", number: 56, imageUrl: "" },
    { pokemonName: "Primeape", number: 57, imageUrl: "" },
    { pokemonName: "Growlithe", number: 58, imageUrl: "" },
    { pokemonName: "Arcanine", number: 59, imageUrl: "" },
    { pokemonName: "Poliwag", number: 60, imageUrl: "" },
    { pokemonName: "Poliwhirl", number: 61, imageUrl: "" },
    { pokemonName: "Poliwrath", number: 62, imageUrl: "" },
    { pokemonName: "Abra", number: 63, imageUrl: "" },
    { pokemonName: "Kadabra", number: 64, imageUrl: "" },
    { pokemonName: "Alakazam", number: 65, imageUrl: "" },
    { pokemonName: "Machop", number: 66, imageUrl: "" },
    { pokemonName: "Machoke", number: 67, imageUrl: "" },
    { pokemonName: "Machamp", number: 68, imageUrl: "" },
    { pokemonName: "Bellsprout", number: 69, imageUrl: "" },
    { pokemonName: "Weepinbell", number: 70, imageUrl: "" },
    { pokemonName: "Victreebel", number: 71, imageUrl: "" },
    { pokemonName: "Tentacool", number: 72, imageUrl: "" },
    { pokemonName: "Tentacruel", number: 73, imageUrl: "" },
    { pokemonName: "Geodude", number: 74, imageUrl: "" },
    { pokemonName: "Graveler", number: 75, imageUrl: "" },
    { pokemonName: "Golem", number: 76, imageUrl: "" },
    { pokemonName: "Ponyta", number: 77, imageUrl: "" },
    { pokemonName: "Rapidash", number: 78, imageUrl: "" },
    { pokemonName: "Slowpoke", number: 79, imageUrl: "" },
    { pokemonName: "Slowbro", number: 80, imageUrl: "" },
    { pokemonName: "Magnemite", number: 81, imageUrl: "" },
    { pokemonName: "Magneton", number: 82, imageUrl: "" },
    { pokemonName: "Farfetch'd", number: 83, imageUrl: "" },
    { pokemonName: "Doduo", number: 84, imageUrl: "" },
    { pokemonName: "Dodrio", number: 85, imageUrl: "" },
    { pokemonName: "Seel", number: 86, imageUrl: "" },
    { pokemonName: "Dewgong", number: 87, imageUrl: "" },
    { pokemonName: "Grimer", number: 88, imageUrl: "" },
    { pokemonName: "Muk", number: 89, imageUrl: "" },
    { pokemonName: "Shellder", number: 90, imageUrl: "" },
    { pokemonName: "Cloyster", number: 91, imageUrl: "" },
    { pokemonName: "Gastly", number: 92, imageUrl: "" },
    { pokemonName: "Haunter", number: 93, imageUrl: "" },
    { pokemonName: "Gengar", number: 94, imageUrl: "" },
    { pokemonName: "Onix", number: 95, imageUrl: "" },
    { pokemonName: "Drowzee", number: 96, imageUrl: "" },
    { pokemonName: "Hypno", number: 97, imageUrl: "" },
  ],
};

const pokemonSlice = createSlice({
  name: "pokemonSlice",
  initialState,
  reducers: {
    setPokemonData: (state, action: PayloadAction<any[]>) => {
      state.data = action.payload;
    },
  },
});

export default pokemonSlice;
export const { setPokemonData } = pokemonSlice.actions;
export const pokemons = (state: RootState) => state.pokemonSlice.data;
