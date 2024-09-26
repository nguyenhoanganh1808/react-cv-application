import FormOverviewContainer from "./FormOverviewContainer";

export default function WorkForm({
  work,
  isActive,
  onShow,
  onSubmit,
  onDelete,
}) {
  const { company, position, startDate, endDate } = work;
  if (isActive) {
    return (
      <form onSubmit={onSubmit} id="education" action="">
        <div>
          <label htmlFor="company">Company</label>
          <input
            defaultValue={company}
            type="text"
            id="company"
            name="company"
          />
        </div>
        <div>
          <label htmlFor="position">Position</label>
          <input
            defaultValue={position}
            type="text"
            id="position"
            name="position"
          />
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
        <FormOverviewContainer title={company} description={position} />
      </div>
    </>
  );
}
