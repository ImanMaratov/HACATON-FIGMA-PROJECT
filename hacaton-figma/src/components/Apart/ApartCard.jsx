import { Link } from 'react-router-dom'
import './ApartCard.css'

function ApartCard({ id, title, price, address, image, isNew = false }) {
	return (
		<article className='apart-card'>
			{isNew && <span className='apart-card__badge'>Новая квартира</span>}
			<div className='apart-card__image-wrapper'>
				<img src={image} alt={title} className='apart-card__image' />
				<div className='apart-card__overlay'></div>
			</div>
			<div className='apart-card__content'>
				<h3 className='apart-card__title'>{title}</h3>
				<div className='apart-card__price'>
					Сутки: <span className='apart-card__price-value'>{price} Р</span>
				</div>
				<div className='apart-card__address'>
					<svg
						className='apart-card__pin'
						width='16'
						height='16'
						viewBox='0 0 16 16'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M8 14.6667C8 14.6667 13.3333 9.33333 13.3333 6C13.3333 3.05448 10.9455 0.666672 8 0.666672C5.05448 0.666672 2.66667 3.05448 2.66667 6C2.66667 9.33333 8 14.6667 8 14.6667Z'
							fill='#FF0000'
						/>
						<circle cx='8' cy='6' r='2' fill='white' />
					</svg>
					<span>{address}</span>
				</div>
				<Link to={`/podrobnee/${id}`} className='apart-card__button'>
					Подробнее
				</Link>
			</div>
		</article>
	)
}

export default ApartCard
