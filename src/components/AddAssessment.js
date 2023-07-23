import React, { useState } from "react";
import "../styles/add-assesments.scss";
import Tag from "./Tag";

const AddAssessment = ({ toggleAddAssessments }) => {
  //   const [addAssessments, ] = useState(second);

  return (
    <section className="add-assessment f-center">
      <form className="add-form">
        <header className="form-header flex">
          <h2 className="heading">Create new Assesments</h2>

          <span className="icon">
            <img src="../assets/svg/plus.svg" alt="cross icon" />
          </span>
        </header>

        <fieldset className="form-main grid">
          <div className="form-block grid">
            <label for="title">Name of assessment</label>
            <input
              className="form-box"
              id="title"
              type="text"
              name="title"
              placeholder="Type Here"
            />
          </div>

          <div className="form-block grid">
            <label for="title">Purpose of the test is</label>
            <select name="purpose" className="form-box">
              <option value="">Select</option>
            </select>
          </div>

          <div className="form-block grid">
            <label for="title">Description</label>
            <select name="description" className="form-box">
              <option value="">Select</option>
            </select>
          </div>

          <div className="form-block grid">
            <label for="title">Skills</label>
            <div className="form-tags">
              <div className="all-tags f-left">
                <Tag />
                <Tag />
                <Tag />
                <Tag />
                <Tag />
                <Tag />
              </div>
              <input
                className="form-box"
                id="title"
                type="text"
                name="title"
                placeholder="Type Here"
              />
            </div>
          </div>

          <div className="form-block grid">
            <label for="title">Duration of assesment</label>
            <div className="form-tags">
              <input
                className="form-box"
                id="title"
                type="text"
                name="title"
                placeholder="Type Here"
              />
            </div>
          </div>
        </fieldset>

        <footer className="form-footer">
          <button onClick={toggleAddAssessments} className="btn-close">
            Save
          </button>
        </footer>
      </form>
    </section>
  );
};

export default AddAssessment;
