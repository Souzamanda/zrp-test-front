import { AxiosError } from 'axios'
import api from '../services/api'

export function usePokemon() {
  async function getPokemon(pokemonName: string | number) {
    try {
      const response = await api.get(`/pokemon/${pokemonName}`)
      return response
    } catch (err) {
      const error = err as AxiosError

      if (error.response) {
        throw error.response
      }

      throw new Error('Erro desconhecido ao buscar o Pokémon')
    }
  }

  return {
    getPokemon,
  }
}
