import Playlist from "./Playlist"
import PlayListItems from "./PlayListItems"
import Template from "./Interfaces"
import Repository from "./Repository"

class YouTubeData implements Template {
  setApiKey(key: string) {
    Repository.apiKey = key
  }

  playlist = Playlist
  playListItems = PlayListItems
}

export default YouTubeData
