import React from "react";

const FooterLinks = ({ items, head }) => {
  const ftItems = items;
  return (
    <>
      <div className="w-full">
        <h6 className="text-xl text-primary font-medium pb-2">{head}</h6>
        <ul className="text-md flex flex-col gap-2 text-muted cursor-pointer">
          {ftItems.map((i,index) => (
            <li key={index} className="hover:text-foreground hover:translate-x-2 transition-all duration-300 ease-in-out">
              {i}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default FooterLinks;
