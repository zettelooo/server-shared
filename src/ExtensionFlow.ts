import { Id, PartialReadonlyRecord, ReadonlyRecord } from '@zettelooo/commons'
import { ExtensionHeader } from '@zettelooo/models'
import { Developer } from './Developer'

export namespace ExtensionFlow {
  interface Base {
    readonly id: Id
    readonly authorId: Id
    readonly headers: PartialReadonlyRecord<ExtensionFlow.PublicationMode, ExtensionFlow.Header>
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

  export type Header = Omit<ExtensionHeader, 'id' | 'author'>

  export function convertDocumentToDisplay(document: Document): Display {
    const { accessKeysByName, ...others } = document
    return {
      ...others,
      shortenedAccessKeysByName: Object.keys(accessKeysByName).reduce((current, name) => {
        current[name] = `${accessKeysByName[name].slice(0, 7)}...`
        return current
      }, {} as Record<string, string>),
    }
  }

  export function convertFlowHeaderToHeader(
    flow: Base,
    header: Header,
    developer: Developer.Document | Developer.Display
  ): ExtensionHeader {
    const { aiDescription, ...others } = header
    return {
      ...others,
      id: flow.id,
      author: {
        id: flow.authorId,
        name: developer.name,
        email: developer.email,
      },
    }
  }
}
