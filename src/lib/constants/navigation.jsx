import {
  HiOutlineViewGrid,
  HiOutlineCube,
  HiOutlineShoppingCart,
  HiOutlineUsers,
  HiOutlineDocumentText,
  HiOutlineAnnotation,
  HiOutlineQuestionMarkCircle,
  HiOutlineCog,
} from "react-icons/hi";

export const Links = [
  {
    key: "dashboard",
    label: "Dashboard",
    path: "/dashboard",
    icon: <HiOutlineViewGrid />,
  },
  {
    key: "specs",
    label: "Specs",
    path: "/specs",
    icon: <HiOutlineCube />,
  },
  {
    key: "brand",
    label: "Brand",
    path: "/brand",
    icon: <HiOutlineShoppingCart />,
  },
  {
    key: "learn",
    label: "Learn",
    path: "/learn",
    icon: <HiOutlineUsers />,
  },
  {
    key: "sales",
    label: "Sales",
    path: "/sales",
    icon: <HiOutlineDocumentText />,
  },
  {
    key: "schedules",
    label: "Schedules",
    path: "/schedule",
    icon: <HiOutlineAnnotation />,
  },
  {
    key: "manage user",
    label: "Manage User",
    path: "/manageuser",
    icon: <HiOutlineAnnotation />,
  },
  {
    key: "settings",
    label: "Settings",
    path: "/settings",
    icon: <HiOutlineCog />,
  },
];
