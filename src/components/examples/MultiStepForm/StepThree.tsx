import FormWrapper from './FormWrapper';

type LoginFields = {
  email: string;
  password: string;
};

type LoginFormProps = LoginFields & {
  onUpdateField: (fields: Partial<LoginFields>) => void;
};

const StepThree = ({ email, password, onUpdateField }: LoginFormProps) => {
  return (
    <FormWrapper title="Create Login Form">
      <input
        required
        type="text"
        placeholder="email"
        value={email}
        onChange={(e) => onUpdateField({ email: e.target.value })}
      />
      <input
        required
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => onUpdateField({ password: e.target.value })}
      />
    </FormWrapper>
  );
};

export default StepThree;
