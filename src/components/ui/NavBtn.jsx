import React from 'react'

const NavBtn = ({text, ref}) => {
  return (
    <button className="text-sm lg:text-md text-muted px-4 rounded-xl py-2 hover:bg-secondary/40 hover:text-primary font-semibold active:translate-y-1 transition-all duration-500 ease-in-out">
      <a href={`#${ref}`}>{text}</a>
    </button>
  );
}

export default NavBtn