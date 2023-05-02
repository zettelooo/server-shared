import { ExtensionHeader } from '@zettelyay/models'

export interface ExtensionHeaderDocument extends ExtensionHeader {
  readonly publicationStatus: ExtensionHeaderDocument.PublicationStatus
  readonly accessingUserNames: readonly string[]
}

export namespace ExtensionHeaderDocument {
  export enum PublicationStatus {
    Developing = 'DEVELOPING',
    Reviewing = 'REVIEWING',
    Published = 'PUBLISHED',
  }
}
