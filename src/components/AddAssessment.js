import React, { useState } from "react";
import "../styles/add-assessments.scss";
import Tag from "./Tag";

const AddAssessment = ({ setAddAssessmentWindow }) => {
  const [tags, setTags] = useState([
    "UI/UX and Design",
    "No of Question",
    "Web Development",
    "UI/UX and Design",
    "Web Development",
  ]);
  const [tagsInput, setTagsInput] = useState("");

  const handleDeleteTag = (id) => {
    const newTag = [...tags];
    newTag.splice(id, 1);
    setTags(newTag);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (tagsInput) {
      setTags([...tags, tagsInput]);
      setTagsInput("");
    }
  };

  const handleTagsInput = ({ target: { value } }) => {
    setTagsInput(value);
  };

  return (
    <section className="add-assessment f-center">
      <form className="add-form" onSubmit={handleSubmit}>
        <header className="form-header flex">
          <h2 className="heading">Create new assessments</h2>

          <span
            onClick={() => setAddAssessmentWindow(false)}
            className="icon btn"
          >
            <img src="../assets/svg/plus.svg" alt="cross icon" />
          </span>
        </header>

        <fieldset className="form-main grid">
          <div className="form-block grid">
            <label htmlFor="title">Name of assessment</label>
            <input
              className="form-box"
              id="title"
              type="text"
              name="title"
              placeholder="Type Here"
            />
          </div>

          <div className="form-block grid">
            <label htmlFor="title">Purpose of the test is</label>
            <div className="select-input">
              <select name="purpose" className="form-box">
                <option value="">Select</option>
              </select>
              <span className="icon">
                <img src="../assets/svg/arrow-down.svg" alt="arrow-down" />
              </span>
            </div>
          </div>

          <div className="form-block grid">
            <label htmlFor="title">Description</label>
            <div className="select-input">
              <select name="description" className="form-box">
                <option value="">Select</option>
              </select>
              <span className="icon">
                <img src="../assets/svg/arrow-down.svg" alt="arrow-down" />
              </span>
            </div>
          </div>

          <div className="form-block grid">
            <label htmlFor="title">Skills</label>
            <div className="form-tags">
              <div className="all-tags f-left">
                {tags.map((tag, i) => {
                  return (
                    <Tag
                      key={i}
                      id={i}
                      tag={tag}
                      handleDeleteTag={handleDeleteTag}
                    />
                  );
                })}
              </div>
              <input
                onChange={handleTagsInput}
                className="form-box"
                id="title"
                type="text"
                name="title"
                value={tagsInput}
                placeholder="Type Here"
              />
            </div>
          </div>

          <div className="form-block grid">
            <label htmlFor="title">Duration of assessment</label>
            <input
              className="form-box"
              id="title"
              type="text"
              name="title"
              placeholder="HH:MM:SS"
            />
          </div>
        </fieldset>

        <footer className="form-footer">
          <button className="btn-close">Save</button>
        </footer>
      </form>
    </section>
  );
};

export default AddAssessment;
