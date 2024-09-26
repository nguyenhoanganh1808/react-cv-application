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
        <EducationField />
      </div>

      <Resume personalDetails={personalDetails} />
    </>
  );
}

export default App;
