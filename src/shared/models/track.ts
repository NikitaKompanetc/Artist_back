export interface Track {
  name: string,
  id: number,
  who: string,
  year: number
  profilePicture?: { url: string  }
  pictureList?: Array<{ url: string; name?: string  }>
}