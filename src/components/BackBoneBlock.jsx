import React from 'react'

const BackBoneBlock = ({num, desc}) => {
  return (
    <div className="w-full relative flex justify-center items-center group py-8 flex-col">
      <h3 className="text-5xl font-semibold text-secondary/50 group-hover:text-secondary text-center  transition-all duration-300 ease-in-out z-30">
        {num}
      </h3>
      <p className="text-lg text-excep group-hover:text-excep-dark px-6 text-center  transition-all duration-300 ease-in-out z-30">
        {desc}
      </p>
      <div className='w-full h-full absolute top-0 left-0 invisible bg-radial group-hover:visible from-neutral-200 from-10% via-neutral-100 via-70% to-transparent z-20'></div>
    </div>
  );
}

export default BackBoneBlock