import { createBrowserRouter } from 'react-router-dom'
import Layout from './layout/Layout'
import About from './pages/About/About'
import Apart from './pages/Apart/Apart'
import Contact from './pages/Contact/Contact'
import Home from './pages/Home/Home'
import AllApart from './pages/AllApart/AllApart'
import Podrobnee from './pages/Podrobnee/Podrobnee'

export const myRouter = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/about',
				element: <About />,
			},
			{
				path: '/apart',
				element: <Apart />,
			},
			{
				path: '/contact',
				element: <Contact />,
			},
			{
				path: '/allapart',
				element: <AllApart/>,
			},
			{
				path: '/podrobnee/:id',
				element: <Podrobnee />,
			},
		],
	},
])
