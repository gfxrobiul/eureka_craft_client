/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useLoaderData } from "react-router-dom";

const CraftDetails = () => {
  const craftdetails = useLoaderData();


  const  {name, subcategory_Name, shortdescription, image, price, rating ,
      customization, processing_time } = craftdetails;

  return (
    <div className="container mx-auto mt-8 lg:px-32 p-2">
        <Helmet>
        <title> Eureka Resort || Craft Details </title>
      </Helmet>
      <div className="flex lg:flex-row md:flex-col flex-col border-2 border-blue-500 lg:p-5 p-2">
        <div className="lg:w-1/2">
            <img src={image} alt="image cludn't loaded " className="lg:border-r-2 lg:border-black lg:pr-5"/>
        </div>
        <div className="">
        <div className="px-2 my-2 border border-blue-500 p-4 lg:mx-8">
            <h2 className="lg:text-3xl text-2xl poppinsFont">{name}</h2>
            <h2 className="lg:text-xl text-base poppinsFont"> <span className="font-medium">Category:</span> {subcategory_Name}</h2>
        </div>


        <div className="px-2 my-2 border border-blue-500 p-4 lg:mx-8 space-y-3">
            <h2 className="lg:text-xl text-base poppinsFont"><span  className="font-medium">Customization:</span> {customization}</h2>
            <div className="flex gap-20">
            <h2 className="lg:text-xl text-base poppinsFont"><span  className="font-medium">Price:</span> ${price}</h2>
            <h2 className="lg:text-xl text-base poppinsFont"> <span className="font-medium">Rating:</span> {rating}</h2>
            </div>
            <h2 className="lg:text-xl text-base poppinsFont"><span className="font-medium">Processign:</span> {processing_time}</h2>
            <h2 className="text-base poppinsFont mt-4 lg:w-[600px]"> <span className="font-medium">Description:</span> {shortdescription}</h2>
            
        </div>
        </div>
        

      </div>
 </div>

  );
};

export default CraftDetails;
