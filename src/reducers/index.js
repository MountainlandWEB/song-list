import { combineReducers } from 'redux'

const songListReducer = (songList = []) => {
  return [
    { title: 'Snowmobile Song', duration: '3:25', band: 'Luke'},
    { title: 'Wannabe', duration: '5:15', band: 'Spice Girls'},
    { title: 'Waterfalls', duration: '6:52', band: 'TLC'},
    { title: 'Stuck With Me', duration: '2:25', band: 'Neighbourhood'},
    { title: 'Blood From My Body', duration: '4:45', band: 'George Jones'}
  ]
}

const songSelectorReducer = (selectedSong = null, action) => {
  if (action.type === 'SELECT_SONG') {
    return action.payload.song
  }
  return selectedSong
}

export default combineReducers({
  songList: songListReducer,
  selectedSong: songSelectorReducer
})