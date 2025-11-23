import React from 'react'
import instagramIcon from '../../Image/instagramm.svg'
import vkIcon from '../../Image/vkIcon.svg'
import './Contact.css'

export default function Contact() {
	return (
		<section className='contacts-container' id='contact'>
			<div className='contacts-wrapper'>
				<h2 className='contacts-title'>Контакты</h2>

				<div className='contacts-grid'>
					<div className='contact-info-section'>
						<div className='contact-list'>
							<div className='contact-item'>
								<div className='contact-icon'>
									<svg viewBox='0 0 24 24' fill='currentColor'>
										<path d='M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z' />
									</svg>
								</div>
								<p className='contact-text'>г.Бишкек ул.Турусбекова 109/1</p>
							</div>

							<div className='contact-item'>
								<div className='contact-icon'>
									<svg viewBox='0 0 24 24' fill='currentColor'>
										<path d='M20 4H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h16a2 2 0 0 0 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z' />
									</svg>
								</div>
								<p className='contact-text'>mail@yandex.ru</p>
							</div>

							<div className='contact-item'>
								<div className='contact-icon'>
									<svg viewBox='0 0 24 24' fill='currentColor'>
										<path d='M20.49 15.14c-1.26-.63-2.59-1.13-3.78-.69l-1.49.56a15.18 15.18 0 0 1-5.23-5.23l.56-1.49c.44-1.19-.06-2.52-.69-3.78L8.66 2.4c-.63-1.26-2.15-1.79-3.35-1.11A5.9 5.9 0 0 0 2 5.49c.17 3.65 1.75 7.6 4.54 10.39s6.74 4.37 10.39 4.54a5.9 5.9 0 0 0 4.2-3.31c.68-1.2.15-2.72-1.11-3.35l-1.53-.62z' />
									</svg>
								</div>
								<p className='contact-text'>+7 (919) 714-25-00</p>
							</div>
						</div>

						<div className='social-section'>
							<div className='social-item'>
								<div className='social-content'>
									<div className='social-icon instagram'>
										<img src={instagramIcon} alt='instagram' />
									</div>
									<span className='social-name'>arendakvartir59</span>
								</div>
								<button className='subscribe-btn'>Подписаться</button>
							</div>
							<div className='social-item'>
								<div className='social-content'>
									<div className='social-icon vk'>
										<img src={vkIcon} alt='vk' />
									</div>
									<span className='social-name'>arendakvartir59</span>
								</div>
								<button className='subscribe-btn'>Подписаться</button>
							</div>
						</div>
					</div>

					<div className='map-container'>
						<iframe
							src='https://yandex.ru/map-widget/v1/?um=constructor%3A370227bb3edb9d3c466ba880ca7adf8890da72bde40e92e97c1282ceed997185&amp;source=constructor'
							title='Berezniki map'
							loading='lazy'
							allowFullScreen
						/>
					</div>
				</div>
			</div>
		</section>
	)
}
