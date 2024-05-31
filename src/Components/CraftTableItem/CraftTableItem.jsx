/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const CraftTableItem = ( {craft} ) => {
  const  {name, subcategory_Name, shortdescription, image, price, rating , 
        customization, processing_time,userEmail, userName , _id} = craft;


    return (
        <tbody>
             
        <tr className="hover:bg-gray-50 border-b transition duration-300">
         <td className="py-4 px-6 border-b lg:text-xl font-medium"> {name} </td>
         <td className="py-4 px-6 border-b lg:text-lg font-medium">{price}</td>
         <td className="py-4 px-6 border-b lg:text-lg font-medium">{rating}</td>
         <td className="py-4 px-6 border-b text-lg font-medium">{processing_time}</td>
         <td className="py-4 px-6 border-b text-end">

         <Link to={`/craftdetails/${_id}`}>
         <button className="bg-blue-500 hover:scale-110 scale-100 transition-all duration-100
          text-white py-2 px-4 rounded-md">Details</button></Link>
            
            
          
         </td>
     </tr>
     
     </tbody>
    );
};

export default CraftTableItem;