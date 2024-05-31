import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Components/Home/Home";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import AllArtCraftItem from "../Pages/AllArtCraftItem";
import AddCraftItem from "../Pages/AddCraftItem";
import MyArtAndCraft from "../Pages/MyArtAndCraft";
import CraftDetails from "../Components/CraftTableItem/CraftDetails";
import UpdateCraftItem from "../Components/UpdateCraftItem/UpdateCraftItem";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";
import CraftCollectionNew from "../Components/CraftCollectionNew/CraftCollectionNew";
// import UpdateCraftItem from "../Pages/UpdateCraftItem";

const Router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
            loader:() => fetch('/bannerData.json'),
        },
        {
          path: '/addcraftitem',
          element: <PrivateRoute><AddCraftItem></AddCraftItem></PrivateRoute>,
        },
        {
          path:'/updateCraft/:id',
          element:<UpdateCraftItem></UpdateCraftItem>,
          loader: ({params}) => fetch(`https://art-and-craftstore-server.vercel.app/craft/${params.id}`),
        },
        {
          path:'/allartcraftitems',
          element: <AllArtCraftItem></AllArtCraftItem>,
          loader: () => fetch('https://art-and-craftstore-server.vercel.app/craft'),
        },
        {
          path:'/craftdetails/:id',
          element: <PrivateRoute> <CraftDetails></CraftDetails> </PrivateRoute>,
          loader: ({params}) => fetch(`https://art-and-craftstore-server.vercel.app/craft/${params.id}`),
        },

        {
          path:'/newCraft/:subcategory_Name',
          element: <CraftCollectionNew></CraftCollectionNew>,
          loader: ({params}) => fetch(`https://art-and-craftstore-server.vercel.app/newCraft/${params.subcategory_Name}`),
        },
      
        {
          path: '/myart',
          element: <PrivateRoute><MyArtAndCraft></MyArtAndCraft></PrivateRoute>,
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path:'/login',
          element: <Login></Login>
        },
      ]
    },
  ]);

export default Router;
