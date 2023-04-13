import FoodListComponent from "./FoodListComponent";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FoodListList = (props) => {
  const [components, setComponents] = useState([]);

  //   setComponents((...components) => [
  //     ...components,
  //     <FoodListComponent {...props} />,
  //   ]);
  //   useEffect(() => {
  //     setComponents((...components) => [
  //       ...components,
  //       <FoodListComponent
  //         foodtext={newText}
  //         key={uuidv4()}
  //         {...props}
  //         inputForFoodList={props.foodtext}
  //       />,
  //     ]);
  //   }, [props.foodtext]);

  return (
    <>
      <div>{props.componentsList}</div>
    </>
  );
};

export default FoodListList;
