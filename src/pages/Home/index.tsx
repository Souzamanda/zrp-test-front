import BottomDisplay from '../../components/BottomDisplay'

export default function Home() {
  return (
    <div className='bg-primary sm:h-screen h-full w-full flex items-center justify-center flex-col gap-6'>
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
          <div className='h-70 flex items-center justify-center'>
            <h1 className='sm:text-5xl text-3xl font-display text-center'>Pokédex</h1>
          </div>
        </div>
        <div className='mt-5 flex justify-between'>
          <span className='w-10 h-10 bg-red-600 rounded-full' />
          <div className='flex flex-col gap-2'>
            <span className='w-10 h-1 bg-slate-900 rounded-full'/>
            <span className='w-10 h-1 bg-slate-900 rounded-full'/>
            <span className='w-10 h-1 bg-slate-900 rounded-full'/>
            <span className='w-10 h-1 bg-slate-900 rounded-full'/>
          </div>
        </div>
      </div>

      <BottomDisplay />
    </div>
  )
}
