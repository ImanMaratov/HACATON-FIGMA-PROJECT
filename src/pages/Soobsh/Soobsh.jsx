import kavych from '../../Image/kavych.svg'
import './Soobsh.css'
function Soobsh() {
	return (
		<div className='soobsh'>
			<div className='soobsh-card'>
				<h1>Напишите нам</h1>

				<input className='inputIma' placeholder='Имя' type='text' />
				<input className='inputEmailss' placeholder='Email' type='email' />
				<textarea
					className='inputTextt'
					placeholder='Ваше сообщение'
				></textarea>
				<button className='soobsh-btn'>Отправить</button>
			</div>
			<div className='soobsh-text'>
				<img src={kavych} alt='' />
				<p>
					Дорогой гость, если у тебя есть какие-то пожелания или притензии{' '}
					<br />
					по улучшению качества обслуживания или просто хочешь оставить свой{' '}
					<br /> комментарий, то заполни форму. Мы обязательно ответим тебе,{' '}
					<br />
					или опубликуем его на нашем сайте.
				</p>
				<div className='director'>
					<h4>Татьяна Вячеславовна</h4>
					<p>Директор гостиницы</p>
				</div>
			</div>
		</div>
	)
}

export default Soobsh
