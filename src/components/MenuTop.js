import { Link } from "react-router-dom";

const MenuTop = () => {
  console.log();

  return (
    <>
      <div className="header__menu-wrapper menu-wrapper">
        <Link className="menu-wrapper__menu menu" to="info">
          <div className="menu__menu-rectangle"> </div>
          <div className="menu__menu-rectangle"> </div>
          <div className="menu__menu-rectangle"> </div>
        </Link>
      </div>
    </>
  );
};

export default MenuTop;
