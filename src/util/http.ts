export const fetchPokemonData = async (): Promise<any[]> => {
  try {
    let fetchedPokemons = [];

    // 비동기적으로 처리할 모든 Promise들을 저장할 배열
    const pokemonPromises = [];

    for (let i = 1; i <= 151; i++) {
      // 각 Pokémon에 대해 fetch 요청을 Promise로 생성
      const pokemonPromise = (async () => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`);
        const speciesResponse = await fetch(
          `https://pokeapi.co/api/v2/pokemon-species/${i}`
        );

        if (!response.ok) throw new Error(`Failed to fetch Pokémon #${i}`);

        const data = await response.json();
        const speciesData = await speciesResponse.json();

        // koreanName을 비동기적으로 가져오기 (병렬 처리)
        const koreanNamePromise = speciesData.names.find(
          (name: any) => name.language.name === "ko"
        );
        const koreanName = koreanNamePromise ? koreanNamePromise.name : null;

        const typesData = data.types;
        const abilityData = data.abilities;

        // typesData에 대한 비동기 요청을 Promise.all로 병렬 처리
        const typesPromises = typesData.map(async (type: any) => {
          const typeResponse = await fetch(type.type.url);
          const typeData = await typeResponse.json();
          const koreanTypeName = typeData.names.find(
            (name: any) => name.language.name === "ko"
          ).name;
          return koreanTypeName; // 반환값으로 각 타입의 한국어 이름을 반환
        });

        // abilityData에 대한 비동기 요청을 Promise.all로 병렬 처리
        const abilitiesPromises = abilityData.map(async (ability: any) => {
          const abilityResponse = await fetch(ability.ability.url);
          const abilityData = await abilityResponse.json();

          // 한국어 이름 가져오기
          const abilityKoreanName = abilityData.names.find(
            (name: any) => name.language.name === "ko"
          )?.name;

          return {
            abilityKoreanName,
          };
        });

        // 모든 타입과 능력에 대한 요청이 완료될 때까지 기다리고, 결과를 types 및 abilities 배열에 저장
        const types = await Promise.all(typesPromises);
        const abilities = await Promise.all(abilitiesPromises);

        const { id, sprites, height, weight } = data;
        let newData = {
          id,
          abilities, // 한국어 이름과 효과 포함된 abilities
          height,
          weight,
          types, // 비동기 작업 완료 후 얻은 types 배열 사용
          isFliped: true,
          isCorrect: false,
          imageUrl: sprites["front_default"],
          pokemonName: koreanName,
        };

        return newData; // 최종 데이터 반환
      })();

      // 각 Pokémon의 데이터를 Promise 배열에 추가
      pokemonPromises.push(pokemonPromise);
    }

    // 모든 Pokémon 데이터가 병렬로 처리될 때까지 기다리기
    fetchedPokemons = await Promise.all(pokemonPromises);

    return fetchedPokemons;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
};
