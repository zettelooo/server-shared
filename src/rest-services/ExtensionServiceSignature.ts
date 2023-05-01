import { Id } from '@zettelyay/commons'
import { ExtensionHeader } from '../ExtensionHeader'
import { ExtensionScope } from '../ExtensionScope'

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

  export namespace SmartSearchHeaders {
    export interface Request {
      readonly accountId?: Id
      readonly scope: ExtensionScope
      readonly chatHistory: readonly ChatHistoryItem[]
      readonly request: string
    }
    export interface Response {
      readonly newChatHistory: ChatHistoryItem[]
    }
    export interface ChatHistoryItem {
      readonly request: string
      readonly explanations: string
      readonly headers: readonly ExtensionHeader[]
    }
  }
}
