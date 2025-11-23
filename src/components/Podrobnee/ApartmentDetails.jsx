import './ApartmentDetails.css'

function ApartmentDetails({ title, description, price, address, onBook }) {
	return (
		<div className='apartment-details'>
			<h2 className='apartment-details__title'>{title}</h2>
			<p className='apartment-details__description'>{description}</p>
			<div className='apartment-details__price'>
				<span className='apartment-details__price-value'>{price} Р</span>
				<span className='apartment-details__price-period'>за сутки</span>
			</div>
			<div className='apartment-details__address'>
				<svg
					className='apartment-details__pin'
					width='20'
					height='20'
					viewBox='0 0 20 20'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M10 18.3333C10 18.3333 16.6667 11.6667 16.6667 7.5C16.6667 3.8181 13.6819 0.833336 10 0.833336C6.3181 0.833336 3.33334 3.8181 3.33334 7.5C3.33334 11.6667 10 18.3333 10 18.3333Z'
						fill='#FF0000'
					/>
					<circle cx='10' cy='7.5' r='2.5' fill='white' />
				</svg>
				<span>{address}</span>
			</div>
			<button type='button' className='apartment-details__book-btn' onClick={onBook}>
				Забронировать
			</button>
		</div>
	)
}

export default ApartmentDetails









