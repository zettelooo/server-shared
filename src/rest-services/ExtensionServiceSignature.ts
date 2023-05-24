import { Id } from '@zettelooo/commons'
import { Extension } from '../Extension'

export namespace ExtensionServiceSignature {
  export namespace GetHeadersByIds {
    export interface Request {
      readonly accountId?: Id
      readonly ids: readonly Id[]
    }
    export interface Response {
      readonly headers: Extension.Header[]
    }
  }

  export namespace SearchHeaders {
    export interface Request {
      readonly accountId?: Id
      readonly query: string
      readonly scope: Extension.Scope
    }
    export interface Response {
      readonly headers: Extension.Header[]
    }
  }
}
