import {
  Avatar,
  Input,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from '@nextui-org/react';
import { Link } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';

function Header() {
  return (
    <Navbar isBordered maxWidth="full">
      <NavbarBrand>
        <p className="font-bold text-inherit">LOGO</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive>
          <Link to="." color="foreground">
            Trang chủ
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link to="." color="foreground">
            Dịch vụ
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link to="." color="foreground">
            Giới thiệu
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link to="." color="foreground">
            Liên hệ
          </Link>
        </NavbarItem>
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
