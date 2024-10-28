'use client';

import { useTheme } from '@app/ThemeProvider';
import { Switch } from '@shared/ui/Switch';
import { Moon, Sun } from 'lucide-react';

const ThemeSwitch = () => {
  const { theme, switchTheme } = useTheme();

  return (
    <Switch onClick={switchTheme} checked={theme === 'dark'}>
      {theme === 'dark' ? (
        <Moon className="w-4 h-4 text-yellow-400 fill-yellow-300" />
      ) : (
        <Sun className="w-4 h-4 text-yellow-400 fill-yellow-300" />
      )}
    </Switch>
  );
};

export default ThemeSwitch;
