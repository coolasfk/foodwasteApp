import { v4 as uuidv4 } from "uuid";
import FoodListComponent from "./FoodListComponent";
const GroceryList = (props) => {
  return (
    <>
      {/* {props.dataGrocery.map((obj) => (
        <FoodListComponent
          foodtext={obj.foodtext}
          key={obj.key}
          id={obj.key}
          dataGrocery={props.dataGrocery}
          setDataGrocery={props.setDataGrocery}
          origin="grocery"
        />
      ))} */}
      
    </>
  );
};

export default GroceryList;
