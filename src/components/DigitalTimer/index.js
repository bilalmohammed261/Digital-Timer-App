// Write your code here
import {Component} from 'react'
import './index.css'

class DigitalTimer extends Component {
  state = {
    isPlay: false,
    minutes: 25,
    seconds: 0,
    isDecrease: true,
    isIncrease: true,
  }

  componentDidMount() {
    this.timerID = setInterval(this.tick, 1000)
  }

  changeMode = () => {
    const {isPlay, isIncrease, isDecrease} = this.state
    this.setState({
      isPlay: !isPlay,
      isDecrease: !isDecrease,
      isIncrease: !isIncrease,
    })
  }

  resetMode = () => {
    const {isPlay, isIncrease, isDecrease} = this.state
    this.setState({
      isPlay: !isPlay,
      isDecrease: !isDecrease,
      isIncrease: !isIncrease,
      minutes: 25,
      seconds: 0,
    })
  }

  decrementMinutes = () => {
    const {minutes, isDecrease} = this.state
    if (isDecrease) {
      if (minutes !== 0) {
        this.setState({
          minutes: minutes - 1,
        })
      } else {
        this.setState({
          minutes: 0,
        })
      }
    }
  }

  incrementMinutes = () => {
    const {minutes, isIncrease} = this.state
    if (isIncrease) {
      this.setState({
        minutes: minutes + 1,
      })
    }
  }

  tick = () => {
    const {seconds, isPlay, minutes} = this.state
    if (isPlay && minutes !== 0) {
      if (seconds === 0) {
        this.setState({
          seconds: 59,
          minutes: minutes - 1,
        })
      } else {
        this.setState({
          seconds: seconds - 1,
        })
      }
    }
  }

  render() {
    const {isPlay, minutes, seconds} = this.state
    const secondsText = seconds < 10 ? `0${seconds}` : seconds
    const minutesText = minutes < 10 ? `0${minutes}` : minutes
    const imgUrl = isPlay
      ? 'https://assets.ccbp.in/frontend/react-js/pause-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/play-icon-img.png'
    const altValue = isPlay ? ' pause icon' : 'play icon'
    const btnText = isPlay ? 'Pause' : 'Start'
    const timerText = isPlay ? 'Running' : 'Paused'
    // console.log(isPlay)
    return (
      <div className="app-container">
        <h1 className="heading">Digital Timer</h1>
        <div className="timer-container">
          <p>
            {minutesText}:{secondsText}
          </p>
          <p>{timerText}</p>
        </div>
        <button type="button" onClick={this.changeMode}>
          <img src={imgUrl} alt={altValue} />
          {btnText}
        </button>
        <button type="button" onClick={this.resetMode}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
            alt="reset icon"
          />
          Reset
        </button>
        <div>
          <p>Set Timer limit</p>
          <button type="button" onClick={this.decrementMinutes}>
            -
          </button>
          <p>{minutes}</p>
          <button type="button" onClick={this.incrementMinutes}>
            +
          </button>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
