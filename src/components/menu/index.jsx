const menuData = [
  {
    id: 1,
    name: "Home",
    url: "/",
  },
  {
    id: 2,
    name: "Contact",
    url: "/contact",
  },
  {
    id: 3,
    name: "About",
    url: "/about",
  },
  {
    id: 4,
    name: "Sign Up",
    url: "/login",
  },
];

const Menu = () => {
  return (
    <div>
      <ul className={"flex gap-x-[48px]"}>
        {menuData.map((item) => (
          <li
            key={item.id}
            className="hover:border-b border-[#808080] border-0 cursor-pointer transition-all duration-300"
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
