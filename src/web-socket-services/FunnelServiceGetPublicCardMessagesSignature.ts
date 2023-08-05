import { Id, Timestamp } from '@zettelooo/commons'
import { Model } from '../Model'

export namespace FunnelServiceGetPublicCardMessagesSignature {
  export type RequestMessage<T extends RequestMessage.Type = RequestMessage.Type> = {
    [RequestMessage.Type.Start]: {
      readonly type: RequestMessage.Type.Start
      readonly cardId: Id
      readonly lastSynchronizedSequence: number
      readonly timeout: number
      readonly numberOfAllowedUnacknowledge: number
    }
    [RequestMessage.Type.HeartbeatAck]: {
      readonly type: RequestMessage.Type.HeartbeatAck
      readonly sequence: number
      readonly currentUncorrectedClientTimestamp: Timestamp
    }
    [RequestMessage.Type.Close]: {
      readonly type: RequestMessage.Type.Close
    }
    [RequestMessage.Type.Ack]: {
      readonly type: RequestMessage.Type.Ack
      readonly id: Id
    }
    [RequestMessage.Type.Nack]: {
      readonly type: RequestMessage.Type.Nack
      readonly id: Id
    }
  }[T]

  export namespace RequestMessage {
    export enum Type {
      Start = 'START',
      HeartbeatAck = 'HEARTBEAT_ACK',
      Close = 'CLOSE',
      Ack = 'ACK',
      Nack = 'NACK',
    }
  }

  export type ResponseMessage<T extends ResponseMessage.Type = ResponseMessage.Type> = {
    [ResponseMessage.Type.Started]: {
      readonly type: ResponseMessage.Type.Started
      readonly serverTimeoutMilliseconds: number
    }
    [ResponseMessage.Type.Heartbeat]: {
      readonly type: ResponseMessage.Type.Heartbeat
      readonly sequence: number
      readonly currentServerTimestamp: Timestamp
    }
    [ResponseMessage.Type.Restart]: {
      readonly type: ResponseMessage.Type.Restart
    }
    [ResponseMessage.Type.MutationBatch]: {
      readonly type: ResponseMessage.Type.MutationBatch
      readonly id: Id
      readonly mutations: readonly Mutation[]
      readonly numberOfRemainingMutations?: number
    }
    [ResponseMessage.Type.UpdateExtension]: {
      readonly type: ResponseMessage.Type.UpdateExtension
      readonly extensionId: Id
    }
  }[T]

  export namespace ResponseMessage {
    export enum Type {
      Started = 'STARTED',
      Heartbeat = 'HEARTBEAT',
      Restart = 'RESTART',
      MutationBatch = 'MUTATION_BATCH',
      UpdateExtension = 'UPDATE_EXTENSION',
    }
  }

  export interface Mutation {
    readonly model: Model.User | Model.Card | Model.Page
    readonly sequence: number
  }
}
