import AppState from '../store/AppProvider';
import '../styles/app.css';
import Routes from './RoutesApp';
import ButtonUp from './others/ButtonUp.jsx';

function App() {
    return (
        <AppState>
            <Routes />
            <ButtonUp /> 
        </AppState>
    );
};
export default App;
