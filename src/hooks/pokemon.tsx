import api from "../services/api";

export function usePokemon() {
  async function getPokemon(pokemonName: string | number) {
    try {
      const response = await api.get(`/pokemon/${pokemonName}`);
      return response;
    } catch (error) {
      console.error("Erro ao buscar o pokemon: ", error);
    }
    
  }

  return {
    getPokemon,
  }
}