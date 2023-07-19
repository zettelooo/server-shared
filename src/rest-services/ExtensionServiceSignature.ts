import { Id } from '@zettelooo/commons'
import { Extension } from '../Extension'
import { Model } from '../Model'

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

  export namespace ModifyConfiguration {
    export interface Request extends Model.ExtensionConfiguration {
      readonly intention: string
    }
    export type Response = Model.ExtensionConfiguration
  }

  export namespace RefineConfiguration {
    export type Request = Model.ExtensionConfiguration
    export type Response = Model.ExtensionConfiguration
  }

  export namespace UpdateCardPublicData {
    export interface Request {
      readonly cardId: Id
      readonly extensionId: Id
      readonly cardPublicData: unknown
    }
    export interface Response {
      readonly cardPublicDataDictionary: Model.DataDictionary
    }
  }
}
