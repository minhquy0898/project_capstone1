import {
  Avatar,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from '@nextui-org/react';
import { BsChevronDown } from 'react-icons/bs';

import NavItem from './NavItem';
import { Link } from 'react-router-dom';
import { useFetchUser } from '../../../apis/auth.api';

const navOptions = [
  {
    title: 'Trang chủ',
    url: '/',
  },
  {
    title: 'Dịch vụ',
    url: '/dich-vu',
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
  const { data: userData } = useFetchUser();

  return (
    <Navbar isBordered maxWidth="full" className="fixed">
      <NavbarBrand>
        <p className="font-bold text-inherit">LOGO</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <Dropdown className="backdrop-blur-lg backdrop-saturate-150 bg-background/70">
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                endContent={<BsChevronDown />}
                radius="sm"
                variant="light"
              >
                Features
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="ACME features"
            className="w-[340px]"
            itemClasses={{
              base: 'gap-4',
            }}
          >
            <DropdownItem
              key="autoscaling"
              // startContent={icons.scale}
            >
              Tổ Chức Sự Kiện
            </DropdownItem>
            <DropdownItem
              key="usage_metrics"
              // startContent={icons.activity}
            >
              Tổ Chức Khai Trương Trọn Gói
            </DropdownItem>
            <DropdownItem
              key="production_ready"
              // startContent={icons.flash}
            >
              Tổ Chức Lễ Khởi Công, Động Thổ
            </DropdownItem>
            <DropdownItem
              key="99_uptime"
              // startContent={icons.server}
            >
              Tổ Chức Gala Dinner
            </DropdownItem>
            <DropdownItem>Tổ Chức Tiệc - Gala Dinner</DropdownItem>
            <DropdownItem>Lễ Hội Văn Hóa</DropdownItem>
            <DropdownItem>Hội Nghị - Hội Thảo</DropdownItem>
            <DropdownItem>Cho Thuê Thiết Bị Ánh Sáng</DropdownItem>
            <DropdownItem>Dịch Vụ Cung Cấp MC</DropdownItem>
            <DropdownItem>Dịch Vụ Cung Cấp Nhóm Nhảy</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        {navOptions.map((navItem) => (
          <NavItem to={navItem.url} key={navItem.url}>
            {navItem.title}
          </NavItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        {userData?.isSuccess ? (
          <NavbarItem>
            <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
          </NavbarItem>
        ) : (
          <Button color="primary" to="/login" as={Link}>
            Đăng nhập
          </Button>
        )}
      </NavbarContent>
    </Navbar>
  );
}

export default Header;
