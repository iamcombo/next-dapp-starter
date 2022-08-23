import { Button } from "antd";
import { useCallback, useEffect, useState } from "react"
import { useTheme } from "next-themes";
import MoonIcon from '../assets/icons/moon.svg';
import SunIcon from '../assets/icons/sun.svg';

const styling: object = {
  position: 'fixed',
  zIndex: '1',
  bottom: '0',
  right: '0',
  margin: '2rem'
}

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
    <Button style={styling} onClick={toggleTheme} type='link'>
      { resolvedTheme == 'light' ? 
        <MoonIcon style={{width: '32px'}} /> 
        : 
        <SunIcon style={{width: '32px'}} /> 
      }
    </Button>
  )
}

export default ThemeSwitcher;