import Bird from "../assets/Bird.jpg";
import Flower from "../assets/Flower.jpg";

const Photography = () => {
    return (
        <div className="accordionContent">
            <div className="images">
               <img src={Bird} alt="Photo 1"/>
               <img src={Flower} alt="Photo 2"/>
            </div>
        </div>
    )
}

export default Photography;