import React, { useState } from "react";
import Card from "./Card";
import "../styles/assessments.scss";

const Assesments = ({ toggleAddAssessments }) => {
  return (
    <>
      <section className="my-assessment grid">
        <h2 className="heading">My Assessment</h2>

        <div className="all-assessment grid">
          {/* ADD ASSESMENT */}
          <div className="card add-card f-center">
            <div className="plus flex">
              <button onClick={toggleAddAssessments} className="icon f-center">
                <img src="../assets/svg/plus.svg" alt="add icon" />
              </button>
              <h3 className="heading">New Assessment</h3>
            </div>
            <p>
              From here you can add questions of multiple types like MCQs,
              subjective (text or paragraph)!
            </p>
          </div>

          <Card
            title={"Math Assessment"}
            date={`20 April 2023`}
            duration={"00"}
            questions={"00"}
            user={["LP"]}
          />

          <Card
            title={"Math Assessment"}
            date={`20 April 2023`}
            duration={"00"}
            questions={"00"}
            user={["LP", "LP", "LP"]}
          />
        </div>
      </section>
    </>
  );
};

export default Assesments;
