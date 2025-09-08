import { useThrottle } from './useThrottle';

const ThrottledButton = () => {
  const { handleThrottledAction } = useThrottle();
  const handleClick = () => console.log('I WAS CLICKED!!!!');

  const handleThrottledClick = () => {
    handleThrottledAction(handleClick);
  };

  return (
    <button type="button" onClick={handleThrottledClick}>
      Click me!
    </button>
  );
};

export default ThrottledButton;
