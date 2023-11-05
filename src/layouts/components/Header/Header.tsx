import {
  Avatar,
  Input,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from '@nextui-org/react';
import { AiOutlineSearch } from 'react-icons/ai';
import NavItem from './NavItem';

const navOptions = [
  {
    title: 'Trang chủ',
    url: '/',
  },
  {
    title: 'Dịch vụ',
    url: '/event-services',
  },
  {
    title: 'Giới thiệu',
    url: '/gioi-thieu',
  },
  {
    title: ' Liên hệ',
    url: '/lien-he',
  },
];

function Header() {
  return (
    <Navbar isBordered maxWidth="full" className="fixed">
      <NavbarBrand>
        <p className="font-bold text-inherit">LOGO</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {navOptions.map((navItem) => (
          <NavItem to={navItem.url} key={navItem.url}>
            {navItem.title}
          </NavItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <Input
          classNames={{
            base: 'max-w-full sm:max-w-[10rem] h-10',
            mainWrapper: 'h-full',
            input: 'text-small',
            inputWrapper:
              'h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20',
          }}
          placeholder="Type to search..."
          size="sm"
          startContent={<AiOutlineSearch size={18} />}
          type="search"
        />
        <NavbarItem>
          <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

export default Header;
