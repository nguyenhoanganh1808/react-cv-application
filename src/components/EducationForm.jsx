export default function EducationForm({
  education,
  isActive,
  onShow,
  onChange,
}) {
  const { school, degree, startDate, endDate } = education;
  if (isActive) {
    return (
      <form id="education" action="">
        <div>
          <label htmlFor="school">School</label>
          <input
            onChange={onChange}
            value={school}
            type="text"
            id="school"
            name="school"
          />
        </div>
        <div>
          <label htmlFor="degree">Degree</label>
          <input
            onChange={onChange}
            value={degree}
            type="text"
            id="degree"
            name="degree"
          />
        </div>
        <div>
          <label htmlFor="startDate">Start Date</label>
          <input
            value={startDate}
            type="month"
            id="startDate"
            name="startDate"
            onChange={onChange}
          />
        </div>
        <div>
          <label htmlFor="endDate">End Date</label>
          <input
            onChange={onChange}
            value={endDate}
            type="month"
            id="endDate"
            name="endDate"
          />
        </div>
      </form>
    );
  }
  return (
    <>
      <div onClick={onShow} className="education-inactive">
        UIT, software, Ho Chi MInh
      </div>
    </>
  );
}
