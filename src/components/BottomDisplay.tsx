import { useState } from 'react'
import { FaRegCheckCircle, FaRegTimesCircle } from 'react-icons/fa'
import { useNavigate } from 'react-router'

export default function BottomDisplay() {
  const [pokemonInput, setPokemonInput] = useState<string>('')
  const navigate = useNavigate()

  function onSubmit() {
    navigate(`/${pokemonInput}`)
    setPokemonInput('')
  }

  return (
    <div className='bg-console w-full max-w-2xl p-5 rounded-2xl shadow-lg flex flex-col sm:flex-row justify-between gap-5'>
      <img
        src='/src/assets/arrowKeys.png'
        alt='joystick arrow keys'
        className='w-40 mx-auto sm:mx-0'
      />
      <div className='bg-input flex-1'>
        <textarea
          className='bg-input w-full h-20 sm:h-full rounded-md p-2 outline-0 placeholder:text-gray-800 font-body font-bold'
          placeholder='Digite o nome ou o número do pokémon'
          onChange={(e) => setPokemonInput(e.target.value.toLocaleLowerCase())}
          value={pokemonInput}
        />
      </div>
      <div className='flex flex-col sm:flex-row gap-5 py-3 pr-3 '>
        <button className='sm:self-start self-center' onClick={() => setPokemonInput('')}>
          <FaRegTimesCircle
            size={70}
            className='fill-cancel stroke-20 stroke-red-900 bg-cancel rounded-full'
          />
        </button>
        <button className='sm:self-end self-center' onClick={() => onSubmit()}>
          <FaRegCheckCircle
            size={70}
            className='fill-confirm stroke-20 stroke-green-800 bg-confirm rounded-full'
          />
        </button>
      </div>
    </div>
  )
}
