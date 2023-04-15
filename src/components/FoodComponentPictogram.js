import { ReactComponent as CheeseIcon } from "../assets/foodPictograms/cheese.svg";

const FoodComponentPictogram = (props) => {
  return (
    <>
      {props.foodtext === "cheese" ? (
        <CheeseIcon className="foodListElements-wrapper__pictogram" />
      ) : null}
    </>
  );
};
export default FoodComponentPictogram;
