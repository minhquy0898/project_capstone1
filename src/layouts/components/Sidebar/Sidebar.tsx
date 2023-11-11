import { Listbox, ListboxItem } from '@nextui-org/react';
import { NavLink } from 'react-router-dom';
import { ISidebarOption } from '../../../types/common';

interface SidebarProps {
  options: ISidebarOption[];
}

function Sidebar({ options }: SidebarProps) {
  return (
    <Listbox>
      {options.map((option) => (
        <ListboxItem key={option.path}>
          <NavLink
            style={({ isActive }) => ({
              fontWeight: isActive ? '600' : '',
            })}
            to={option.path}
          >
            {option.name}
          </NavLink>
        </ListboxItem>
      ))}
    </Listbox>
  );
}

export default Sidebar;
