import { Link } from 'react-router-dom'
import mailIcon from '../../Image/iconmail2.svg'
import phoneIcon from '../../Image/iconphone.svg'
import heroImage from '../../Image/sectionimg1.png'

import './Hero.css'


const CONTACT_ITEMS = [
	{
		id: 'mail',
		icon: mailIcon,
		label: 'mail@yandex.ru',
	},
	{
		id: 'phone',
		icon: phoneIcon,
		label: '+7 (919) 714-25-00',
	},
]

function Hero() {
	return (
		<section className='hero' id='home'>
			<div className='home-container hero__inner'>
				<div className='hero__content'>
					{/* <span className='hero__badge'>Аренда квартир 59</span> */}
					<h1>Аренда квартир в Березниках</h1>
					<p className='hero__subtitle'>На длительный срок или посуточно</p>
					<Link to='/allapart' className='hero__cta'>
						Смотреть варианты
					</Link>
				</div>
				<div className='hero__media'>
					<div className='hero__contact-panel'>
						<div className='hero__contact-items'>
							{CONTACT_ITEMS.map(({ id, icon, label }) => (
								<div className='hero__contact-item' key={id}>
									<img src={icon} alt='' aria-hidden='true' />
									<span>{label}</span>
								</div>
							))}
						</div>
						<button type='button' className='hero__contact-btn'>
							Заказать звонок
						</button>
					</div>
					<div className='hero__image-wrapper'>
						<img src={heroImage} alt='Уютная гостиная для аренды' />
					</div>
				</div>
			</div>
	
			
		</section>
	)
}
export default Hero








