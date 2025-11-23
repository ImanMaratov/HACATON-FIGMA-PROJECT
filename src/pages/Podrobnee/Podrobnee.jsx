import { Link, useParams } from 'react-router-dom'
import Amenities from '../../components/Podrobnee/Amenities'
import ApartmentDetails from '../../components/Podrobnee/ApartmentDetails'
import ImageGallery from '../../components/Podrobnee/ImageGallery'
import part1 from '../../Image/part.png'
import part2 from '../../Image/part2.png'
import part3 from '../../Image/part3.png'
import part4 from '../../Image/part4.png'
import './Podrobnee.css'
import About from '../../pages/About/About'
import Contact from '../../pages/Contact/Contact'
import Otzyv from "../Otzyv/Otzyv"
import Soobsh from '../Soobsh/Soobsh'
const APARTMENTS_DATA = {
	'apt-1': {
		id: 'apt-1',
		title: 'Однокомнатная квартира',
		shortTitle: '1-к квартира, 31 м², 1/5 эт.',
		description:
			'Сдам 1- квартиру с балконом есть всё необходимое для проживания выписываю ДОКУМЕНТЫ ЧЕК ОНЛАЙН 25+звонить смс не читаю',
		price: '1200',
		address: 'Березники, ул. Юбилейная 108',
		mainImage: part1,
		images: [part2, part3, part4],
	},
	'apt-2': {
		id: 'apt-2',
		title: 'Трёхкомнатная квартира',
		shortTitle: '3-к квартира, 65 м², 2/5 эт.',
		description:
			'Сдам 3-комнатную квартиру с балконом, есть всё необходимое для проживания. Выписываем документы строгой отчётности.',
		price: '1300',
		address: 'Березники, ул. Гагарина 89',
		mainImage: part2,
		images: [part1, part3, part4],
	},
	'apt-3': {
		id: 'apt-3',
		title: 'Двухкомнатная квартира',
		shortTitle: '2-к квартира, 48 м², 3/5 эт.',
		description:
			'Сдам 2-комнатную квартиру: есть балкон, всё необходимое для комфортного проживания, холодильник, микроволновая печь.',
		price: '1700',
		address: 'Березники, ул. Власова 14',
		mainImage: part3,
		images: [part1, part2, part4],
	},
	'apt-4': {
		id: 'apt-4',
		title: 'Пятикомнатная квартира',
		shortTitle: '5-к квартира, 120 м², 1/5 эт.',
		description:
			'Сдам 5-комнатную квартиру для гостей города. В квартире имеется всё необходимое для проживания на сутки и дольше.',
		price: '4100',
		address: 'Березники, ул. Шмидта 10',
		mainImage: part4,
		images: [part1, part2, part3],
	},
}

function Podrobnee() {
	const { id } = useParams()
	const apartment = APARTMENTS_DATA[id || 'apt-1'] || APARTMENTS_DATA['apt-1']

	const handleBook = () => {
		// Здесь будет логика бронирования
		alert('Функция бронирования будет реализована')
	}

	return (
		<section className='podrobnee-page'>
			<div className='podrobnee-page__container'>
				<h1 className='podrobnee-page__header-title'>{apartment.shortTitle}</h1>

				<div className='podrobnee-page__content'>
					<div className='podrobnee-page__gallery'>
						<ImageGallery
							images={apartment.images}
							mainImage={apartment.mainImage}
						/>
					</div>

					<div className='podrobnee-page__details'>
						<ApartmentDetails
							title={apartment.title}
							description={apartment.description}
							price={apartment.price}
							address={apartment.address}
							onBook={handleBook}
						/>
					</div>
				</div>

				<Amenities />

				<div className='podrobnee-page__footer'>
					<p className='podrobnee-page__footer-text'>
						Все сделано с любовью для Вас!
					</p>
					<Link to='/allapart' className='podrobnee-page__footer-button'>
						Смотреть все квартиры
					</Link>
				</div>
			</div>
			<About />
			<Contact />
			<Otzyv/>
			<Soobsh/>
		</section>
	)
}

export default Podrobnee
