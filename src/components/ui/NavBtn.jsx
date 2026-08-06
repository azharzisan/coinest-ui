import React from 'react'

const NavBtn = ({text}) => {
  return (
    <button className="text-md text-muted px-4 rounded-xl py-1 hover:bg-secondary/40 hover:text-primary font-semibold transition-all duration-500 ease-in-out">
      {text}
    </button>
  );
}

export default NavBtn