import { Link } from 'react-router-dom'
import About from '../../pages/About/About'
import Contact from '../../pages/Contact/Contact'
import './AllApart.css'
import Otzyv from '../Otzyv/Otzyv'
import Soobsh from "../Soobsh/Soobsh"
const APARTMENTS = [
	{
		id: 'apt-1',
		title: 'Однокомнатная квартира',
		description:
			'Сдам 1-комнатную квартиру улучшенной планировки с лоджией, есть всё необходимое: спальные места, кровать и бытовая техника.',
		price: '1 200 ₽',
		period: 'за сутки',
		address: 'Березники, ул. Юбилейная 108',
		image:
			'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80',
	},
	{
		id: 'apt-2',
		title: 'Однокомнатная квартира',
		description:
			'Сдам 1-комнатную квартиру: есть всё необходимое для проживания, холодильник, микроволновая печь, отчётные документы выдаём.',
		price: '1 000 ₽',
		period: 'за сутки',
		address: 'Березники, ул. Юбилейная 108',
		image:
			'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80',
	},
	{
		id: 'apt-3',
		title: 'Однокомнатная квартира',
		description:
			'Сдам уютную квартиру с балконом, есть всё необходимое для проживания. Выписываем документы строгой отчётности.',
		price: '1 000 ₽',
		period: 'за сутки',
		address: 'Березники, ул. Юбилейная 108',
		image:
			'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80',
	},
	{
		id: 'apt-4',
		title: 'Однокомнатная квартира',
		description:
			'Сдам 1-комнатную квартиру с балконом. Есть всё необходимое для проживания. Документы, чек онлайн, круглосуточная поддержка.',
		price: '1 200 ₽',
		period: 'за сутки',
		address: 'Березники, ул. Юбилейная 108',
		image:
			'https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=800&q=80',
	},
	{
		id: 'apt-5',
		title: 'Двухкомнатная квартира',
		description:
			'Сдам 2-комнатную квартиру: есть балкон, всё необходимое для комфортного проживания, холодильник, микроволновая печь.',
		price: '1 500 ₽',
		period: 'за сутки',
		address: 'Березники, ул. Красноборова, 11',
		image:
			'https://images.unsplash.com/photo-1475856034135-5f03978a13d2?auto=format&fit=crop&w=800&q=80',
	},
	{
		id: 'apt-6',
		title: 'Трёхкомнатная квартира',
		description:
			'Сдам 3-комнатную квартиру гостям города и бригадам. Есть всё необходимое для проживания для 7 и более спальных мест.',
		price: '1 800 ₽',
		period: 'за сутки',
		address: 'Березники, ул. Свердлова, 134',
		image:
			'https://images.unsplash.com/photo-1472220625704-91e1462799b2?auto=format&fit=crop&w=800&q=80',
	},
	{
		id: 'apt-7',
		title: 'Трёхкомнатная квартира',
		description:
			'Сдам 3-комнатную квартиру для гостей города. В квартире имеется всё необходимое для проживания на сутки и дольше.',
		price: '1 800 ₽',
		period: 'за сутки',
		address: 'Березники, ул. Мира, 112',
		image:
			'https://images.unsplash.com/photo-1484100356142-db6ab6244067?auto=format&fit=crop&w=800&q=80',
	},
]

function ApartmentCard({
	id,
	image,
	title,
	description,
	price,
	period,
	address,
}) {
	return (
		<article className='apartment-card'>
			<div className='apartment-card__image'>
				<img src={image} alt={title} />
			</div>
			<div className='apartment-card__body'>
				<h3>{title}</h3>
				<p className='apartment-card__description'>{description}</p>
				<div className='apartment-card__info'>
					<span className='apartment-card__price'>{price}</span>
					<span className='apartment-card__period'>{period}</span>
				</div>
				<p className='apartment-card__location'>{address}</p>
				<Link to={`/podrobnee/${id}`} className='apartment-card__button'>
					Подробнее
				</Link>
			</div>
		</article>
	)
}

function AllApart() {
	return (
		<section className='allapart'>
			<div className='allapart__container'>
				<header className='allapart__header'>
					<h1>Наши квартиры</h1>
				</header>
				<div className='allapart__grid'>
					{APARTMENTS.map(apartment => (
						<ApartmentCard key={apartment.id} {...apartment} />
					))}
				</div>
			</div>
			<About />
			<Contact />
			<Otzyv/>
			<Soobsh/>
		</section>
	)
}

export default AllApart
