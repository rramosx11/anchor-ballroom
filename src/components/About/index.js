import React from "react";
import coverImage from "../../assets/cover/ballroom_stairs.jpeg";

function About() {
  return (
    <section className="my-5">
      <h1 id="about">Anchor Ballroom</h1>
      <img
        src={coverImage}
        className="my-2"
        style={{ width: "100%" }}
        alt="cover"
      ></img>
    </section>
  );
}

export default About;
