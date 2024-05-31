import { Link } from "react-router-dom";
import Swal from "sweetalert2";

/* eslint-disable react/prop-types */
const MyCraftDetails = ({ p, item ,setItem }) => {
  const {
    name,
    subcategory_Name,
    shortdescription,
    image,
    price,
    rating,
    customization,
    processing_time,
    _id,
  } = p;

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://art-and-craftstore-server.vercel.app/craft/${_id}`,{
            method: 'DELETE'
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Craft has been deleted.",
                icon: "success",
                
              }
              
            );
            const remaining = item.filter(craf => craf._id !== _id);
            setItem(remaining);
            }
         
          });
      }
    });
  };

  return (
    <div className="container mx-auto mt-8 lg:px-44 px-8 ">
      <div className="flex lg:flex-row  flex-col border-2 border-blue-500 lg:p-5 p-2 bg-slate-200 rounded-lg">
        <div className="lg:w-1/2">
          <img
            src={image}
            alt="image not found "
            className="lg:mt-20 lg:border-r-2 lg:border-black lg:pr-5"
          />
        </div>
        <div className="lg:w-full">
          <div className="px-2 my-2 border border-blue-500 p-4 lg:mx-8">
            <h2 className="lg:text-3xl text-2xl poppinsFont">{name}</h2>
            <h2 className="lg:text-xl text-base poppinsFont">
              {" "}
              <span className="font-medium">Category:</span> {subcategory_Name}
            </h2>
          </div>

          <div className="px-2 my-2 border border-blue-500 p-4 lg:mx-8 space-y-3">
            <h2 className="lg:text-xl text-base poppinsFont">
              <span className="font-medium">Customization:</span>
              {customization}
            </h2>
            <div className="flex gap-20">
              <h2 className="lg:text-xl text-base poppinsFont">
                <span className="font-medium">Price:</span> ${price}
              </h2>
              <h2 className="lg:text-xl text-base poppinsFont">
         
                <span className="font-medium">Rating:</span> {rating}
              </h2>
            </div>
            <h2 className="lg:text-xl text-base poppinsFont">
              <span className="font-medium">Processign:</span> {processing_time}
            </h2>
            <div>
              <h2 className="text-base poppinsFont mt-4">
        
                <span className="font-medium">Description:</span>
                {shortdescription}
              </h2>
            </div>
            <div className="flex gap-10 lg:mt-10">

             <Link to={`/updateCraft/${_id}`}>
             <button className="bg-blue-500 hover:scale-110 scale-100 transition-all duration-100 text-white py-2 px-4 rounded-md">
             Update</button>
             </Link>

              <button
                onClick={() => handleDelete(_id)}
                className="bg-red-500 hover:scale-110 scale-100 transition-all duration-100 text-white py-2 px-4 rounded-md">
                
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCraftDetails;
