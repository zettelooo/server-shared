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
    export interface Request extends Configuration {
      readonly intention: string
    }
    export type Response = Configuration
  }

  export namespace RefineConfiguration {
    export type Request = Configuration
    export type Response = Configuration
  }

  export type Configuration = Pick<Model.Page, 'extensionIds' | 'servingExtensions'>
}
