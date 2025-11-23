import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import iconMail from '../../Image/iconmail2.svg'
import iconPhone from '../../Image/iconphone.svg'
import logoImg from '../../Image/logo.svg'
import { useTheme } from '../../context/ThemeContext'
import './Header.css'

const NAV_LINKS = [
	{
		label: 'Главная',
		hash: '#home',
	},
	{
		label: 'Квартиры',
		hash: '#apart',
	},
	{
		label: 'Контакты',
		hash: '#contact',
	},
	{
		label: 'О нас',
		hash: '#about',
	},
]

function Header() {
	const location = useLocation()
	const navigate = useNavigate()
	const { theme, toggleTheme } = useTheme()
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const handleNavClick = (e, hash) => {
		e.preventDefault()
		setIsMenuOpen(false)

		if (location.pathname === '/') {
			const element = document.querySelector(hash)
			if (element) {
				element.scrollIntoView({ behavior: 'smooth' })
			}

			window.history.pushState(null, '', hash)
		} else {
			navigate(`/${hash}`, { replace: false })

			setTimeout(() => {
				const element = document.querySelector(hash)
				if (element) {
					element.scrollIntoView({ behavior: 'smooth' })
				}
			}, 100)
		}
	}

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen)
	}

	const closeMenu = () => {
		setIsMenuOpen(false)
	}

	return (
		<>
			<header className='site-header'>
				<div className='site-header__inner'>
					<button
						className='site-header__burger'
						onClick={toggleMenu}
						aria-label='Открыть меню'
					>
						<span></span>
						<span></span>
						<span></span>
					</button>
					<Link
						to='/'
						className='site-header__logo'
						aria-label='Аренда квартир 59'
					>
						<img src={logoImg} alt='' />
					</Link>
					<nav className='site-header__nav'>
						{NAV_LINKS.map(({ label, hash }) => (
							<a
								key={label}
								href={`/${hash}`}
								onClick={e => handleNavClick(e, hash)}
								className='site-header__link'
							>
								{label}
							</a>
						))}
					</nav>
					<div className='site-header__right'>
						<div className='site-header__mobile-icons'>
							<a
								href='tel:+79197142500'
								className='site-header__mobile-icon'
								aria-label='Позвонить'
							>
								<img src={iconPhone} alt='Телефон' />
							</a>
							<a
								href='mailto:mail@yandex.ru'
								className='site-header__mobile-icon'
								aria-label='Написать'
							>
								<img src={iconMail} alt='Email' />
							</a>
						</div>
						<Link to='/#contact' className='site-header__cta'>
							Заказать звонок
						</Link>
					</div>
				</div>
			</header>

			{/* Боковое меню */}
			<div
				className={`site-header__sidebar ${
					isMenuOpen ? 'site-header__sidebar--open' : ''
				}`}
				onClick={closeMenu}
			>
				<div
					className='site-header__sidebar-content'
					onClick={e => e.stopPropagation()}
				>
					<button
						className='site-header__sidebar-close'
						onClick={closeMenu}
						aria-label='Закрыть меню'
					>
						<svg
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M18 6L6 18M6 6L18 18'
								stroke='currentColor'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>
					</button>
					<nav className='site-header__sidebar-nav'>
						{NAV_LINKS.map(({ label, hash }) => (
							<a
								key={label}
								href={`/${hash}`}
								onClick={e => handleNavClick(e, hash)}
								className='site-header__sidebar-link'
							>
								{label}
							</a>
						))}
					</nav>
				</div>
			</div>
		</>
	)
}

export default Header
