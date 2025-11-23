import card1Icon from '../../Image/sectioncard1.svg'
import card2Icon from '../../Image/sectioncard2.svg'
import card3Icon from '../../Image/sectioncard3.svg'
import card4Icon from '../../Image/sectioncard4.svg'
import About from '../../pages/About/About'
import Apart from '../../pages/Apart/Apart'
import Contact from '../../pages/Contact/Contact'
import Otzyv from '../../pages/Otzyv/Otzyv'
import Soobsh from '../../pages/Soobsh/Soobsh'
import FeatureCard from './FeatureCard'
import './Features.css'
const FEATURES = [
	{
		id: 'docs',
		icon: card1Icon,
		title: 'Заключаем договоры, предоставляем отчётные документы',
	},
	{
		id: 'payments',
		icon: card2Icon,
		title: 'Наличный и безналичный расчёт',
	},
	{
		id: 'booking',
		icon: card3Icon,
		title: 'Бронирование и заселение круглосуточно',
	},
	{
		id: 'privacy',
		icon: card4Icon,
		title: 'Полная конфиденциальность',
	},
]

function Features() {
	return (
		<section className='features'>
			<div className='home-container'>
				<div className='features__grid'>
					{FEATURES.map(feature => (
						<FeatureCard key={feature.id} {...feature} />
					))}
				</div>
			</div>
			<Apart />
			<About />
			<Contact />
			<Otzyv />
			<Soobsh />
		</section>
	)
}

export default Features



