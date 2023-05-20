import { Id } from '@zettelooo/commons'
import { ExtensionHeader, ExtensionScope } from '@zettelooo/models'

export namespace ExtensionServiceSignature {
  export namespace GetHeadersByIds {
    export interface Request {
      readonly accountId?: Id
      readonly ids: readonly Id[]
    }
    export interface Response {
      readonly headers: ExtensionHeader[]
    }
  }

  export namespace SearchHeaders {
    export interface Request {
      readonly accountId?: Id
      readonly query: string
      readonly scope: ExtensionScope
    }
    export interface Response {
      readonly headers: ExtensionHeader[]
    }
  }
}
