import formatDate from "../utils/formatDate";

export default function Details({ title, description, startDate, endDate }) {
  const formatStartDate = startDate && formatDate(startDate);
  const formatEndDate = endDate && formatDate(endDate);
  return (
    <div className="details">
      <div>
        <b>{title}</b>
        <p>{description}</p>
      </div>
      <div className="date">
        <p>
          {formatStartDate} - {formatEndDate}
        </p>
      </div>
    </div>
  );
}
