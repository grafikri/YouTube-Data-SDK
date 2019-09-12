import axios from "axios"

interface Playlist {
  list(params?: object): Promise<object>
  insert(): any
}

interface Template {
  playlist: Playlist
}

class YouTube implements Template {
  url: string = "https://www.googleapis.com/youtube/v3/"
  token: string
  constructor(token: string) {
    this.token = token
  }

  playlist: Playlist = {
    list: params => {
      return axios.get(this.url + "playlists", {
        params: { ...params, key: this.token }
      })
    },
    insert: () => {}
  }
}

export default YouTube
