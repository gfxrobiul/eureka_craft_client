import { useEffect, useState } from "react";
import NewCraftCard from "../NewCraftCard/NewCraftCard";


const CraftInfo = () => {
    const [newCraft , setNewCraft] = useState([]);
    console.log(newCraft);

    useEffect(() => {
        fetch('https://art-and-craftstore-server.vercel.app/newCraft')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setNewCraft(data);
            })
    }, [])

    return (


        <div className="container mx-auto justify-center items-center my-20">
        <h2 className="text-4xl poppinsFont font-bold text-center mb-10">Art & Craft Categories</h2>
<div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  lg:px-0 px-4">
    
           {
             newCraft.map(nCraft => <NewCraftCard 
             key={nCraft._id}
                nCraft={nCraft}
                 ></NewCraftCard> )
            }
    </div>
    </div>
        
    );
};

export default CraftInfo;