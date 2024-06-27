import ClassnamesStyles from './components/ClassnamesStyles';
import ClassStyles from './components/ClassStyles';
import DynamicStyles from './components/DynamicStyles';
import EmotionStyledStyles from './components/EmotionStyledStyles';
import EmotionStyles from './components/EmotionStyles';
import InlineStyles from './components/InlineStyles';
import StyledComponentsStyles from './components/StyledComponentsStyles';

function App() {
    return (
        <div className="App">
            <InlineStyles />
            <DynamicStyles />
            <ClassStyles />
            <ClassnamesStyles />
            <StyledComponentsStyles />
            <EmotionStyles />
            <EmotionStyledStyles />
        </div>
    );
}

export default App;
