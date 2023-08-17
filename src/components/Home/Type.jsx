import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
    return (
        <Typewriter
          options={{
            strings: [
              "Food Process Modelling",
              "Machine Learning in Food Process Engineering",
              "Thermal and Non-Thermal Food Processing",
              "Rheological Properties of Food Materials",
              "Computer Simulation in Food Process Operations",
              "Membrane Filtration"
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
          }}
        />
      )
}

export default Type