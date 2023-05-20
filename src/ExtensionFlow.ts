import { Id, PartialReadonlyRecord, ReadonlyRecord } from '@zettelooo/commons'
import { ExtensionHeader } from '@zettelooo/models'

export namespace ExtensionFlow {
  interface Base {
    readonly id: Id
    readonly name: string
    readonly headers: PartialReadonlyRecord<ExtensionFlow.PublicationMode, ExtensionFlow.Header>
    readonly testerUserNames: readonly string[]
    readonly targetUserNames: readonly string[]
    readonly stagedToBePublished: boolean
  }

  export interface Document extends Base {
    readonly accessKeysByName: ReadonlyRecord<string, string>
  }

  export interface Display extends Base {
    readonly accessKeyNames: readonly string[]
  }

  export enum PublicationMode {
    Developing = 'DEVELOPING',
    LimitedPublished = 'LIMITED_PUBLISHED',
    Published = 'PUBLISHED',
  }

  export interface Header extends Omit<ExtensionHeader, 'id' | 'author' | 'name'> {
    readonly aiDescription: string
  }
}
