export default interface Template {
  setApiKey(key: string): void
  playlist: Playlist
}

export interface Playlist {
  list(params?: object): Promise<object>
  insert(): any
}
