import { useState } from "react";
import EducationForm from "./EducationForm";
import FormContainer from "./FormContainer";

export default function EducationField({ educations, handleEducationsChange }) {
  const [activeIndex, setActiveIndex] = useState(-1);

  function handleChangeFormVisibility(index) {
    if (index === activeIndex) {
      setActiveIndex(-1);
    } else {
      setActiveIndex(index);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e);
    const newEducations = educations.map((education, index) =>
      index === activeIndex
        ? {
            ...education,
            school: e.target.school.value,
            degree: e.target.degree.value,
            startDate: e.target.startDate.value,
            endDate: e.target.endDate.value,
          }
        : education
    );
    handleEducationsChange(newEducations);
    setActiveIndex(-1);
  }

  function addEducation() {
    handleEducationsChange([
      ...educations,
      {
        id: educations.length,
        school: "",
        degree: "",
        startDate: "",
        endDate: "",
      },
    ]);
    setActiveIndex(educations.length);
  }

  function handleDelete(e) {
    e.preventDefault();
    handleEducationsChange(
      educations.filter((education) => education.id !== activeIndex)
    );
  }

  return (
    <>
      <FormContainer title="Education">
        {educations.map((education, index) => (
          <EducationForm
            key={education.id}
            isActive={activeIndex === index}
            onShow={() => handleChangeFormVisibility(index)}
            education={education}
            onSubmit={handleSubmit}
            onDelete={handleDelete}
          />
        ))}
        <button onClick={addEducation}>+ Add education</button>
      </FormContainer>
    </>
  );
}
