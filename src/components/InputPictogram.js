import { ReactComponent as CheeseIcon } from "../assets/foodPictograms/cheese.svg";

const InputPictogram = ({ foodtext }) => {
  return (
    <>
      {" "}
      {/* <div className="background-Rectangle__pictogram-wrapper pictogram-wrapper"> */}
      {foodtext === "cheese" ? (
        <CheeseIcon className="background-Rectangle__pictogram" />
      ) : null}
      {/* </div> */}
    </>
  );
};
export default InputPictogram;
