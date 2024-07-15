import React from "react";
import '../styles/about.css'; // Make sure to adjust the path to your CSS file

const About = () => {
  return (
    <div className="container">
      <div className="home-content text-center mb-5">
        <div className="card-body">
          <h1>About Us</h1>
          <p>We are a team of four persons Our website was created out of recognition of a problem many of us face during children's birthdays – guests don't always know what to buy, and sometimes the gifts are not suitable or meaningful. 
            Our goal is to ease the burden on guests and ensure that every child receives a gift they truly love and appreciate.</p>
          <div className="team-cards-container">
            <div className="team-card">
              <img
                src={"avatar.png"}
                alt="avatar photo"
                style={{ width: "100%", borderRadius: "50%" }}
              />
              <div className="container">
                <h4>Avatar Avatar</h4>
                <p>Team Member</p>
                <p>aa@gmail.com</p>
              </div>
            </div>

            <div className="team-card">
              <img
                src={"avatar.png"}
                alt="avatar photo"
                style={{ width: "100%", borderRadius: "50%" }}
              />
              <div className="container">
                <h4>Avatar Avatar</h4>
                <p>Team Member</p>
                <p>aa@gmail.com</p>
              </div>
            </div>

            <div className="team-card">
              <img
                src={"avatar.png"}
                alt="avatar photo"
                style={{ width: "100%", borderRadius: "50%" }}
              />
              <div className="container">
                <h4>Avatar Avatar</h4>
                <p>Team Member</p>
                <p>aa@gmail.com</p>
              </div>
            </div>

            <div className="team-card">
              <img
                src={"avatar.png"}
                alt="avatar photo"
                style={{ width: "100%", borderRadius: "50%" }}
              />
              <div className="container">
                <h4>Avatar Avatar</h4>
                <p>Team Member</p>
                <p>aa@gmail.com</p>
              </div>
            </div>
          </div>
          <p>We're really glad you're here and using our website!</p>
          <p>We would be even happier if you contacted us!</p>

        </div>
      </div>
    </div>
  );
};

export default About;
