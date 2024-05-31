import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Helmet } from "react-helmet";

const AddCraftItem = () => {
  const { user } = useContext(AuthContext);
  const [ selectedCustomizationUpdateOption, setSelectedCustomizationUpdateOption,] = useState("");
  const [ selectedSubCategoryUpdateOption, setselectedSubCategoryUpdateOption,] = useState("");
  const [ selectedStockStatusUpdateOption, setselectedStockStatusUpdateOption,] = useState("");
// 

  // console.log(user);

  const handleCustomizationSelectChange = (event) => {
    setSelectedCustomizationUpdateOption(event.target.value);
  };
  
  const handleSubCategorySelectChange = (event) => {
    setselectedSubCategoryUpdateOption(event.target.value);
  };

  const handleStorckStatusSelectChange = (event) => {
    setselectedStockStatusUpdateOption(event.target.value);
  };


  const handleAddCraftItem = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const subcategory_Name = selectedSubCategoryUpdateOption;
    const shortdescription = form.shortdescription.value;
    const image = form.image.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const stoke = selectedStockStatusUpdateOption;
    const customization = selectedCustomizationUpdateOption;
    const processing_time = form.processing_time.value;
    const userEmail = user.email;
    const userName = user.displayName;

    const newCraft = {
      name,
      subcategory_Name,
      shortdescription,
      stoke,
      image,
      price,
      rating,
      customization,
      processing_time,
      userEmail,
      userName,
    };
    console.log(newCraft);

    // send data to the server
    fetch("https://art-and-craftstore-server.vercel.app/craft", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCraft),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data?.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Craft Item Added Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div>
        <Helmet>
        <title> Eureka Resort || Add Craft Item </title>
      </Helmet>
      <div>
        <div className="bg-transparent">
          <div className="text-center space-y-3 my-12 px-6">
            <h2 className="lg:text-5xl lg:font-bold text-3xl">
              Add A Craft Item
            </h2>
            <p>
              It is a long established fact that a reader will be distraceted by
              the readable content of a page when looking at <br />
              its layout. The point of using Lorem Ipsum is that it has a
              more-or-less normal distribution of letters, as opposed
              <br /> to using Content here.
            </p>
          </div>

          <div className="container mx-auto lg:px-48">
            <form onSubmit={handleAddCraftItem}>
              {/* item name and Stock Status */}
              <div className="md:flex gap-10 px-4">
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className="label-text font-semibold">Item Name</span>
                  </label>
                  <label className="input-group">
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter Item name"
                      className="input input-bordered w-full"
                    />
                  </label>
                </div>

                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className="label-text font-semibold">
                     Stock Status 
                    </span>
                  </label>
                  <label className="input-group">
                   
                  <select
                      value={selectedStockStatusUpdateOption}
                      onChange={handleStorckStatusSelectChange}
                      className="outline-slate-200 input input-bordered w-full"
                    >
                      <option value="" className="p-1">
                        Select
                      </option>
                      <option value="In stock" className="p-1">
                      In stock
                      </option>
                      <option value="Made to Order" className="p-1">
                      Made to Order
                      </option>
                    </select>

                  </label>
                </div>
              </div>

              {/* Sub Category and image url */}
              <div className="md:flex gap-10 px-4">
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className="label-text font-semibold">
                     Sub Category 
                    </span>
                  </label>
                  <label className="input-group">

                  <select
                      value={selectedSubCategoryUpdateOption}
                      onChange={handleSubCategorySelectChange}
                      className="outline-slate-200 input input-bordered w-full"
                    >
                      <option value="" className="p-1">
                        Select
                      </option>
                      <option value="Landscape Painting" className="p-1">
                        Landscape Painting
                      </option>
                      <option value="Portrait Drawing" className="p-1">
                      Portrait Drawing
                      </option>
                      <option value="Watercolour Painting" className="p-1">
                      Watercolour Painting
                      </option>
                      <option value="Oil Painting" className="p-1">
                      Oil Painting
                      </option>
                      <option value="Charcoal Sketching" className="p-1">
                      Charcoal Sketching
                      </option>
                      <option value="Cartoon Drawing" className="p-1">
                      Cartoon Drawing
                      </option>
                    </select>
                  </label>
                </div>

                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className="label-text font-semibold">Image Url</span>
                  </label>
                  <label className="input-group">
                    <input
                      type="text"
                      name="image"
                      placeholder="Enter Valid Image URL"
                      className="input input-bordered w-full"
                    />
                  </label>
                </div>
              </div>

              {/* Price and rating Category Row */}
              <div className="md:flex gap-10 px-4">
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className="label-text font-semibold">Price</span>
                  </label>
                  <label className="input-group">
                    <input
                      type="text"
                      name="price"
                      placeholder="Enter Product Price"
                      className="input input-bordered w-full"
                    />
                  </label>
                </div>

                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className="label-text font-semibold">Rating</span>
                  </label>
                  <label className="input-group">
                    <input
                      type="text"
                      name="rating"
                      placeholder="Enter Product Rating"
                      className="input input-bordered w-full"
                    />
                  </label>
                </div>
              </div>
              {/* customization and proccesing time row*/}
              <div className="md:flex gap-10 px-4">
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className="label-text font-semibold">
                      Customization
                    </span>
                  </label>
                  <label className="input-group">

                    <select
                      value={selectedCustomizationUpdateOption}
                      onChange={handleCustomizationSelectChange}
                      className="outline-slate-200  input input-bordered w-full"
                    >
                      <option value="" className="p-1">
                        Select
                      </option>
                      <option value="yes" className="p-1">
                        Yes
                      </option>
                      <option value="no" className="p-1">
                        No
                      </option>
                    </select>

                  </label>
                </div>

                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className="label-text font-semibold">
                      Processing_time
                    </span>
                  </label>
                  <label className="input-group">
                    <input
                      type="text"
                      name="processing_time"
                      placeholder="Enter Processing Time"
                      className="input input-bordered w-full"
                    />
                  </label>
                </div>
              </div>
              {/* username and email row */}
              <div className="md:flex gap-10 px-4">
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className="label-text font-semibold">User Email</span>
                  </label>
                  <label className="input-group">
                    <input
                      type="text"
                      name="userEmail"
                      disabled
                      placeholder="Enter Valid Email"
                      className="input input-bordered w-full"
                    />
                  </label>
                </div>

                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className="label-text font-semibold">User Name</span>
                  </label>
                  <label className="input-group">
                    <input
                      type="text"
                      name="userName"
                      disabled
                      placeholder="Enter Unique User Name"
                      className="input input-bordered w-full"
                    />
                  </label>
                </div>
              </div>

              {/* username and email row */}
              <div className="px-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">
                      Short Description
                    </span>
                  </label>
                  <label className="input-group">
                    <textarea
                      type="text"
                      name="shortdescription"
                      placeholder="Enter Shorrt Description"
                      className="w-full input input-bordered h-48"
                    />
                  </label>
                </div>
              </div>

              {/* buttun  */}
              <div className="md:flex gap-10 px-4">
                <input
                  type="submit"
                  value="Add Craft"
                  className="btn btn-block btn-secondary mt-8"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCraftItem;
