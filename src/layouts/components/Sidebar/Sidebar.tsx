// interface SidebarProps {

import { Listbox, ListboxItem } from '@nextui-org/react';
import { Link } from 'react-router-dom';

// }

function Sidebar() {
  return (
    <Listbox>
      <ListboxItem key={1}>
        <Link to=".">Sidebar Item 1</Link>
      </ListboxItem>
      <ListboxItem key={2}>
        <Link to=".">Sidebar Item 2</Link>
      </ListboxItem>
      <ListboxItem key={3}>
        <Link to=".">Sidebar Item 3</Link>
      </ListboxItem>
      <ListboxItem key={4}>
        <Link to=".">Sidebar Item 4</Link>
      </ListboxItem>
    </Listbox>
  );
}

export default Sidebar;
