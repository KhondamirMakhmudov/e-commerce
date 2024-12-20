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
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
