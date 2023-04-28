import { ReactComponent as CheeseIcon } from "../assets/foodPictograms/cheese.svg";
import { ReactComponent as Milk } from "../assets/foodPictograms/milk.svg";

const FoodComponentPictogram = (props) => {
  return (
    <>
      {props.foodtext === "cheese" ? (
        <CheeseIcon className="foodListElements-wrapper__pictogram-cheese" />
      ) : null}
      {props.foodtext === "milk" ? (
        <Milk className="foodListElements-wrapper__pictogram-milk" />
      ) : null}
    </>
  );
};
export default FoodComponentPictogram;
