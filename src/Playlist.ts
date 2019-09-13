import axios from "axios"
import { Playlist } from "./Interfaces"
import Repository from "./Repository"

export default {
  list: function(params?) {
    return axios.get(Repository.url + "playlists", {
      params: { ...params, key: Repository.apiKey }
    })
  },
  insert: () => {}
} as Playlist
