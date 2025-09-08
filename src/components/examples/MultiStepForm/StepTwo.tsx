import FormWrapper from './FormWrapper';

type AddressFields = {
  street: string;
  city: string;
  state: string;
  zip: string;
};

type AddressFormProps = AddressFields & {
  onUpdateField: (fields: Partial<AddressFields>) => void;
};

const StepTwo = ({
  street,
  city,
  state,
  zip,
  onUpdateField
}: AddressFormProps) => {
  return (
    <FormWrapper title="Address Info">
      <input
        required
        type="text"
        placeholder="street"
        value={street}
        onChange={(e) => onUpdateField({ street: e.target.value })}
      />
      <input
        required
        type="text"
        placeholder="city"
        value={city}
        onChange={(e) => onUpdateField({ city: e.target.value })}
      />
      <input
        required
        type="text"
        placeholder="state"
        value={state}
        onChange={(e) => onUpdateField({ state: e.target.value })}
      />
      <input
        required
        type="text"
        placeholder="zip"
        value={zip}
        onChange={(e) => onUpdateField({ zip: e.target.value })}
      />
    </FormWrapper>
  );
};

export default StepTwo;
