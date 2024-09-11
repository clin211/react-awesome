import { useShallow } from 'zustand/react/shallow';
import useConfigureStore from '../store/useConfigureStore';

const Theme = () => {
    // const { theme, setTheme } = useConfigureStore();
    // const theme = useConfigureStore(state => state.theme);
    // const setTheme = useConfigureStore(state => state.setTheme);
    const { theme, setTheme } = useConfigureStore(
        useShallow(state => ({
            theme: state.theme,
            setTheme: state.setTheme,
        }))
    );
    console.log('theme render', theme);

    return (
        <div>
            <div>{theme}</div>
            <button
                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
                切换主题
            </button>
        </div>
    );
};

export default Theme;
