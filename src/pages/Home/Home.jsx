import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Features from '../../components/Home/Features'
import Hero from '../../components/Home/Hero'
import './Home.css'

function Home() {
	const location = useLocation()

	useEffect(() => {
		// Обработка хеша в URL при загрузке страницы
		if (location.hash) {
			setTimeout(() => {
				const element = document.querySelector(location.hash)
				if (element) {
					element.scrollIntoView({ behavior: 'smooth' })
				}
			}, 100)
		}
	}, [location.hash])

	return (
		<main className='home-page'>
			<Hero />
			<Features />
		</main>
	)
}

export default Home
