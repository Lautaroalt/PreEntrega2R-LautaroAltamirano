import {NavBar} from './components/NavBar';
import {ItemListContainer} from './components/ItemListContainer';
import "./App.css";


function App() {
    return (
        <>
            <NavBar/>
            <ItemListContainer gretting="Mi primer e-commerce con React"/>
        </>
    );
}

export default App;