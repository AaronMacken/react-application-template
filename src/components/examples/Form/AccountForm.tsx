export default function AccountForm() {
  return (
    <div>
      <label htmlFor="email">Email</label>
      <input required name="email" type="email" />
      <label htmlFor="password">Password</label>
      <input required name="password" type="password" />
    </div>
  );
}
