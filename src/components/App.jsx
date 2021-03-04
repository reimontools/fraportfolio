import AppState from '../store/AppProvider';
import '../styles/app.css';
import { RoutesApp as Routes, ButtonUp } from "../component";

const App = () => {
    return (
        <AppState>
            <Routes />
            <ButtonUp /> 
        </AppState>
    );
};
export default App;
