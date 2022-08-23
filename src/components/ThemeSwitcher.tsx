import { Button } from "antd";
import { useCallback, useEffect, useState } from "react"
import { useTheme } from "next-themes";
import styles from '../styles/ThemeSwitcher.module.css';
import MoonIcon from '../assets/icons/moon.svg';
import SunIcon from '../assets/icons/sun.svg';

const ThemeSwitcher = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);

	const toggleTheme = useCallback(() => {
		setTheme(resolvedTheme === 'light' ? 'dark' : 'light')
	}, [resolvedTheme, setTheme]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if(!mounted) return null;
  return (
    <Button className={styles.btnSwitcher} onClick={toggleTheme} type='link'>
      { resolvedTheme == 'light' ? 
        <MoonIcon style={{width: '32px'}} /> 
        : 
        <SunIcon style={{width: '32px'}} /> 
      }
    </Button>
  )
}

export default ThemeSwitcher;