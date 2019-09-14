import { PlayListItems } from "./Interfaces"
import axios from "axios"
import Repository from "./Repository"

export default {
  list: async function(params?: object): Promise<object> {
    return axios.get(Repository.url + "playlistItems", {
      params: { ...params, key: Repository.apiKey }
    })
  }
} as PlayListItems
