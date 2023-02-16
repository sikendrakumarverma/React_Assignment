function ProductCard(props) {
    let name = props.name;
  
    if (name.length > 10) {
      name = name.substring(0, 10) + "...";
    }
    return (
      <div
        className={`product-card ${
          props.id % 2 === 0 ? "bg-tomato" : "bg-dodgerblue"
        }`}
      >
        <img src={props.image} alt="" />
        <h3 title={props.name}>{name}</h3>
        {/* <img src="https://covers.openlibrary.org/b/id/2407210-S.jpg" alt="" /> */}
      </div>
    );
  }
  
  export default ProductCard;