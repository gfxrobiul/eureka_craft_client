import { useEffect, useState } from "react";
import CraftSingleCard from "./CraftSingleCard";

const CraftItemsSection = () => {
    const [craftSection, setCraftSection] = useState([]);
  

    useEffect(() => {
        fetch('https://art-and-craftstore-server.vercel.app/craft')
        .then( res => res.json())
        .then(data =>{
            console.log(data); 
            setCraftSection(data)
        })
    },[]) 
    const craftSectionSlice = craftSection.slice(0,6);


    return (
        <div className="container mx-auto justify-center items-center my-20">
                 <h2 className="text-4xl poppinsFont font-bold text-center mb-10">Craft Items</h2>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  lg:px-0 px-4">
            {
                craftSectionSlice.map(craft => <CraftSingleCard 
                    key={craft._id} 
                    craft={craft}
                
                ></CraftSingleCard>)
            }
        </div>

        </div>
    );
};

export default CraftItemsSection;