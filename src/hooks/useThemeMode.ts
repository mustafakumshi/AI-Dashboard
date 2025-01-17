import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { toggleThemeMode } from '../store/themeSlice';

const useThemeMode = () => {
  const dispatch = useDispatch();
  const mode = useSelector((state: RootState) => state.themeMode.mode);

  const toggleMode = () => {
    dispatch(toggleThemeMode());
  };

  return { mode, toggleMode };
};

export default useThemeMode;
