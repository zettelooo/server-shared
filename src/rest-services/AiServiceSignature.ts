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
}
