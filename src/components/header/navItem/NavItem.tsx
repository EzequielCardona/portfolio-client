import React, { useState } from 'react';
import { Item } from './styles';

interface navItemProps {
  word:string,
  index:number,
}

function NavItem({
  word, index,
}:navItemProps):React.ReactElement {
  const [menuSelected, setMenuSelected] = useState(0);
  return (
    <Item
      className={(menuSelected === index) ? 'selected' : ''}
      onClick={():void => setMenuSelected(index)}
    >
      {word}
    </Item>
  );
}

export default NavItem;
