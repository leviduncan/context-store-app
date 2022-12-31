import { BsStarFill } from "react-icons/bs";

const starArray = [...Array(5).keys()].map(i => i + 1);

const Rate = ({ rating }) =>
  starArray.map(i => (
    <BsStarFill
      key={i}
      color={rating >= i ? "orange" : "lightgrey"}
    />
  ));


export default Rate