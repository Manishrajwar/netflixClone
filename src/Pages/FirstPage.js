import Hero from "../Components/Hero";
import Section1 from '../Components/Section1';
import tv from "../assets/tv.png";
import mobile from "../assets/mobile-0819.jpg";
import img1 from '../assets/img1.png';

function FirstPage() {
  return (
    <div className="w-[100vw] overflow-x-hidden">
      {/* hero section */}
      <div className=" image w-screen h-[100vh] ">
        <div className="w-full h-full gradienting relative">
          <Hero />
        </div>
      </div>

      {/* for separate line */}
      <div className="w-full h-3 bg-[rgb(35,35,35)]"></div>

      {/* section no* 1 */}
      <div className="w-full overflow-x-hidden">
        <Section1
          title={"Enjoy on your TV."}
          para={
            "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."
          }
          image={tv}
        />
      </div>

      {/* for separate line */}
      <div className="w-full h-3 bg-[rgb(35,35,35)]"></div>

      {/* section 2 */}
      <div>
        <Section1
          title={"Download your shows to watch offline."}
          para={
            "Save your favourites easily and always have something to watch."
          }
          image={mobile}
          reverse={"reverse"}
        />
      </div>

      {/* for separate line */}
      <div className="w-full h-3 bg-[rgb(35,35,35)]"></div>

      {/* section 3 */}
      <div>
        <Section1
          title={"Watch everywhere."}
          para={
            "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
          }
          image={tv}
        />
      </div>

      {/* for separate line */}
      <div className="w-full h-3 bg-[rgb(35,35,35)]"></div>

      {/* section 4 */}
      <div>
        <Section1
          title={"Create profiles for children."}
          para={
            "Send children on adventures with their favourite characters in a space made just for them—free with your membership."
          }
          reverse={"reverse"}
          image={img1}
        />
      </div>

      {/* for separate line */}
      <div className="w-full h-3 bg-[rgb(35,35,35)]"></div>
    </div>
  );
}

export default FirstPage;
