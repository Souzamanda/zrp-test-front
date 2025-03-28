export interface PokemonDTO {
  name: string
  id:string
  abilities: string[]
  types: string[]
  sprites: {
    front_default: string
    front_shiny: string
  }
}
