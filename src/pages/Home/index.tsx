import BottomDisplay from '../../components/BottomDisplay'

export default function Home() {
  return (
    <div className='bg-primary sm:h-screen h-full w-full flex items-center justify-center flex-col gap-6'>
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
