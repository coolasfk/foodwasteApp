const ListTopHeadlines = ({ listHeadlines }) => {
  return (
    <div className="main__foodList-wrapper foodList-wrapper">
      <div className="foodList-wrapper__headline-wrapper headline-wrapper">
        <h2 className="headline-wrapper__headline">{listHeadlines}</h2>
      </div>
    </div>
  );
};
export default ListTopHeadlines;
