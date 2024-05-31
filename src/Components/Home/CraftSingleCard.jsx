/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { Link } from "react-router-dom";

const CraftSingleCard = ( { craft }) => {
    // console.log(craft)
    const  {name, subcategory_Name, shortdescription, image, price, rating , 
        customization, processing_time,userEmail, userName , _id} = craft;
    return (
        <div className="card lg:w-96 bg-base-100 shadow-xl border-2 border-blue-200
         hover:border-blue-500 transition-all my-10 mx-auto  hover:scale-105">
  <figure className="p-5 pt-5">
    <img src={image} alt="Shoes" className="rounded-xl lg:h-[300px] h-[200px]" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{subcategory_Name}</p>
    <div>
        <Link  to={`/craftdetails/${_id}`}>
        <button className="btn bg-blue-500 hover:bg-blue-700 hover:text-white w-full">Details</button>
        </Link>
    </div>
  </div>
</div>
    );
};

export default CraftSingleCard;