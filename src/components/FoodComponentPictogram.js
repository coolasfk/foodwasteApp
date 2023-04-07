import { ReactComponent as CheeseIcon } from "../assets/foodPictograms/cheese.svg";

const FoodComponentPictogram = ({ foodtext }) => {
  

  return (
    <>
      {foodtext === "cheese" ? (
        <CheeseIcon className="pictogram-wrapper__pictogram" />
      ) : null}
      <div className="background-Rectangle__pictogram-wrapper pictogram-wrapper"></div>
    </>
  );
};
export default FoodComponentPictogram;
