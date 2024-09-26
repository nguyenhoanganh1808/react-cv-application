import "../styles/form.css";

export default function Form({ personalDetails, onChange }) {
  const { name, email, phone } = personalDetails;
  return (
    <>
      <h2>Personal Details</h2>
      <form onChange={onChange} id="personalDetails" action="">
        <div>
          <label htmlFor="name">Name</label>
          <input value={name} type="text" id="name" name="name" />
        </div>

        <div>
          <label htmlFor="email">Email address</label>
          <input value={email} type="email" id="email" name="email" />
        </div>

        <div>
          <label htmlFor="phone">Phone number</label>
          <input value={phone} type="tel" id="phone" name="phone" />
        </div>
      </form>
    </>
  );
}
