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
    export interface Request {
      readonly intention: string
      readonly configuration: Model.ExtensionConfiguration
    }
    export interface Response {
      readonly configuration: Model.ExtensionConfiguration
    }
  }

  export namespace RefineConfiguration {
    export interface Request {
      readonly configuration: Model.ExtensionConfiguration
    }
    export interface Response {
      readonly configuration: Model.ExtensionConfiguration
    }
  }
}
