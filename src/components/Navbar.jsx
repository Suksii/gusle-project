import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const navMenu = [
    { name: "Gusle", link: "/" },
    { name: "Guslari", link: "/guslari" },
    { name: "Pjesme", link: "/pjesme" },
    { name: "Galerija", link: "/galerija" },
  ];

  const path = useLocation().pathname;

  return (
    <div className="flex flex-wrap justify-center gap-12 py-4 px-2">
      {navMenu.map((menu, index) => (
        <Link
          to={menu.link}
          key={index}
          className={`text-xl uppercase text-teal-100 font-semibold hover:text-teal-400 cursor-pointer duration-300 ${path === menu.link ? 'text-teal-400' : ''}`}
        >
          {menu.name}
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
