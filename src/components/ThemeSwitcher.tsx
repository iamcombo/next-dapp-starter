import Image from "next/image";
import { Button } from "antd";
import { useCallback } from "react"
import { useTheme } from "next-themes";
import MoonIcon from '../assets/icons/moon.svg';
import SunIcon from '../assets/icons/sun.svg';
import styles from '../styles/ThemeSwitcher.module.css';

const ThemeSwitcher = () => {
  const { resolvedTheme, setTheme } = useTheme();

	const toggleTheme = useCallback(() => {
		setTheme(resolvedTheme === 'light' ? 'dark' : 'light')
	}, [resolvedTheme, setTheme]);

  return (
    <Button className={styles.btnSwitcher} onClick={toggleTheme} type='link'>
      { resolvedTheme === 'light' ? 
        <MoonIcon style={{width: '20px'}} /> 
        : 
        <SunIcon style={{width: '20px'}} /> 
      }
    </Button>
  )
}

export default ThemeSwitcher;