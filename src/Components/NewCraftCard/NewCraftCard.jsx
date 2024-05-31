/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const NewCraftCard = ({ nCraft }) => {
  const {
    subcategory_Name,
    short_description,
    image,
  } = nCraft;

  return (
   <Link to={`/craft/${subcategory_Name}`}>
    <div
      className="card lg:w-96 bg-base-100 shadow-xl border-2 border-blue-200
        hover:border-blue-500 transition-all my-10 mx-auto  hover:scale-105"
    >
      <figure className="p-5 pt-5">
        <img
          src={image}
          alt="Shoes"
          className="rounded-xl lg:h-[300px] h-[200px]"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{subcategory_Name}</h2>
        <p>{short_description}</p> 
      </div>
    </div>
   </Link>
  );
};

export default NewCraftCard;
