import React from 'react';
import Switch from '@mui/material/Switch';

interface ThemeSwitchProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const ThemeSwitch: React.FC<ThemeSwitchProps> = ({ darkMode, toggleDarkMode }) => {
  return (
    <Switch checked={darkMode} onChange={toggleDarkMode} />
  );
};

export default ThemeSwitch;
