export default function AddressForm() {
  return (
    <>
      <label htmlFor="street">Street</label>
      <input required name="street" type="text" />
      <label htmlFor="city">City</label>
      <input required name="city" type="text" />
      <label htmlFor="state">State</label>
      <input required name="state" type="text" />
      <label htmlFor="zip">Zip</label>
      <input required name="zip" type="text" />
    </>
  );
}
