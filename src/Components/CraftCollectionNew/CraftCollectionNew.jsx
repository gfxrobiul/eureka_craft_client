import { useLoaderData } from "react-router-dom";
import CraftChallage from "./CraftChallage";

const CraftCollectionNew = () => {
    const craftCollection = useLoaderData();
    console.log(craftCollection);
    
    return (
        <div>
            {
                craftCollection.map(craftcoll => <CraftChallage 
                    key={craftcoll._id}
                    craftcoll={craftcoll}
                    ></CraftChallage>)
            }
        </div>
    );
};

export default CraftCollectionNew;