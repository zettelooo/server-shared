import { Id, ReadonlyRecord } from '@zettelooo/commons'

export namespace Developer {
  interface Base {
    readonly id: Id
    readonly name: string
    readonly email: string
  }

  export interface Document extends Base {
    readonly password: string
    readonly accessKeysByName: ReadonlyRecord<string, string>
  }

  export interface Display extends Base {
    readonly shortenedAccessKeysByName: ReadonlyRecord<string, string>
  }

  export function convertDocumentToDisplay(document: Document): Display {
    const { password, accessKeysByName, ...others } = document
    return {
      ...others,
      shortenedAccessKeysByName: Object.keys(accessKeysByName).reduce((current, name) => {
        current[name] = `${accessKeysByName[name].slice(0, 7)}...`
        return current
      }, {} as Record<string, string>),
    }
  }
}
