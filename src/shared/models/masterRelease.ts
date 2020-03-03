import { Release } from "./release" 

export interface Track {
  name: string,
  length: string
}

export interface MasterRelease {
  id: number 
  name: string 
  description?: string 
  releaseList: Release[] 
}