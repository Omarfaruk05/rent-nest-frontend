import type { MenuProps } from "antd";

import {
  TableOutlined,
  AppstoreOutlined,
  HomeOutlined,
  OrderedListOutlined,
  HeartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { USER_ROLE } from "./role";

const sidebarItems = (role: string) => {
  const defaultSidebarItems: MenuProps["items"] = [
    {
      label: <Link href={`/dashboard/${role}/profile`}>My Profile</Link>,
      key: "profile",
      icon: <UserOutlined />,
    },
  ];

  const houseOwnerSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    {
      label: <Link href={`/dashboard/${role}/house`}>My Houses</Link>,
      key: "my-houses",
      icon: <HomeOutlined />,
    },
    {
      label: <Link href={`/dashboard/${role}/saved-house`}>Saved House</Link>,
      key: "saved-houses",
      icon: <HeartOutlined />,
    },
    {
      label: (
        <Link href={`/dashboard/${role}/house-visit`}>House visit List</Link>
      ),
      key: "house-visit-list",
      icon: <OrderedListOutlined />,
    },
  ];

  const houseRenterSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,

    {
      label: <Link href={`/dashboard/${role}/booking`}>My Bookings</Link>,
      key: "all-bookings",
      icon: <OrderedListOutlined />,
    },
    {
      label: <Link href={`/dashboard/${role}/saved-house`}>Saved House</Link>,
      key: "saved-houses",
      icon: <OrderedListOutlined />,
    },
    {
      label: (
        <Link href={`/dashboard/${role}/house-visit`}>House visit List</Link>
      ),
      key: "house-visit-list",
      icon: <OrderedListOutlined />,
    },
  ];

  const adminSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    {
      label: <p>All Users</p>,
      key: "all-users",
      icon: <TableOutlined />,
      children: [
        {
          label: (
            <Link href={`/dashboard/${role}/house-owner`}>House Owner</Link>
          ),
          key: `/dashboard/${role}/house-owner`,
        },
        {
          label: (
            <Link href={`/dashboard/${role}/house-renter`}>House Renter</Link>
          ),
          key: `/dashboard/${role}/house-renter`,
        },
      ],
    },
    {
      label: <Link href={`/dashboard/${role}/all-house`}>All Houses</Link>,
      key: "all-houses",
      icon: <HomeOutlined />,
    },
    {
      label: <Link href={`/dashboard/${role}/booked-house`}>Booked House</Link>,
      key: "all-bookings",
      icon: <AppstoreOutlined />,
    },
    {
      label: (
        <Link href={`/dashboard/${role}/house-visit`}>House Visit List</Link>
      ),
      key: "all-house-visit",
      icon: <AppstoreOutlined />,
    },
    {
      label: <Link href={`/dashboard/${role}/review`}>All Reviews</Link>,
      key: "all-reviews",
      icon: <AppstoreOutlined />,
    },
    {
      label: <Link href={`/dashboard/${role}/feedback`}>All Feedbacks</Link>,
      key: "feedbacks",
      icon: <AppstoreOutlined />,
    },
    {
      label: <Link href={`/dashboard/${role}/blog`}>Blogs</Link>,
      key: "blogs",
      icon: <AppstoreOutlined />,
    },
    {
      label: <Link href={`/dashboard/${role}/faq`}>FAQ</Link>,
      key: "faq",
      icon: <AppstoreOutlined />,
    },
  ];

  const superAdminSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    {
      label: <p>All Users</p>,
      key: "all-users",
      icon: <TableOutlined />,
      children: [
        {
          label: <Link href={`/dashboard/${role}/admin`}>Admins</Link>,
          key: `/dashboard/${role}/admin`,
        },
        {
          label: (
            <Link href={`/dashboard/${role}/house-owner`}>House Owner</Link>
          ),
          key: `/dashboard/${role}/house-owner`,
        },
        {
          label: (
            <Link href={`/dashboard/${role}/house-renter`}>House Renter</Link>
          ),
          key: `/dashboard/${role}/house-renter`,
        },
      ],
    },
    {
      label: <Link href={`/dashboard/${role}/all-house`}>All Houses</Link>,
      key: "all-houses",
      icon: <HomeOutlined />,
    },
    {
      label: <Link href={`/dashboard/${role}/booked-house`}>Booked House</Link>,
      key: "all-bookings",
      icon: <OrderedListOutlined />,
    },
    {
      label: (
        <Link href={`/dashboard/${role}/house-visit`}>House Visit List</Link>
      ),
      key: "all-house-visit",
      icon: <HeartOutlined />,
    },
    {
      label: <Link href={`/dashboard/${role}/review`}>All Reviews</Link>,
      key: "all-reviews",
      icon: <AppstoreOutlined />,
    },
    {
      label: <Link href={`/dashboard/${role}/feedback`}>All Feedbacks</Link>,
      key: "feedbacks",
      icon: <AppstoreOutlined />,
    },
    {
      label: <Link href={`/dashboard/${role}/blog`}>Blogs</Link>,
      key: "blogs",
      icon: <AppstoreOutlined />,
    },
    {
      label: <Link href={`/dashboard/${role}/faq`}>FAQ</Link>,
      key: "faq",
      icon: <AppstoreOutlined />,
    },
  ];

  if (role === USER_ROLE.SUPER_ADMIN) return superAdminSidebarItems;
  else if (role === USER_ROLE.ADMIN) return adminSidebarItems;
  else if (role === USER_ROLE.HOUSE_OWNER) return houseOwnerSidebarItems;
  else if (role === USER_ROLE.HOUSE_RENTER) return houseRenterSidebarItems;
  else {
    return defaultSidebarItems;
  }
};

export default sidebarItems;
