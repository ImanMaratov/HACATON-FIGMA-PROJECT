import './Amenities.css'

const AMENITIES_LEFT = [
	'Холодильник',
	'Стиральная машина',
	'СВЧ',
	'Телевизор плазма',
	'Цифровое телевидение',
]

const AMENITIES_RIGHT = ['Сушка', 'Балкон', 'Домофон', 'Wi-fi', 'Вся посуда']

const ADDITIONAL_FEATURES = [
	'Два комплекта полотенец',
	'Всегда качественное постельное белье',
	'Большой, комфортный раздвижной диван',
	'Спальное место 1600х2000 (1 спальное место, размещение до 2-х человек, возможно докомплектация раскладушкой или большим надувным матрацем)',
]

function Amenities() {
	return (
		<div className='amenities'>
			<h3 className='amenities__title'>Оснащение:</h3>
			<div className='amenities__grid'>
				<div className='amenities__column'>
					{AMENITIES_LEFT.map((item, index) => (
						<div key={index} className='amenities__item'>
							<span className='amenities__bullet'>•</span>
							<span>{item}</span>
						</div>
					))}
				</div>
				<div className='amenities__column'>
					{AMENITIES_RIGHT.map((item, index) => (
						<div key={index} className='amenities__item'>
							<span className='amenities__bullet'>•</span>
							<span>{item}</span>
						</div>
					))}
				</div>
			</div>
			<div className='amenities__additional'>
				{ADDITIONAL_FEATURES.map((feature, index) => (
					<div key={index} className='amenities__item'>
						<span className='amenities__bullet'>•</span>
						<span>{feature}</span>
					</div>
				))}
			</div>
		</div>
	)
}

export default Amenities








