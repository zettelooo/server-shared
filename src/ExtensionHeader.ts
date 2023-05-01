import { Id } from '@zettelyay/commons'
import { ExtensionScope } from './ExtensionScope'

export interface ExtensionHeader {
  readonly id: Id
  readonly version: string | null
  readonly author: {
    readonly id: Id
    readonly name: string
    readonly email: string
  }
  readonly name: string
  readonly description: string
  readonly avatar: {
    readonly file?: string
    readonly dataUrl?: string
  }
  readonly documentationMarkdownFile?: string
  readonly scopes: readonly ExtensionScope[]
  /** @deprecated Use `officialDependencies` instead. */ readonly dependencies: Readonly<Record<string, string>> // TODO: Delete after making sure it is not being used anymore
  readonly officialDependencies: Readonly<Record<string, string>>
  readonly extensionDependencies?: readonly Id[]
}

export namespace ExtensionHeader {
  export interface Document extends ExtensionHeader {
    readonly publicationStatus: ExtensionHeader.PublicationStatus
    readonly accessingUserNames: readonly string[]
  }

  export enum PublicationStatus {
    Developing = 'DEVELOPING',
    Reviewing = 'REVIEWING',
    Published = 'PUBLISHED',
  }
}
