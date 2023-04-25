import FoodListComponent from "./FoodListComponent";

import { v4 as uuidv4 } from "uuid";

const HomeList = (props) => {
  console.log("HomeList props:", props);
  // const [components, setComponents] = useState([]);

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
      {/* <div>{props.componentsList}</div> */}

      {props.dataHome.map((obj) => (
        // <FoodListComponent foodtext={obj.foodtext} key={obj.key} />
        <FoodListComponent
          foodtext={obj.foodtext}
          // key={obj.key}
          // key={obj.id}
          // key={uuidv4()}
          key={obj.key}
          id={obj.key}
          origin="home"

          dataHome={props.dataHome}
          setDataHome={props.setDataHome}

          // {...props}
        />
      ))}
    </>
  );
};

export default HomeList;
