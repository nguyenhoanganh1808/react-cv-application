import { useState } from "react";
import WorkForm from "./WorkForm";
import FormContainer from "./FormContainer";

export default function WorkField({ works, setWorks }) {
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
    const newWorks = works.map((work) =>
      work.id === activeId
        ? {
            ...work,
            company: e.target.company.value,
            position: e.target.position.value,
            startDate: e.target.startDate.value,
            endDate: e.target.endDate.value,
          }
        : work
    );
    setWorks(newWorks);
    setActiveId(-1);
  }

  function addExperience() {
    setWorks([
      ...works,
      {
        id: crypto.randomUUID(),
        school: "",
        degree: "",
        startDate: "",
        endDate: "",
      },
    ]);
    setActiveId(works[works.length].id);
  }

  function handleDelete(e) {
    e.preventDefault();
    setWorks(works.filter((work) => work.id !== activeId));
    setActiveId(-1);
  }

  return (
    <>
      <FormContainer title="Experiences">
        {works.map((work) => (
          <WorkForm
            key={work.id}
            isActive={activeId === work.id}
            onShow={() => handleChangeFormVisibility(work.id)}
            work={work}
            onSubmit={handleSubmit}
            onDelete={handleDelete}
          />
        ))}
        <button onClick={addExperience}>+ Add experience</button>
      </FormContainer>
    </>
  );
}
