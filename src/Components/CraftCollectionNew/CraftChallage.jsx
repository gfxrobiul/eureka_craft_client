/* eslint-disable react/prop-types */

const CraftChallage = ({craftcoll}) => {
    const {
        name,
        subcategory_Name,
        shortdescription,
        image,
        price,
        rating,
        customization,
        processing_time } = craftcoll;

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

            </div>
          </div>
        </div>
      </div>
    );
};

export default CraftChallage;