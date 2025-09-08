import FormWrapper from './FormWrapper';

type UserData = {
  firstName: string;
  lastName: string;
  age: string;
};

type UserFormProps = UserData & {
  onUpdateField: (fields: Partial<UserData>) => void;
};

const StepOne = ({
  firstName,
  lastName,
  age,
  onUpdateField
}: UserFormProps) => {
  return (
    <FormWrapper title="User Details">
      <input
        required
        type="text"
        placeholder="first"
        value={firstName}
        onChange={(e) => onUpdateField({ firstName: e.target.value })}
      />
      <input
        required
        type="text"
        placeholder="last"
        value={lastName}
        onChange={(e) => onUpdateField({ lastName: e.target.value })}
      />
      <input
        required
        type="number"
        placeholder="age"
        value={age}
        onChange={(e) => onUpdateField({ age: e.target.value })}
      />
    </FormWrapper>
  );
};

export default StepOne;
