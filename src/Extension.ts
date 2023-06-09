import { Id, PartialReadonlyRecord, ReadonlyRecord } from '@zettelooo/commons'
import { Developer } from './Developer'

export namespace Extension {
  export namespace Flow {
    interface Base {
      readonly id: Id
      readonly authorId: Id
      readonly phases: PartialReadonlyRecord<PublicationMode, Phase>
      readonly testerUserNames: readonly string[]
      readonly targetUserNames: readonly string[]
      readonly stagedToBePublished: boolean
    }

    export interface Document extends Base {
      readonly accessKeysByName: ReadonlyRecord<string, string>
    }

    export interface Display extends Base {
      readonly shortenedAccessKeysByName: ReadonlyRecord<string, string>
    }

    export enum PublicationMode {
      Developing = 'DEVELOPING',
      LimitedPublished = 'LIMITED_PUBLISHED',
      Published = 'PUBLISHED',
    }

    export type Phase = Omit<Header, 'id' | 'author'>
  }

  export interface Header {
    readonly id: Id
    readonly version: string | null
    readonly author: {
      readonly id: Id
      readonly name: string
      readonly email: string
    }
    readonly name: string
    readonly description: string
    readonly aiDescription?: string
    readonly avatar: {
      readonly file?: string
      readonly dataUrl?: string
    }
    readonly documentationMarkdownFile?: string
    readonly scopes: readonly Scope[]
    readonly officialDependencies: ReadonlyRecord<string, string>
  }

  export type Scope = string // TODO: It's placed into the Extension API which is only accessible to Web, server shouldn't care, shoult it?!

  export function convertFlowDocumentToFlowDisplay(document: Flow.Document): Flow.Display {
    const { accessKeysByName, ...others } = document
    return {
      ...others,
      shortenedAccessKeysByName: Object.keys(accessKeysByName).reduce((current, name) => {
        current[name] = `${accessKeysByName[name].slice(0, 8)}...${accessKeysByName[name].slice(-4)}`
        return current
      }, {} as Record<string, string>),
    }
  }

  export function convertFlowPhaseToHeader(
    flow: Flow.Document | Flow.Display,
    phase: Flow.Phase,
    developer: Developer.Document | Developer.Display
  ): Header {
    return {
      ...phase,
      id: flow.id,
      author: {
        id: flow.authorId,
        name: developer.name,
        email: developer.email,
      },
    }
  }
}
