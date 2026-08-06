import React from 'react'

const Homepage = () => {
  return (
    <>
    <div className='w-full flex justify-center items-center pb-10'>
        <div className='px-3 py-1 bg-linear-to-t from-secondary/40 to-secondary/20 tracking-tighter text-sm border-secondary border rounded-full text-primary ring-1 ring-background/30 ring-inset'>Announcing Widest Editor</div>
    </div>
    <div className='w-full border-4 border-secondary/40'>
        <img src="/dash.svg" alt="" className='w-full'/>
    </div>
    </>
  )
}

export default Homepage