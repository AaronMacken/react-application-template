export default function UserForm() {
  return (
    <div>
      <label htmlFor="firstName">First Name</label>
      <input required name="firstName" type="text" />
      <label htmlFor="lastName">Last Name</label>
      <input required name="lastName" type="text" />
      <label htmlFor="age">Age</label>
      <input required name="age" type="text" />
    </div>
  );
}
