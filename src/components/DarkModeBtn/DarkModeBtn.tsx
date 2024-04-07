import './DarkModeBtn.scss';

import { Moon, Sun } from 'react-feather';

interface DarkModeBtnProps {
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
  isDark: boolean;
}

function DarkModeBtn({ setIsDark, isDark }: DarkModeBtnProps) {
  return (
    <button
      type="button"
      className={isDark ? 'modeBtn modeBtn--dark' : 'modeBtn modeBtn--light'}
      onClick={() => {
        setIsDark(!isDark);
      }}
    >
      {isDark ? <Sun /> : <Moon />}
    </button>
  );
}

export default DarkModeBtn;