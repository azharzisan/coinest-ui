import React from 'react'

const Button = ({text}) => {
  return (
    <button className="bg-linear-to-t from-secondary/90 via-secondary/70 to-secondary/50 ring-1 ring-background/30 ring-inset border border-secondary px-5 tracking-tight py-2 text-md rounded-xl font-semibold text-primary hover:opacity-80 active:translate-y-1 transition-all duration-500 ease-in-out">
      {text}
    </button>
  );
}

export default Button