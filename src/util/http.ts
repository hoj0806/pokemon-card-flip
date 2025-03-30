import {
  AbilityInfo,
  LanguageEntry,
  PokemonDataArray,
  PokemonType,
} from "../types/types";

const baseUrl = "https://pokeapi.co/api/v2/pokemon/";
const speciesBaseUrl = "https://pokeapi.co/api/v2/pokemon-species/";

export const fetchPokemonData = async (): Promise<PokemonDataArray> => {
  try {
    const pokemonPromises = [];

    for (let i = 1; i <= 151; i++) {
      pokemonPromises.push(
        (async () => {
          try {
            const response = await fetch(`${baseUrl}${i}/`);
            const speciesResponse = await fetch(`${speciesBaseUrl}${i}`);

            if (!response.ok) {
              throw new Error("포켓몬 데이터를 불러오는데 실패했습니다");
            }

            const data = await response.json();
            const speciesData = await speciesResponse.json();

            const koreanNamePromise = speciesData.names.find(
              (name: LanguageEntry) => name.language.name === "ko"
            );
            const koreanName = koreanNamePromise
              ? koreanNamePromise.name
              : null;

            const typesData = data.types;
            const abilityData = data.abilities;

            const typesPromises = typesData.map(async (type: PokemonType) => {
              const typeResponse = await fetch(type.type.url);
              const typeData = await typeResponse.json();
              const koreanTypeName = typeData.names.find(
                (name: LanguageEntry) => name.language.name === "ko"
              ).name;
              return koreanTypeName;
            });

            const abilitiesPromises = abilityData.map(
              async (ability: AbilityInfo) => {
                const abilityResponse = await fetch(ability.ability.url);
                const abilityData = await abilityResponse.json();

                const abilityKoreanName = abilityData.names.find(
                  (name: LanguageEntry) => name.language.name === "ko"
                )?.name;

                return {
                  abilityKoreanName,
                };
              }
            );

            const types = await Promise.all(typesPromises);
            const abilities = await Promise.all(abilitiesPromises);

            const { id, sprites, height, weight } = data;
            let newData = {
              id,
              abilities,
              height,
              weight,
              types,
              isFliped: true,
              isCorrect: false,
              imageUrl: sprites["front_default"],
              pokemonName: koreanName,
            };

            return newData;
          } catch (error) {
            throw new Error("포켓몬 데이터를 불러오는데 실패했습니다");
          }
        })()
      );
    }

    const fetchedPokemons = await Promise.all(pokemonPromises);

    return fetchedPokemons;
  } catch (error) {
    throw error;
  }
};
