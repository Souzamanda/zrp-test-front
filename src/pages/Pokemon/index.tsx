import { useNavigate, useParams } from 'react-router'
import { usePokemon } from '../../hooks/pokemon'
import { useEffect, useState } from 'react'
import { PokemonDTO } from '../../types/PokemonDTO'
import { FaRegCheckCircle, FaRegTimesCircle } from 'react-icons/fa'

export default function Pokemon() {
  const [pokemonData, setPokemonData] = useState<PokemonDTO>()
  const [pokemonInput, setPokemonInput] = useState<string>('')

  const { getPokemon } = usePokemon()
  const navigate = useNavigate()

  const pokemonName = useParams().pokemonName

  function onSubmit() {
    navigate(`/${pokemonInput}`)
  }

  useEffect(() => {
    if (pokemonName) {
      setPokemonInput('')
      getPokemon(pokemonName)
        .then((response) => {
          //console.log(response?.data.abilities)
          const { name, abilities, types, sprites } = response.data
          setPokemonData({
            name: name || '',
            abilities: abilities || [],
            types: types || [],
            sprites: {
              front_default: sprites.front_default || '',
              front_shiny: sprites.front_shiny || '',
            },
          })
        })
        .catch((error) => {
          console.error('Erro ao buscar o Pokémon:', error)
        })
    }
  }, [pokemonName])

  return (
    <div className='bg-primary h-screen flex items-center justify-center flex-col gap-6'>
      <div className='bg-border p-15 rounded-lg rounded-bl-4xl shadow-lg w-2xl'>
        <div className='bg-secondary rounded-md p-3'>
          {pokemonData ? (
            <>
            <div className='flex justify-center gap-10 my-5'>
            <div className='flex flex-col items-center'>
              <img
                src={pokemonData?.sprites.front_default}
                alt={`${pokemonData?.name} normal`}
                className='scale-125'
              />
              <p className='text-sm text-gray-500 mt-2'>Normal</p>
            </div>
            <div className='flex flex-col items-center'>
              <img
                src={pokemonData?.sprites.front_shiny}
                alt={`${pokemonData?.name} shiny`}
                className='scale-125'
              />
              <p className='text-sm text-gray-500 mt-2'>Shiny</p>
            </div>
          </div>

          <h1 className='text-3xl font-display text-center'>
            {pokemonData?.name.toLocaleUpperCase()}
          </h1>

          <div className='mb-5 mt-10 ml-5 flex'>
            <h2 className='font-body text-xl text-gray-500 flex-1'>
              Habilidades:
            </h2>
            <ul className='ml-3 flex-3'>
              {pokemonData?.abilities.map((ability, index) => (
                <li key={index} className='font-body text-xl'>
                  › {ability}
                </li>
              ))}
            </ul>
          </div>

          <div className='my-5 ml-5 flex'>
            <h2 className='font-body text-xl text-gray-500 flex-1'>Tipo:</h2>
            <ul className='ml-3 flex-3'>
              {pokemonData?.types.map((type, index) => (
                <li key={index} className='font-body text-xl'>
                  › {type}
                </li>
              ))}
            </ul>
          </div>
          </>
          ) : (
            <div className='h-70 flex items-center justify-center'>
              <h1>Carregando pokemon...</h1>
            </div>
          )}
          
        </div>
      </div>

      <div className='bg-console w-2xl p-5 rounded-lg shadow-lg flex justify-between'>
        <img
          src='/src/assets/arrowKeys.png'
          alt='joystick arrow keys'
          className='w-40'
        />
        <div className='bg-input'>
          <textarea
            className='bg-input w-full h-full rounded-md p-2 outline-0 placeholder:text-gray-800 font-body font-bold'
            placeholder='Digite o nome do pokemon'
            onChange={(e) =>
              setPokemonInput(e.target.value.toLocaleLowerCase())
            }
            value={pokemonInput}
          />
        </div>
        <div className='flex gap-5 py-3 pr-3'>
          <button className='self-start' onClick={() => setPokemonInput('')}>
            <FaRegTimesCircle
              size={70}
              className='fill-cancel stroke-20 stroke-red-900 bg-cancel rounded-full'
            />
          </button>
          <button className='self-end' onClick={() => onSubmit()}>
            <FaRegCheckCircle
              size={70}
              className='fill-confirm stroke-20 stroke-green-800 bg-confirm rounded-full'
            />
          </button>
        </div>
      </div>
    </div>
  )
}
