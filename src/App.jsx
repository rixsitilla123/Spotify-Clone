import Dashboard from './pages/Dashboard/Dashboard'
import Login from './pages/Login/Login'
import './App.css'

function App() {
	const code = new URLSearchParams(window.location.search).get('code')
	return code ? <Dashboard code={code} /> : <Login />
}

export default App