export interface PokemonDTO {
  name: string
  abilities: string[]
  types: string[]
  sprites: {
    front_default: string
    front_shiny: string
  }
}
