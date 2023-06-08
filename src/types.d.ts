export type Multimedia = {
  url: string
  name: string
  lastModified: Date
  etag: string
  size: number
  prefix?: string
}

export interface RequestProps {
  prompt: string
  options?: ChatContext
  systemMessage: string
  temperature?: number
  top_p?: number
}
