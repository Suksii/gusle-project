import { Link } from "react-router-dom";

const Navbar = () => {
  const navMenu = [
    { name: "Pjesme", link: "/" },
    { name: "Gusle", link: "/gusle" },
    { name: "Galerija", link: "/galerija" },
  ];

  return (
    <div className="flex justify-center gap-12 py-4">
      {navMenu.map((menu, index) => (
        <Link
          to={menu.link}
          key={index}
          className="text-xl uppercase text-teal-100 font-semibold hover:text-teal-400 cursor-pointer duration-300"
        >
          {menu.name}
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
