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
import { Link } from 'react-router-dom';

import NavItem from './NavItem';
import { useFetchUser, useLogout } from '../../../apis/auth.api';

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
  const logoutMutate = useLogout();

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
            <DropdownItem key="autoscaling">Tổ Chức Sự Kiện</DropdownItem>
            <DropdownItem key="usage_metrics">
              Tổ Chức Khai Trương Trọn Gói
            </DropdownItem>
            <DropdownItem key="production_ready">
              Tổ Chức Lễ Khởi Công, Động Thổ
            </DropdownItem>
            <DropdownItem key="99_uptime">Tổ Chức Gala Dinner</DropdownItem>
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
          <>
            <Dropdown placement="bottom-end">
              <DropdownTrigger>
                <Avatar
                  isBordered
                  as="button"
                  className="transition-transform"
                  src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                />
              </DropdownTrigger>
              <DropdownMenu aria-label="Profile Actions" variant="flat">
                <DropdownItem key="profile" className="h-14 gap-2">
                  <p className="font-semibold">{userData.data.account.email}</p>
                </DropdownItem>
                <DropdownItem key="settings">
                  <Link to="/profile">Thông tin cá nhân</Link>
                </DropdownItem>
                <DropdownItem
                  onPress={() => logoutMutate.mutate()}
                  key="logout"
                  color="danger"
                >
                  Đăng xuất
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </>
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
