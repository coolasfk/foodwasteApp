import React from "react";

import { ReactComponent as LogoZeroWaste } from "../../src/assets/zero_foodwaste_logo.svg";

const ZeroFoodwasteLogo = () => {
  return (
    <div className="header__logo-wrapper logo-wrapper">
      <LogoZeroWaste className="logo-wrapper__logo" />
    </div>
  );
};

export default ZeroFoodwasteLogo;
