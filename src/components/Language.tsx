import { useShallow } from 'zustand/react/shallow';
import useConfigStore from '../store/useConfigureStore';

const Language = () => {
    // const { lang, setLang } = useConfigStore();
    // const lang = useConfigStore(state => state.lang);
    // const setLang = useConfigStore(state => state.setLang);
    const { lang, setLang } = useConfigStore(
        useShallow(state => ({
            lang: state.lang,
            setLang: state.setLang,
        }))
    );
    console.log('lang render', lang);
    return (
        <div>
            <div>{lang}</div>
            <button
                onClick={() => setLang(lang === 'zh-CN' ? 'en-US' : 'zh-CN')}>
                切换语言
            </button>
        </div>
    );
};

export default Language;
