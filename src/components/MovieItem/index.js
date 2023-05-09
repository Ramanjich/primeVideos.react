import Popup from 'reactjs-popup'
import {IoMdClose} from 'react-icons/io'
import ReactPlayer from 'react-player'
import './index.css'

const MovieItem = props => {
  const {eachList} = props
  const {thumbnailUrl, videoUrl} = eachList
  console.log(videoUrl)
  return (
    <Popup
      modal
      trigger={
        <img src={thumbnailUrl} alt="thumbnail" className="items-image" />
      }
    >
      {close => (
        <>
          <div className="popup-container">
            <button
              type="button"
              className="close-btn"
              onClick={() => close()}
              data-testid="closeButton"
            >
              <IoMdClose />
            </button>
            <div className="youtube-container">
              <ReactPlayer url={videoUrl} />
            </div>
          </div>
        </>
      )}
    </Popup>
  )
}

export default MovieItem
