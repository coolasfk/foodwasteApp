import { v4 as uuidv4 } from "uuid";
import FoodListComponent from "./FoodListComponent";
const GroceryList = (props) => {
  return (
    <>
      {/* <div>{props.componentsGrocery}</div> */}
      {props.dataGrocery.map((obj) => (
        // <FoodListComponent foodtext={obj.foodtext} key={obj.key} />
        // <FoodListComponent foodtext={obj.foodtext} key={obj.id} />
        <FoodListComponent foodtext={obj.foodtext} key={uuidv4()} />
      ))}
    </>
  );
};

export default GroceryList;
