import { Link } from 'react-router-dom'
import ApartCard from '../../components/Apart/ApartCard'
import part1 from '../../Image/part.png'
import part2 from '../../Image/part2.png'
import part3 from '../../Image/part3.png'
import part4 from '../../Image/part4.png'
import './Apart.css'

const APARTMENTS = [
	{
		id: 'apt-1',
		title: 'Однокомнатная квартира',
		price: '1500',
		address: 'Березники, ул. Юбилейная 108',
		image:
			part1,
		isNew: false,
	},
	{
		id: 'apt-2',
		title: 'Трёхкомнатная квартира',
		price: '1300',
		address: 'Березники, ул. Гагарина 89',
		image:
			part2,
		isNew: false,
	},
	{
		id: 'apt-3',
		title: 'Двухкомнатная квартира',
		price: '1700',
		address: 'Березники, ул. Власова 14',
		image:
			part3,
		isNew: true,
	},
	{
		id: 'apt-4',
		title: 'Пятикомнатная квартира',
		price: '4100',
		address: 'Березники, ул. Шмидта 10',
		image:
			part4,
		isNew: false,
	},
]

function Apart() {
	return (
		<section className='apart-page' id='apart'>
			<div className='apart-page__container'>
				<header className='apart-page__header'>
					<h1 className='apart-page__title'>Наши квартиры</h1>
				</header>
				<div className='apart-page__grid'>
					{APARTMENTS.map(apartment => (
						<ApartCard key={apartment.id} {...apartment} />
					))}
				</div>
				<div className='apart-page__cta-wrapper'>
					<Link to='/allapart' className='apart-page__cta-button'>
						Смотреть все квартиры
					</Link>
				</div>
			</div>
		</section>
	)
}

export default Apart

