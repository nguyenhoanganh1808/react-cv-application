import "../styles/resume.css";

export default function Resume({ personalDetails }) {
  const { name, email, phone } = personalDetails;
  console.log(personalDetails);

  return (
    <div className="resume-container">
      <h1 className="name">{name}</h1>
      <hr />
      <div className="personalDetailsContainer">
        <h2 className="sectionHeader">PERSONAL DETAILS</h2>
        <p>
          {email}, {phone}
        </p>
      </div>
    </div>
  );
}
