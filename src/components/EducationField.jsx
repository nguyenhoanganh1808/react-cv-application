import { useState } from "react";
import EducationForm from "./EducationForm";

export default function EducationField() {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [schools, setSchool] = useState([
    {
      id: 0,
      school: "UIT",
      degree: "Software Engineer",
      startDate: new Date(2024, 8),
      endDate: new Date(2024, 8),
    },
    {
      id: 1,
      school: "HEHEHE",
      degree: "Software Engineer",
      startDate: new Date(2024, 8),
      endDate: new Date(2024, 8),
    },
  ]);

  function handleChangeFormVisibility(index) {
    if (index === activeIndex) {
      setActiveIndex(-1);
    } else {
      setActiveIndex(index);
    }
  }

  function handleFieldChange(e) {
    const newSchools = [];
  }

  return (
    <>
      <h2>Education</h2>
      {schools.map((school, index) => (
        <EducationForm
          key={school.id}
          isActive={true}
          onShow={() => handleChangeFormVisibility(index)}
          education={school}
        />
      ))}
    </>
  );
}
