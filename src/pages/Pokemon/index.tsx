import { useParams } from 'react-router'
import { usePokemon } from '../../hooks/pokemon'
import { useEffect, useState } from 'react'
import { PokemonDTO } from '../../types/PokemonDTO'
import BottomDisplay from '../../components/BottomDisplay'

export default function Pokemon() {
  const [pokemonData, setPokemonData] = useState<PokemonDTO>()
  const [responseError, setResponseError] = useState<string>('')

  const { getPokemon } = usePokemon()

  const pokemonName = useParams().pokemonName

  useEffect(() => {
    if (pokemonName) {
      setResponseError('')

      getPokemon(pokemonName)
        .then((response) => {
          if (response?.status === 200) {
            setResponseError('')
            const { name, id, abilities, types, sprites } = response.data
            setPokemonData({
              name: name || '',
              id: id || '',
              abilities: abilities || [],
              types: types || [],
              sprites: {
                front_default: sprites.front_default || '',
                front_shiny: sprites.front_shiny || '',
              },
            })
          }
        })
        .catch((error) => {
          if (error.status === 404) {
            setResponseError(error.data)
            setPokemonData(undefined)
          } else {
            setResponseError('Ocorreu um erro inesperado.')
          }
        })
    }
  }, [pokemonName])

  return (
    <div className='bg-primary sm:h-screen h-full w-full flex items-center justify-center flex-col gap-3'>
      <div className='flex gap-5 w-full max-w-2xl ml-5'>
        <div className='w-16 h-16 bg-white rounded-full flex justify-center items-center'>
          <span className='w-13 h-13 bg-header-button rounded-full' />
        </div>
        <div className='flex gap-2'>
          <span className='w-4 h-4 bg-red-600 rounded-full border-red-900 border-1 mt-2' />
          <span className='w-4 h-4 bg-yellow-300 rounded-full border-yellow-900 border-1 mt-2' />
          <span className='w-4 h-4 bg-green-500 rounded-full border-green-900 border-1 mt-2' />
        </div>
      </div>
      <div className='bg-border px-15 py-8 rounded-xl rounded-bl-[70px] shadow-lg w-full max-w-2xl'>
        <div className='mb-7 flex justify-center gap-10'>
          <span className='w-4 h-4 bg-red-600 rounded-full' />
          <span className='w-4 h-4 bg-red-600 rounded-full' />
        </div>
        <div className='bg-secondary rounded-md p-3'>
          {responseError ? (
            <div className='h-70 flex items-center justify-center'>
              <h1>{responseError}</h1>
            </div>
          ) : pokemonData ? (
            <>
              <div className='flex flex-col sm:flex-row justify-center gap-10 mb-5 mt-2'>
                <div className='flex flex-col items-center'>
                  <img
                    src={pokemonData?.sprites.front_default}
                    alt={`${pokemonData?.name} normal`}
                    className='scale-125 sm:scale-100 w-32 h-32'
                  />
                  <p className='text-sm text-gray-500 mt-2'>Normal</p>
                </div>
                <div className='flex flex-col items-center'>
                  <img
                    src={pokemonData?.sprites.front_shiny}
                    alt={`${pokemonData?.name} shiny`}
                    className='scale-125 sm:scale-100 w-32 h-32'
                  />
                  <p className='text-sm text-gray-500 mt-2'>Shiny</p>
                </div>
              </div>

              <h1 className='sm:text-3xl font-display text-center text-2xl'>
                <span className='sm:text-2xl text-xl'>
                  n°{pokemonData.id} -{' '}
                </span>
                {pokemonData?.name.toLocaleUpperCase()}
              </h1>

              <div className='mb-5 mt-10 ml-5 flex flex-col sm:flex-row'>
                <h2 className='font-body sm:text-xl text-lg text-gray-500 flex-1'>
                  Habilidades:
                </h2>
                <ul className='ml-3 flex-3'>
                  {pokemonData?.abilities.map((ability, index) => (
                    <li key={index} className='font-body sm:text-xl text-lg'>
                      › {ability}
                    </li>
                  ))}
                </ul>
              </div>

              <div className='my-5 ml-5 flex flex-col sm:flex-row'>
                <h2 className='font-body sm:text-xl text-lg text-gray-500 flex-1'>
                  Tipo:
                </h2>
                <ul className='ml-3 flex-3'>
                  {pokemonData?.types.map((type, index) => (
                    <li key={index} className='font-body sm:text-xl text-lg'>
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
        <div className='mt-5 flex justify-between'>
          <span className='w-10 h-10 bg-red-600 rounded-full' />
          <div className='flex flex-col gap-2'>
            <span className='w-10 h-1 bg-slate-900 rounded-full' />
            <span className='w-10 h-1 bg-slate-900 rounded-full' />
            <span className='w-10 h-1 bg-slate-900 rounded-full' />
            <span className='w-10 h-1 bg-slate-900 rounded-full' />
          </div>
        </div>
      </div>

      <BottomDisplay />
    </div>
  )
}
