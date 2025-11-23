import { useState } from 'react'
import './Otzyv.css'

function Otzyv() {
	const testimonials = [
		{
			title: 'Уютная квартира',
			text: 'Первый раз отдыхали в Березниках, времени было мало соответственно жильё искали заранее. Залог вносили с опасением, и очень рады что они были напрасными. Всё супер. Нам понравилось!',
			author: 'Екатерина Трушникова',
			city: 'г. Пермь',
			date: '2 января 2021',
			rating: 5,
		},
		{
			title: 'Клёвый вид на город',
			text: 'Хочу поблагодарить за квартиру на ул. Юбилейной, д. 108. Удобное месторасположение, совсем рядом с центром. Квартира уютная, соседей не слышно, мы прекрасно отдохнули. Все что нужно для приготовления еды есть.',
			author: 'Иван Огородников',
			city: 'г. Краснокамск',
			date: '15 сентября 2019',
			rating: 4,
		},
		{
			title: 'Место как в рекламе',
			text: 'Первый раз отдыхали в Березниках, времени было мало соответственно жильё искали заранее. Залог вносили с опасением, и очень рады что они были напрасными. Всё супер. Нам понравилось!',
			author: 'Анна Смирнова',
			city: 'г. Екатеринбург',
			date: '10 марта 2020',
			rating: 5,
		},
		{
			title: 'Отличная квартира',
			text: 'Первый раз отдыхали в Березниках, времени было мало соответственно жильё искали заранее. Залог вносили с опасением, и очень рады что они были напрасными. Всё супер. Нам понравилось!',
			author: 'Сергей К.',
			city: 'г. Казань',
			date: '8 июля 2020',
			rating: 5,
		},
		{
			title: 'Идеально для пары',
			text: 'Первый раз отдыхали в Березниках, времени было мало соответственно жильё искали заранее. Залог вносили с опасением, и очень рады что они были напрасными. Всё супер. Нам понравилось!',
			author: 'Мария Л.',
			city: 'г. Нижний Новгород',
			date: '22 мая 2021',
			rating: 5,
		},
		{
			title: 'Чудесный вид',
			text: 'Первый раз отдыхали в Березниках, времени было мало соответственно жильё искали заранее. Залог вносили с опасением, и очень рады что они были напрасными. Всё супер. Нам понравилось!',
			author: 'Пётр В.',
			city: 'г. Омск',
			date: '30 июня 2019',
			rating: 4,
		},
	]

	const [page, setPage] = useState(0)

	function goPrev() {
		if (page > 0) setPage(page - 1)
	}

	function goNext() {
		if (page < 2) setPage(page + 1)
	}

	const start = page * 2
	const current = testimonials.slice(start, start + 2)

	const renderStars = rating => {
		return (
			<div className='otzyv-stars'>
				{[...Array(5)].map((_, i) => (
					<svg
						key={i}
						width='16'
						height='16'
						viewBox='0 0 24 24'
						fill={i < rating ? '#fcac00' : 'none'}
						stroke={i < rating ? '#fcac00' : '#fcac00'}
						strokeWidth='1.5'
					>
						<path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z' />
					</svg>
				))}
			</div>
		)
	}

	return (
		<div className='otzyv-wrapper'>
			<div className='otzyv-container'>
				<h2 className='otzyv-title'>Отзывы клиентов</h2>
			
				<div className='otzyv-slider'>
					<button
						aria-label='prev'
						onClick={goPrev}
						className='otzyv-btn otzyv-prev'
					>
						‹
					</button>
					<div className='otzyv-cards'>
						{current.map((t, i) => (
							<article key={i} className='otzyv-card'>
								<div className='otzyv-card-header'>
									<h3 className='otzyv-card-title'>{t.title}</h3>
									{renderStars(t.rating)}
								</div>
								<p className='otzyv-text'>{t.text}</p>
								<div className='otzyv-card-footer'>
									<div className='otzyv-author-info'>
										<div className='otzyv-author'>{t.author}</div>
										<div className='otzyv-city'>{t.city}</div>
									</div>
									<div className='otzyv-date'>{t.date}</div>
								</div>
							</article>
						))}
					</div>

					<button onClick={goNext} className='otzyv-btn otzyv-next'>
						›
					</button>
				</div>

				<div className='otzyv-dots'>
					<div
						className={`otzyv-dot ${page === 0 ? 'active' : ''}`}
						onClick={() => setPage(0)}
					></div>

					<div
						className={`otzyv-dot ${page === 1 ? 'active' : ''}`}
						onClick={() => setPage(1)}
					></div>

					<div
						className={`otzyv-dot ${page === 2 ? 'active' : ''}`}
						onClick={() => setPage(2)}
					></div>
				</div>
			</div>
		</div>
	)
}

export default Otzyv
