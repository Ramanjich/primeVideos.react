import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import MovieItem from '../MovieItem'

const MoviesSlider = props => {
  const {eachMovie} = props

  const settings = {
    dots: false,
    slidesToScroll: 1,
    slidesToShow: 4,
  }

  return (
    <>
      <Slider {...settings}>
        {eachMovie.map(eachList => (
          <MovieItem eachList={eachList} key={eachList.id} />
        ))}
      </Slider>
    </>
  )
}
export default MoviesSlider
