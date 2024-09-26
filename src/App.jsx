import { useState } from "react";
import "./App.css";
import Form from "./components/PersonalForm";
import Resume from "./components/Resume";

import EducationField from "./components/EducationField";

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
      startDate: "08-2024",
      endDate: new Date(2024, 8),
    },
    {
      id: 1,
      school: "HCMUS",
      degree: "Software Engineer",
      startDate: new Date(2024, 8),
      endDate: new Date(2024, 8),
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
      <div>
        <Form personalDetails={personalDetails} onChange={handleChange} />
        <EducationField
          educations={educations}
          handleEducationsChange={handleEducationsChange}
        />
      </div>

      <Resume personalDetails={personalDetails} educations={educations} />
    </>
  );
}

export default App;
