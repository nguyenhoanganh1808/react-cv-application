export default function FormOverviewContainer({ title, description }) {
  return (
    <>
      <b>{!title ? "Not add yet" : title} </b>
      <p>{description}</p>
    </>
  );
}
