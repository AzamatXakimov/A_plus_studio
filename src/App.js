import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import "./styles/styles.scss"

export const App = () => {
    return <>
        <Routes>
            <Route path="/" element={<Home/>}/>
        </Routes>
    </>
}
