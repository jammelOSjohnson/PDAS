import React from "react";
import "bulma/css/bulma.css";
import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";

const App = () => {
  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">Personal Digital Assistants</p>
        </div>
      </section>

      <div className="container">
        <div className="columns">
          <div className="column is-4">
            <ProfileCard
              title="Alexa"
              handle="@alexa99"
              image={AlexaImage}
              description="Alexa was created by Amazon and helps you buy things."
            />
          </div>
          <div className="column is-4">
            <ProfileCard
              title="Cortana"
              handle="@cortana32"
              image={CortanaImage}
              description="Cortana was made by Microsoft. Who knows what it does?"
            />
          </div>
          <div className="column is-4">
            <ProfileCard
              title="Siri"
              handle="@Siri01"
              image={SiriImage}
              description="Siri was made by Apple and is being phased out."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
