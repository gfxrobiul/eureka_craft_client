import { useLoaderData } from "react-router-dom";
import CraftTableItem from "../Components/CraftTableItem/CraftTableItem";
import { Helmet } from "react-helmet";

const AllArtCraftItem = () => {
  const crafts = useLoaderData();


  return (
    <div className="overflow-x-auto">
        <Helmet>
        <title> Eureka Resort || All Art and crafts </title>
      </Helmet>
      <h2 className="text-3xl text-center mt-10 ">Item: {crafts.length}</h2>
      <div>
    
        <table className="min-w-[90%] shadow-md border mx-auto border-gray-100 my-6">
          <thead>

             <tr className="bg-[#0095FF] text-white">
                <th className="py-4 px-6 text-lg text-left border-b">Name</th>
                <th className="py-4 px-6 text-lg text-left border-b">Price</th>
                <th className="py-4 px-6 text-lg text-left border-b">Rating</th>
                <th className="py-4 px-6 text-lg text-left border-b">Processing Time</th>
                <th className="py-4 px-6 text-lg border-b text-end">Action</th>
            </tr>

             

          </thead>

          {
            crafts.map(craft => <CraftTableItem 
            key={craft._id}
            craft={craft}
            >
            </CraftTableItem>)
          }
        </table>
      </div>
    </div>
  );
};

export default AllArtCraftItem;
