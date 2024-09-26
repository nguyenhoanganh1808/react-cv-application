import "../styles/resume.css";
import Details from "./Details";

export default function Resume({ personalDetails, educations }) {
  const { name, email, phone } = personalDetails;

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
      <div>
        <h2 className="sectionHeader">EDUCATION</h2>
        {educations.map((education) => {
          return (
            <Details
              key={education.id}
              title={education.school}
              description={education.degree}
              // startDate={education.startDate}
              // endDate={education.endDate}
            />
          );
        })}
      </div>
    </div>
  );
}
