import FormOverviewContainer from "./FormOverviewContainer";

export default function EducationForm({
  education,
  isActive,
  onShow,
  onSubmit,

  onDelete,
}) {
  const { school, degree, startDate, endDate } = education;
  if (isActive) {
    return (
      <form onSubmit={onSubmit} id="education" action="">
        <div>
          <label htmlFor="school">School</label>
          <input defaultValue={school} type="text" id="school" name="school" />
        </div>
        <div>
          <label htmlFor="degree">Degree</label>
          <input defaultValue={degree} type="text" id="degree" name="degree" />
        </div>
        <div>
          <label htmlFor="startDate">Start Date</label>
          <input
            defaultValue={startDate}
            type="month"
            id="startDate"
            name="startDate"
          />
        </div>
        <div>
          <label htmlFor="endDate">End Date</label>
          <input
            defaultValue={endDate}
            type="month"
            id="endDate"
            name="endDate"
          />
        </div>

        <div>
          <button onClick={onDelete}>Delete</button>
          <button type="submit">Submit</button>
        </div>
      </form>
    );
  }
  return (
    <>
      <div onClick={onShow} className="education-inactive">
        <FormOverviewContainer title={school} description={degree} />
      </div>
    </>
  );
}
