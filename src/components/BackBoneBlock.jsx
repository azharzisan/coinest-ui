import React from 'react'

const BackBoneBlock = ({num, desc}) => {
  return (
    <div className="w-full flex justify-center items-center py-10 flex-col">
      <h3 className="text-5xl font-semibold text-secondary text-center">{num}</h3>
      <p className="text-lg text-excep-dark px-6 text-center">
        {desc}
      </p>
    </div>
  );
}

export default BackBoneBlock