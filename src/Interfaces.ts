export default interface Template {
  setApiKey(key: string): void
  playlist: Playlist
  playListItems: PlayListItems
}

export interface Playlist {
  list(params?: object): Promise<object>
  insert(): any
}

export interface PlayListItems {
  list(params?: Object): Promise<object>
}
