
import './FeatureCard.css'

function FeatureCard({ icon, title, description }) {
	return (
		<article className='feature-card'>
			<div className='feature-card__icon'>
				<img src={icon} alt='' aria-hidden='true' />
			</div>
			<h3>{title}</h3>
			<p>{description}</p>
		
		</article>
	)
}

export default FeatureCard







