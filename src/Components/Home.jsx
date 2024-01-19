import Service from "../assets/images/customer-service.jpg";
import Programming from "../assets/images/programming.jpg";
import Hr from "../assets/images/hr.jpg";
import Team from "../assets/images/team.png";
import Delhi from "../assets/images/delhi.jpg";
import Gurgaon from "../assets/images/Gurgaon.jpeg";
import Bangalore from "../assets/images/bangalore.jpg";
import Pune from "../assets/images/pune.jpg";
import { FaClock } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <section className="section">
        <div className="container">
          <div className="section_header">
            <h2 className="section_header_title">Latest Featured Jobs</h2>
            <a href="#" className="section_header_link">
              See More &nbsp; &rarr;
            </a>
          </div>
          <div className="features">
            <div className="featured_card">
              <img
                src={Service}
                alt="customer-service"
                className="featured_img"
              />
              <div className="card_body">
                <h3 className="featured_title">Customer Service</h3>
                <p className="featured_p">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
                <div className="featured_icon_box">
                  <FaClock className="featured_icon" />
                  Full-Time
                </div>
                <div className="featured_icon_box">
                  <ImLocation className="featured_icon" />
                  India
                </div>
                <button className="featured_btn">Apply For Job</button>
              </div>
            </div>

            <div className="featured_card">
              <img
                src={Programming}
                alt="programming"
                className="featured_img"
              />
              <div className="card_body">
                <h3 className="featured_title">Full-Stack Developer</h3>
                <p className="featured_p">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
                <div className="featured_icon_box">
                  <FaClock className="featured_icon" />
                  Full-Time
                </div>
                <div className="featured_icon_box">
                  <ImLocation className="featured_icon" />
                  India
                </div>
                <button className="featured_btn">Apply For Job</button>
              </div>
            </div>
            <div className="featured_card">
              <img src={Hr} alt="Hr" className="featured_img" />
              <div className="card_body">
                <h3 className="featured_title">HR Director</h3>
                <p className="featured_p">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
                <div className="featured_icon_box">
                  <FaClock className="featured_icon" />
                  Full-Time
                </div>
                <div className="featured_icon_box">
                  <ImLocation className="featured_icon" />
                  India
                </div>
                <button className="featured_btn">Apply For Job</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section join_us">
        <div className="container join_container">
          <div className="join_content">
            <h2 className="join_title">
              We&apos;re more than just a workplace. We&apos;re a family.
            </h2>
            <button className="join_btn">JOIN US</button>
          </div>
        </div>
      </section>
      <section className="section team">
        <div className="container team_container">
          <div className="section_header">
            <h2 className="section_header_title">Find your Team</h2>
            <a href="#" className="section_header_link">
              See more teams &nbsp; &rarr;
            </a>
          </div>
          <div className="teams">
            <div className="team_col">
              <img src={Team} alt="Team" className="team_img" />
            </div>
            <div className="team_col">
              <div className="team_content">
                <h3 className="team_title">Engineering & tech</h3>
                <p className="team_p">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ducimus doloribus ab iure est unde accusamus quos molestias
                  provident exercitationem vitae, fugiat harum id recusandae
                  dicta.
                </p>
              </div>
              <div className="team_content">
                <h3 className="team_title">Slaes, Services & support</h3>
                <p className="team_p">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ducimus doloribus ab iure est unde accusamus quos molestias
                  provident exercitationem vitae, fugiat harum id recusandae
                  dicta.
                </p>
              </div>
            </div>
            <div className="team_col">
              <div className="team_content">
                <h3 className="team_title">Peoples</h3>
                <p className="team_p">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ducimus doloribus ab iure est unde accusamus quos molestias
                  provident exercitationem vitae, fugiat harum id recusandae
                  dicta.
                </p>
              </div>
              <div className="team_content">
                <h3 className="team_title">Marketing</h3>
                <p className="team_p">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ducimus doloribus ab iure est unde accusamus quos molestias
                  provident exercitationem vitae, fugiat harum id recusandae
                  dicta.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section countries">
        <div className="container">
          <div className="section_header">
            <h2 className="section_header_title">Our Locations</h2>
            <a href="#" className="section_header_link">
              view all locations &nbsp; &rarr;
            </a>
          </div>
          <div className="countries_container">
            <div className="country">
              <img src={Delhi} alt="Delhi" />
              <div className="country_content">
                <div className="country_details">
                  <h3 className="country_name">Delhi</h3>
                  <p className="country_jobs">140 Jobs</p>
                </div>
                <span>&rarr;</span>
              </div>
            </div>
            <div className="country">
              <img src={Gurgaon} alt="Gurgaon" />
              <div className="country_content">
                <div className="country_details">
                  <h3 className="country_name">Gurgaon</h3>
                  <p className="country_jobs">140 Jobs</p>
                </div>
                <span>&rarr;</span>
              </div>
            </div>
            <div className="country">
              <img src={Bangalore} alt="Bangalore" />
              <div className="country_content">
                <div className="country_details">
                  <h3 className="country_name">Bangalore</h3>
                  <p className="country_jobs">140 Jobs</p>
                </div>
                <span>&rarr;</span>
              </div>
            </div>
            <div className="country">
              <img src={Pune} alt="Pune" />
              <div className="country_content">
                <div className="country_details">
                  <h3 className="country_name">Pune</h3>
                  <p className="country_jobs">140 Jobs</p>
                </div>
                <span>&rarr;</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="container">
          <p className="footer_text">© 2024 Bittu, Crafted by with ❤️</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
