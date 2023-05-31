import React from 'react';
import { items } from "./MenuItems";
import "./Menu.css"
const Menu = ({isOpen,onChange}) => {
    return (
        <div className={`Menu ${isOpen && "open"}`}>
      <span
        className="material-icons btn-close"
        onClick={() => onChange(false)}
      >
        close
      </span>
      <div className="Menu-items">
        {items.map((item, index) => (
          <a href={item.itemLink} key={index}>
            {item.itemText}
          </a>
        ))}
      </div>
    </div>
    );
};

export default Menu;