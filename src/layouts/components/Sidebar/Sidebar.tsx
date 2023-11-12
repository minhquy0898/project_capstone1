import { Listbox, ListboxItem } from '@nextui-org/react';
import { NavLink } from 'react-router-dom';
import { ISidebarOption } from '../../../types/common';
import { useFetchUser } from '../../../apis/auth.api';

interface SidebarProps {
  options: ISidebarOption[];
}

function Sidebar({ options }: SidebarProps) {
  const { data: userData } = useFetchUser();

  return (
    <Listbox>
      {options
        .filter(
          (optionItem) =>
            optionItem.role?.includes(userData?.data.account.role),
        )
        .map((option) => (
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
