import { menuItems } from "../menuItems";
import MenuItems from "./MenuItems";

const Navbar = () => {
  return (
    <nav>
      <ul className="menus">
        {" "}
        {menuItems.map((menu, index) => {
          const depthLevel = 0;
          return <MenuItems items={menu}  depthLevel={depthLevel} />;
        })}{" "}
      </ul>{" "}
    </nav>
  );
};

export default Navbar;
