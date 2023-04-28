import { Link } from "react-router-dom";
import GetInTouch from "./GetInTouch";
const Menu = () => {
  return (
    <>
      <main className="main-menu">
        <div className="main-menu__headline">About ZeroFoodWaste</div>
        <div className="main-menu__text">
          Have you ever got back from grocery story only to find out that items
          you bought are already in your fridge? Those days are over. Get
          control over food you have. Not wasting food means not wasting money.{" "}
          <br /> <br />
          Wasted food isn't just a social or humanitarian concern—it's an
          environmental one. When we waste food, we also waste all the energy
          and water it takes to grow, harvest, transport, and package it. And if
          food goes to the landfill and rots, it produces methane—a greenhouse
          gas even more potent than carbon dioxide. <br />
          <br />
          About 6%-8% of all human-caused greenhouse gas emissions could be
          reduced if we stop wasting food. In the US alone, the production of
          lost or wasted food generates the equivalent of 32.6 million cars’
          worth of greenhouse gas emissions.{" "}
          <a
            className="link"
            href="https://www.worldwildlife.org/stories/fight-climate-change-by-preventing-food-waste#:~:text=But%20wasted%20food%20isn't,more%20potent%20than%20carbon%20dioxide."
          >
            src
          </a>
        </div>
        <Link to="/" className="main-menu__button">
          x
        </Link>
        <GetInTouch />
      </main>
    </>
  );
};

export default Menu;
