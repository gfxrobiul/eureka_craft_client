import { useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import useAuth from "../hooks/useAuth";
import MyCraftDetails from "../Components/MyCraftDetails/MyCraftDetails";
import { Helmet } from "react-helmet";

const MyArtAndCraft = () => {
  const { user } = useAuth(AuthContext);
  const [item, setItem] = useState([]);
  const [reallData, setReallData] = useState([]);
  // console.log(user);

  const filterByValue = (value) => {
    const filterSortData = reallData.filter(
      (item) => item.customization == value
    );
    setItem(filterSortData);
  };

  const handleSortFilter = () => {
    setItem(reallData);
  };

  useEffect(() => {
    fetch(`https://art-and-craftstore-server.vercel.app/myart/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
        setReallData(data);
      });
  }, [user]);

  return (
    <div className="container mx-auto">
      <Helmet>
        <title> Eureka Resort || My Art & and craft</title>
      </Helmet>
      <div className="flex justify-center items-center">
        <details className="dropdown mt-10">
          <summary className="m-1 btn btn-outline px-10 ">Filter</summary>
          <ul className="p-2 block shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li>
              <button onClick={handleSortFilter}>All</button>
            </li>
            <li>
              <button onClick={() => filterByValue("yes")}>Yes</button>
            </li>
            <li>
              <button onClick={() => filterByValue("no")}>No</button>
            </li>
          </ul>
        </details>
      </div>

      {item?.map((p) => (
        <MyCraftDetails
          key={p._id}
          p={p}
          item={item}
          setItem={setItem}
        ></MyCraftDetails>
      ))}
    </div>
  );
};

export default MyArtAndCraft;
