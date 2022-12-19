import './App.scss'
import {Route, Routes} from 'react-router-dom'
import Layout from "./components/Layout/Layout";
import Home from "./containers/Home/Home";

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout/>}>
				<Route path='' element={<Home/>}/>
			</Route>
		</Routes>
	)
};

export default App;
