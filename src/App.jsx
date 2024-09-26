import { useState } from "react";
import "./App.css";
import PersonalForm from "./components/PersonalForm";
import Resume from "./components/Resume";

import EducationField from "./components/EducationField";
import WorkField from "./components/WorkField";

function App() {
  const [personalDetails, setPersonalDetails] = useState({
    name: "John Doe",
    email: "john@gmail.com",
    phone: "123445",
  });
  const [educations, setEducations] = useState([
    {
      id: 0,
      school: "UIT",
      degree: "Software Engineer",
      startDate: "2024-08",
      endDate: "2024-08",
    },
    {
      id: 1,
      school: "HCMUS",
      degree: "Software Engineer",
      startDate: "2024-08",
      endDate: "2024-08",
    },
  ]);
  const [works, setWorks] = useState([
    {
      id: 0,
      company: "Cac Inc",
      position: "Software Engineer",
      mainResponsibility: "Chien trung",
      startDate: "2024-08",
      endDate: "2024-08",
    },
    {
      id: 1,
      company: "Nhon so Inc",
      position: "Dao canh",
      mainResponsibility: "Chien ga",
      startDate: "2024-08",
      endDate: "2024-08",
    },
  ]);

  function handleEducationsChange(newEducations) {
    setEducations(newEducations);
  }

  function handleChange(e) {
    const newPersonalDetails = {
      ...personalDetails,
      [e.target.name]: e.target.value,
    };
    setPersonalDetails(newPersonalDetails);
  }

  return (
    <>
      <div className="sectionField">
        <PersonalForm
          personalDetails={personalDetails}
          onChange={handleChange}
        />
        <EducationField
          educations={educations}
          handleEducationsChange={handleEducationsChange}
        />
        <WorkField works={works} setWorks={setWorks} />
      </div>

      <Resume personalDetails={personalDetails} educations={educations} />
    </>
  );
}

export default App;
