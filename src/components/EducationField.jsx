import { useState } from "react";
import EducationForm from "./EducationForm";
import FormContainer from "./FormContainer";

export default function EducationField({ educations, handleEducationsChange }) {
  const [activeId, setActiveId] = useState(-1);

  function handleChangeFormVisibility(id) {
    if (id === activeId) {
      setActiveId(-1);
    } else {
      setActiveId(id);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e);
    const newEducations = educations.map((education) =>
      education.id === activeId
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
    setActiveId(-1);
  }

  function addEducation() {
    handleEducationsChange([
      ...educations,
      {
        id: crypto.randomUUID(),
        school: "",
        degree: "",
        startDate: "",
        endDate: "",
      },
    ]);
    setActiveId(educations[educations.length - 1].id);
  }

  function handleDelete(e) {
    e.preventDefault();
    handleEducationsChange(
      educations.filter((education) => education.id !== activeId)
    );
  }

  return (
    <>
      <FormContainer title="Education">
        {educations.map((education) => (
          <EducationForm
            key={education.id}
            isActive={activeId === education.id}
            onShow={() => handleChangeFormVisibility(education.id)}
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
