import { Fragment, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Spin as Hamburger } from "hamburger-react";
import { Popover, Transition } from "@headlessui/react";
import { FiChevronDown } from "react-icons/fi"; // Added FiX for close icon
import { IoClose } from "react-icons/io5";
import { FaHome, FaCoins, FaSearch, FaBook } from "react-icons/fa";
import { BsInfoCircleFill } from "react-icons/bs";
import trackMixpanel from "@/lib/trackMixpanel";

function Navbar() {
  const [isShowMenu, setIsShowMenu] = useState(false);
  const menus = [
    {
      id: 1,
      title: "Beranda",
      icon: FaHome, // Reference to IoClose component
      url: "/",
    },
    {
      id: 1,
      title: "Promo & News",
      icon: FaBook, // Reference to IoClose component
      url: "/blog",
    },
    {
      id: 2,
      title: "Contact Us",
      icon: FaCoins,
      url: "/contact-us",
    },
    {
      id: 3,
      title: "About Us",
      icon: BsInfoCircleFill,
      url: "/about-us",
    },
  ];

  const onSubMenu = (page) => {
    let trackData = {
      Label: page,
    };
    trackMixpanel("Clicked Sub Menu", trackData);
  };

  const onParentMenu = (page) => {
    let trackData = {
      Label: page,
    };
    trackMixpanel("Clicked Parent Menu", trackData);
  };

  const onHandleMenu = (page) => {
    setIsShowMenu(false);
    let trackData = {
      Label: page,
    };
    trackMixpanel("Clicked Menu", trackData);
  };

  const onMenu = () => {
    setIsShowMenu(!isShowMenu);
  };

  const onCloseSidebar = () => {
    setIsShowMenu(false);
  };

  return (
    <div className="bg-[#4187B6] h-20 border-b border-gray-200">
      <nav className="container  items-center py-2 2xl:grid 2xl:grid-cols-1 lg:grid lg:grid-cols-1 md:grid md:grid-cols-1 gap-2">
        <div className="grid grid-cols-3 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3">
          <div className="col-span-1 text-white">
            <Hamburger
              label="Hamburger"
              size={20}
              toggled={isShowMenu}
              toggle={onMenu}
            />
          </div>
          <Link
            href="/"
            onClick={() => onMenu("logo")}
            className="items-center"
          >
            <Image
              src="/images/logo.svg"
              className="items-center align-center mt-2"
              width={300}
              height={100}
              alt="sapuglagah.com"
            />
          </Link>
        </div>
      </nav>

      {/* mobile view  */}
      <div
        className={`bg-white h-20 z-10 fixed shadow-lg top-0 transition-transform ${
          isShowMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {isShowMenu && (
          <div
            className={`absolute top-0 left-0 h-screen bg-[#4187B6] w-[200px] shadow-xl z-10"
            }`}
          >
            <div className="flex justify-end p-2">
              <button
                onClick={onCloseSidebar}
                className="text-white focus:outline-none mb-4"
              >
                <IoClose size={20} />
              </button>
            </div>
            <ul className="flex flex-col gap-2 font-medium p-4">
              {menus.map((menu, index) => (
                <li key={index}>
                  {menu.subMenu ? (
                    <Popover className="relative inline">
                      <Popover.Button
                        className="flex items-center gap-2 py-2 px-4 text-white hover:text-white focus:text-white focus:border-none focus:outline-none"
                        onClick={() => onParentMenu(menu.title)}
                      >
                        {menu.title}
                        <FiChevronDown size={20} />
                      </Popover.Button>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <Popover.Panel className="lg:absolute left-0 z-10 mt-1 bg-white rounded-xl text-white px-4 lg:px-0 py-2 lg:py-6 lg:max-w-fit whitespace-nowrap xl:border xl:border-gray-100">
                          {() => (
                            <ul>
                              {menu.subMenu.map((submenu) => (
                                <li
                                  key={submenu.id}
                                  className="border-b lg:border-none w-full"
                                >
                                  <Link
                                    href={submenu.url}
                                    onClick={() => onSubMenu(submenu.title)}
                                    className="block py-2 lg:px-8 hover:bg-nh-primary-500 hover:text-white"
                                  >
                                    {submenu.title}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </Popover.Panel>
                      </Transition>
                    </Popover>
                  ) : (
                    <Link
                      onClick={() => onHandleMenu(menu.title)}
                      href={menu.url}
                      className="py-2 px-0 hover:text-nh-primary-500 text-white text-sm font-normal flex items-center"
                    >
                      {menu.icon && <menu.icon className="mr-3" size={16} />}
                      {menu.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
