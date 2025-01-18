import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { toggleThemeMode } from '../store/themeSlice';
import { useEffect } from 'react';

const useThemeMode = () => {
  const dispatch = useDispatch();
  const mode = useSelector((state: RootState) => state.themeMode.mode);

  const toggleMode = () => {
    dispatch(toggleThemeMode());
  };

  // Update the data-theme attribute in body when mode changes
  useEffect(() => {
    // Set the data-theme attribute on body
    if (mode === 'dark') {
      document.body.setAttribute('data-theme', 'dark');
    } else {
      document.body.setAttribute('data-theme', 'light');
    }
  }, [mode]); // Run this effect whenever the mode changes

  return { mode, toggleMode };
};

export default useThemeMode;
