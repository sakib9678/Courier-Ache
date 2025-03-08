import delivery_boy from "../assets/images/delivery_boy.png";
import OtherSection2 from "./OtherSection2";
import Hero from "./Hero";
import OtherSections from "./OtherSections";
import Services from "./Services";
import Track from "./Track";
import Tracking from "./Tracking";
import Review from "./Review";

const HomeContent = () => {
  return (
    <div>
      <Hero />
      <Tracking />
      <Services />
      
      {/* <Track /> */}
      <OtherSections />
      <Review />
      <OtherSection2 />
    </div>
  );
};

export default HomeContent;
