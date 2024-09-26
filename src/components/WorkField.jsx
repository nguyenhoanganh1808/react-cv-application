import { useState } from "react";
import WorkForm from "./WorkForm";
import FormContainer from "./FormContainer";

export default function WorkField({ works, setWorks }) {
  const [activeIndex, setActiveIndex] = useState(-1);

  function handleChangeFormVisibility(index) {
    if (index === activeIndex) {
      setActiveIndex(-1);
    } else {
      setActiveIndex(index);
    }
  }

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   console.log(e);
  //   const newEducations = works.map((education, index) =>
  //     index === activeIndex
  //       ? {
  //           ...education,
  //           school: e.target.school.value,
  //           degree: e.target.degree.value,
  //           startDate: e.target.startDate.value,
  //           endDate: e.target.endDate.value,
  //         }
  //       : education
  //   );
  //   // handleEducationsChange(newEducations);
  //   setActiveIndex(-1);
  // }

  function addExperience() {
    setWorks([
      ...works,
      {
        id: works.length,
        school: "",
        degree: "",
        startDate: "",
        endDate: "",
      },
    ]);
    setActiveIndex(works.length);
  }

  // function handleDelete(e) {
  //   e.preventDefault();
  //   handleEducationsChange(
  //     educations.filter((education) => education.id !== activeIndex)
  //   );
  // }

  return (
    <>
      <FormContainer title="Experiences">
        {works.map((work, index) => (
          <WorkForm
            key={work.id}
            isActive={activeIndex === index}
            onShow={() => handleChangeFormVisibility(index)}
            work={work}
            // onSubmit={handleSubmit}
            // onDelete={handleDelete}
          />
        ))}
        <button onClick={addExperience}>+ Add experience</button>
      </FormContainer>
    </>
  );
}
