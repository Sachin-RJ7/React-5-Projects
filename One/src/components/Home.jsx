import React from "react";
import vg from "../assets/2.webp";
import { AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram} from "react-icons/ai"

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>TechyStar</h1>
          <p>Solution to all your problems</p>
        </main>
      </div>
      <div className="home2" id="about">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in children.
          </p>
        </div>
      </div>
      <div className="home3" id="contact">
        <div>
            <h1>Who are you?</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto consectetur consequatur dolorem ea obcaecati eveniet. Quaerat officia, similique, incidunt consequatur, ea necessitatibus labore totam sapiente saepe maxime odit esse eum! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam quidem in accusantium. Nesciunt, nulla reiciendis expedita optio illo corrupti placeat magni, perferendis necessitatibus minima, dicta commodi ipsum eveniet qui voluptatibus!
            </p>
        </div>
      </div>
      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div style={{
                animationDelay : "0.3",
              }}>
                <AiFillGoogleCircle />
                <p>Google</p>
            </div>

            <div style={{
                animationDelay : "0.5s",
              }}>
                <AiFillAmazonCircle />
                <p>Amazon</p>
            </div>

            <div style={{
                animationDelay : "0.7s",
              }}>
                <AiFillYoutube />
                <p>Youtube</p>
            </div>

            <div style={{
                animationDelay : "1s",
              }}>
                <AiFillInstagram />
                <p>Intagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
