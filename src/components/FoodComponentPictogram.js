import { ReactComponent as CheeseIcon } from "../assets/foodPictograms/cheese.svg";

const FoodComponentPictogram = (props) => {
  return (
    // <div className="foodList-wrapper__foodList">
    //   <div className="foodlist__foodListElements-wrapper foodListElements-wrapper">
    //     {props.inputForFoodList === "cheese" ? (
    //       <CheeseIcon className="foodListElements-wrapper__pictogram" />
    //     ) : null}
    //   </div>
    // </div>

    <>
      {props.inputForFoodList === "cheese" ? (
        <CheeseIcon className="foodListElements-wrapper__pictogram" />
      ) : null}
    </>
  );
};
export default FoodComponentPictogram;
