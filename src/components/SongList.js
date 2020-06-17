import React from 'react'
import { connect } from 'react-redux'

import { selectSong } from '../actions'

class SongList extends React.Component {
  hangleSelect = (song) => {
    console.log(selectSong(song))
  }

  renderSongList() {
    return this.props.songList.map(song => {
      return (
        <div key={song.title}>
          { song.title }
          <button onClick={() => this.hangleSelect(song)}>Select</button>
        </div>
      )
    })
  }

  render() {
    console.log('SONGS: ', this.props)
    return (
      <div className="song-list-container">
        { this.renderSongList() }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    songList: state.songList
  }
}
const mapActionsToProps = { 
selectSong
}
export default connect(mapStateToProps, mapActionsToProps)(SongList)