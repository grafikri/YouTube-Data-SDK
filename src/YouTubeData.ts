import Playlist from "./Playlist"
import Template from "./Interfaces"
import Repository from "./Repository"

class YouTubeData implements Template {
  setApiKey(key: string) {
    Repository.apiKey = key
  }

  playlist = Playlist
}

export default YouTubeData
