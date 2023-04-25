import { Routes, Route } from react-router-dom;

const MenuTop = () => {
  const navigate = useNavigate();

  const openMenu = () => {
    navigate("/Menu");
  };
  return (
    <>
      <div className="header__menu-wrapper menu-wrapper">
        <div onClick={openMenu} className="menu-wrapper__menu menu">
          <div className="menu__menu-rectangle"> </div>
          <div className="menu__menu-rectangle"> </div>
          <div className="menu__menu-rectangle"> </div>
        </div>
      </div>
    </>
  );
};

export default MenuTop;
