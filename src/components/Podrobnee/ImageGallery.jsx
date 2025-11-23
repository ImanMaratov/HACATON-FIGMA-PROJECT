import { useState } from 'react'
import './ImageGallery.css'

function ImageGallery({ images, mainImage }) {
	const [currentImage, setCurrentImage] = useState(mainImage || images[0])
	const [currentIndex, setCurrentIndex] = useState(0)

	const allImages = mainImage ? [mainImage, ...images] : images

	const handleThumbnailClick = (image, index) => {
		setCurrentImage(image)
		setCurrentIndex(index)
	}

	const handlePrev = () => {
		const newIndex = currentIndex > 0 ? currentIndex - 1 : allImages.length - 1
		setCurrentIndex(newIndex)
		setCurrentImage(allImages[newIndex])
	}

	const handleNext = () => {
		const newIndex = currentIndex < allImages.length - 1 ? currentIndex + 1 : 0
		setCurrentIndex(newIndex)
		setCurrentImage(allImages[newIndex])
	}

	return (
		<div className='image-gallery'>
			<div className='image-gallery__main'>
				<img src={currentImage} alt='Квартира' className='image-gallery__main-img' />
			</div>
			<div className='image-gallery__thumbnails'>
				<button
					type='button'
					className='image-gallery__nav image-gallery__nav--prev'
					onClick={handlePrev}
					aria-label='Предыдущее изображение'
				>
					<svg
						width='24'
						height='24'
						viewBox='0 0 24 24'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M15 18L9 12L15 6'
							stroke='#1f3c90'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
					</svg>
				</button>
				<div className='image-gallery__thumbnails-list'>
					{allImages.map((image, index) => (
						<button
							key={index}
							type='button'
							className={`image-gallery__thumbnail ${
								index === currentIndex ? 'image-gallery__thumbnail--active' : ''
							}`}
							onClick={() => handleThumbnailClick(image, index)}
						>
							<img src={image} alt={`Изображение ${index + 1}`} />
						</button>
					))}
				</div>
				<button
					type='button'
					className='image-gallery__nav image-gallery__nav--next'
					onClick={handleNext}
					aria-label='Следующее изображение'
				>
					<svg
						width='24'
						height='24'
						viewBox='0 0 24 24'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M9 18L15 12L9 6'
							stroke='#1f3c90'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
					</svg>
				</button>
			</div>
		</div>
	)
}

export default ImageGallery








