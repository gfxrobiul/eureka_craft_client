import { Helmet } from "react-helmet";
import Banner from "./Banner";
import QuestionAndAnswer from "./QuestionAndAnswer";
import About from "./About";
import OurServices from "./OurServices";
import CraftItemsSection from "./CraftItemsSection";
import CraftInfo from "../CraftCollectionNew/CraftInfo";


const Home = () => {
    return (
        <div className="container mx-auto">
            <Helmet>
                <title>Eureka Crafts || Home </title>
            </Helmet>
         <Banner></Banner>
         <CraftItemsSection></CraftItemsSection>
         <About></About>
         <OurServices></OurServices>
         <CraftInfo></CraftInfo>
         {/* <OurTeamMember></OurTeamMember> */}
         <QuestionAndAnswer></QuestionAndAnswer>
        </div>
    );
};

export default Home;