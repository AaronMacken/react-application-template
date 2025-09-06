import { ThemeProvider } from '@context';

import Sandbox from '@components/Sandbox';

export default function Application() {
  return (
    <ThemeProvider initialTheme="dark">
      <Sandbox />
    </ThemeProvider>
  );
}
