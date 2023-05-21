import { ReadonlyRecord } from '@zettelooo/commons'

export namespace AiServiceSignature {
  export namespace OpenAiChatGpt {
    export interface Request {
      readonly systemMessage?: string
      readonly history?: readonly {
        readonly question: string
        readonly answer: string
      }[]
      readonly question: string
      readonly maxTokens?: number
      readonly temperature?: number
      readonly topP?: number
    }
    export interface Response {
      readonly answer: string
    }
  }

  export namespace SmartCommand {
    export interface Request {
      readonly api: ReadonlyRecord<string, Action>
      readonly command: string
    }
    export interface Response {
      readonly code: string | null
    }
    export interface Action {
      /** @example ["alpha(beta: string, gamma?: number): Promise<boolean> // Does blah blah by the given beta and gamma, then returns blah"] */
      readonly signatures: readonly string[]
      readonly extendSignaturesWith?: 'available extensions'
    }
  }
}
