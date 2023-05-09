import MoviesSlider from '../MoviesSlider'

import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props

  const actionList = moviesList.filter(
    eachMoviea => eachMoviea.categoryId === 'ACTION',
  )

  const comedyList = moviesList.filter(
    eachOne => eachOne.categoryId === 'COMEDY',
  )
  return (
    <div className="prime-app">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="prime-img"
      />
      <div className="movies-container">
        <h1 className="action-heading">Action Movies</h1>
        <MoviesSlider eachMovie={actionList} />

        <h1 className="comedy-heading">Comedy Movies</h1>
        <MoviesSlider eachMovie={comedyList} />
      </div>
    </div>
  )
}

export default PrimeVideo
