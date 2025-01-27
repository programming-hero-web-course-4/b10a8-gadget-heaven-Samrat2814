import { useLoaderData } from "react-router-dom";
import Cards from "../Components/Cards";


const Home = () => {
    const cards = useLoaderData();
    
    return (
        <div>
           <Cards cards ={cards}/>
        </div>
    );
};

export default Home;