import { Button } from "antd";
import { useCallback } from "react"
import { useTheme } from "next-themes";
import styles from '../styles/ThemeSwitcher.module.css';
import MoonIcon from '../assets/icons/moon.svg';
import SunIcon from '../assets/icons/sun.svg';

const ThemeSwitcher = () => {
  const { resolvedTheme, setTheme } = useTheme();

	const toggleTheme = useCallback(() => {
		setTheme(resolvedTheme === 'light' ? 'dark' : 'light')
	}, [resolvedTheme, setTheme]);

  return (
    <Button className={styles.btnSwitcher} onClick={toggleTheme} type='link'>
      { resolvedTheme === 'light' ? 
        <MoonIcon style={{width: '32px'}} /> 
        : 
        <SunIcon style={{width: '32px'}} /> 
      }
    </Button>
  )
}

export default ThemeSwitcher;