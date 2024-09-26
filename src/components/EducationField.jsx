import { useState } from "react";
import EducationForm from "./EducationForm";

export default function EducationField({ educations, handleEducationsChange }) {
  const [activeIndex, setActiveIndex] = useState(-1);

  function handleChangeFormVisibility(index) {
    if (index === activeIndex) {
      setActiveIndex(-1);
    } else {
      setActiveIndex(index);
    }
  }

  function handleFieldChange(e) {
    const newEducations = educations.map((education, index) =>
      index === activeIndex
        ? { ...education, [e.target.name]: e.target.value }
        : education
    );
    handleEducationsChange(newEducations);
  }

  function addEducation() {
    handleEducationsChange([
      ...educations,
      {
        id: educations.length,
        school: "",
        degree: "",
        startDate: null,
        endDate: null,
      },
    ]);
  }

  return (
    <>
      <h2>Education</h2>
      {educations.map((education, index) => (
        <EducationForm
          key={education.id}
          isActive={activeIndex === index}
          onShow={() => handleChangeFormVisibility(index)}
          education={education}
          onChange={handleFieldChange}
        />
      ))}
      <button onClick={addEducation}>+ Add education</button>
    </>
  );
}
