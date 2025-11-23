import { Link, useLocation, useNavigate } from 'react-router-dom'
import './Footer.css'
import logoImg from '../../Image/logo.svg'
import iconMail from '../../Image/iconmail2.svg'
import iconPhone from '../../Image/iconphone.svg'
import vkIcon from '../../Image/vkIcon.svg'
import instagramIcon from '../../Image/instagramm.svg'

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

function Footer() {
	const location = useLocation()
	const navigate = useNavigate()

	const handleNavClick = (e, hash) => {
		e.preventDefault()
		
		if (location.pathname === '/') {
			// Если уже на главной странице, просто скроллим к якорю
			const element = document.querySelector(hash)
			if (element) {
				element.scrollIntoView({ behavior: 'smooth' })
			}
			// Обновляем URL без перезагрузки страницы
			window.history.pushState(null, '', hash)
		} else {
			// Если не на главной, переходим на главную с якорем
			navigate(`/${hash}`, { replace: false })
			// После навигации ждем немного и скроллим
			setTimeout(() => {
				const element = document.querySelector(hash)
				if (element) {
					element.scrollIntoView({ behavior: 'smooth' })
				}
			}, 100)
		}
	}

	return (
		<footer className='footeri'>
			<div className='footeri__inner'>
				<div className='footeri__top'>
					<Link to='/' className='footeri__logo' aria-label='Аренда квартир 59'>
						<img src={logoImg} alt='Логотип' />
					</Link>
					
					<nav className='footeri__nav'>
						{NAV_LINKS.map(({ label, hash }) => {
							const isActive = location.pathname === '/' && window.location.hash === hash
							return (
								<a
									key={label}
									href={`/${hash}`}
									onClick={(e) => handleNavClick(e, hash)}
									className={`footeri__link ${isActive ? 'active' : ''}`}
								>
									{label}
								</a>
							)
						})}
					</nav>

					<div className='footeri__contacts'>
						<a href='mailto:mail@yandex.ru' className='footeri__contact-item'>
							<div className='footeri__icon'>
								<img src={iconMail} alt='Email' />
							</div>
							<span>mail@yandex.ru</span>
						</a>
						<a href='tel:+79197142500' className='footeri__contact-item'>
							<div className='footeri__icon'>
								<img src={iconPhone} alt='Телефон' />
							</div>
							<span>+7 (919) 714-25-00</span>
						</a>
					</div>

					<div className='footeri__social'>
						<a href='#' className='footeri__social-icon' aria-label='Telegram'>
							<svg width='20' height='20' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
								<path d='M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161l-1.86 8.756c-.138.626-.49.778-.994.484l-2.747-2.026-1.324 1.275c-.15.15-.276.276-.565.276l.198-2.805 5.084-4.595c.222-.196-.048-.305-.344-.113l-6.281 3.957-2.705-.844c-.59-.186-.604-.59.123-.875l10.562-4.069c.49-.178.92.114.758.677z' fill='white'/>
							</svg>
						</a>
						<a href='#' className='footeri__social-icon' aria-label='Facebook'>
							<svg width='20' height='20' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
								<path d='M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm3 8h-1.35c-.538 0-.65.221-.65.778V10h2l-.209 2H13v7h-3v-7H8v-2h2V7.692C10 6.042 10.842 5 13 5h2v3z' fill='white'/>
							</svg>
						</a>
						<a href='#' className='footeri__social-icon' aria-label='VKontakte'>
							<img src={vkIcon} alt='VK' />
						</a>
						<a href='#' className='footeri__social-icon' aria-label='Instagram'>
							<img src={instagramIcon} alt='Instagram' />
						</a>
					</div>
				</div>

				<div className='footeri__separator'></div>

				<div className='footeri__bottom'>
					<p className='footeri__copyright'>
						© Copyright 2021, «Домашняя гостиница»
					</p>
					<a href='#' className='footeri__agreement'>
						Пользовательское соглашение
					</a>
				</div>
			</div>
		</footer>
	)
}

export default Footer
