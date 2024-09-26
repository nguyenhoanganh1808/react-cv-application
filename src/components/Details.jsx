export default function Details({ title, description, startDate, endDate }) {
  return (
    <div>
      <b>{title}</b>
      <p>{description}</p>
      <p>{startDate}</p>
      <p>{endDate}</p>
    </div>
  );
}
