// Write your code here
import {Component} from 'react'
import './index.css'

class DigitalTimer extends Component {
  state = {
    isPlay: false,
  }

  render() {
    const {isPlay} = this.state
    const imgUrl = isPlay
      ? 'https://assets.ccbp.in/frontend/react-js/pause-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/play-icon-img.png'
    const altValue = isPlay ? ' pause icon' : 'play icon'
    const btnText = isPlay ? 'Pause' : 'Start'
    return (
      <div className="app-container">
        <h1 className="heading">Digital Timer</h1>
        <div className="timer-container">
          <p>25:00</p>
          <p>Paused</p>
        </div>
        <button type="button">
          <img src={imgUrl} alt={altValue} />
          {btnText}
        </button>
        <button type="button">
          <img
            src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
            alt="reset icon"
          />
          Reset
        </button>
      </div>
    )
  }
}

export default DigitalTimer
