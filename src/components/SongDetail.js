import React from 'react'
import { connect } from 'react-redux'

class SongDetail extends React.Component {
  renderContent() {
    if (this.props.song) {
      return (
        <div>
        <div>{ this.props.song.title }</div>
        <div>{ this.props.song.duration }</div>
        <div>{ this.props.song.band }</div>
      </div>
      )
    } else {
      return (
        <div>No song selected</div>
      )
    }
  }
  render() {
    return (
      <div className="song-list">
        { this.renderContent() }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    song: state.selectedSong
  }
}
export default connect(mapStateToProps)(SongDetail)