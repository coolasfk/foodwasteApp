import { ReactComponent as CheeseIcon } from "../assets/foodPictograms/cheese.svg";
import { ReactComponent as Milk } from "../assets/foodPictograms/milk.svg";
import { ReactComponent as Apple } from "../assets/foodPictograms/apple.svg";
import { ReactComponent as Banana } from "../assets/foodPictograms/banana.svg";
import { ReactComponent as Eggs } from "../assets/foodPictograms/eggs.svg";

const FoodComponentPictogram = (props) => {
  return (
    <>
      {props.foodtext === "cheese" ? (
        <CheeseIcon className="textAndPictograms__pictogram" />
      ) : null}
      {props.foodtext === "milk" ? (
        <Milk className="textAndPictograms__pictogram" />
      ) : null}
      {props.foodtext === "apple" ? (
        <Apple className="textAndPictograms__pictogram" />
      ) : null}
      {props.foodtext === "eggs" ? (
        <Eggs className="textAndPictograms__pictogram" />
      ) : null}
      {props.foodtext === "banana" ? (
        <Banana className="textAndPictograms__pictogram" />
      ) : null}
    </>
  );
};
export default FoodComponentPictogram;
