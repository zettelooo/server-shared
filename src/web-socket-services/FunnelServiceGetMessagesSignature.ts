import { Timestamp, Id, PartialReadonlyRecord } from '@zettelooo/commons'
import { Model } from '../Model'

export namespace FunnelServiceGetMessagesSignature {
  export type RequestMessage<T extends RequestMessage.Type = RequestMessage.Type> = {
    [RequestMessage.Type.Start]: {
      readonly type: RequestMessage.Type.Start
      readonly accessToken: string
      readonly timeout: number
      readonly numberOfAllowedUnacknowledge: number
      readonly maximumBatchSize: number
    }
    [RequestMessage.Type.Initialize]: {
      readonly type: RequestMessage.Type.Initialize
      readonly sequences: FunnelSequences
    }
    [RequestMessage.Type.HeartbeatAck]: {
      readonly type: RequestMessage.Type.HeartbeatAck
      readonly sequence: number
      readonly currentUncorrectedClientTimestamp: Timestamp
    }
    [RequestMessage.Type.Close]: {
      readonly type: RequestMessage.Type.Close
    }
    [RequestMessage.Type.Destroy]: {
      readonly type: RequestMessage.Type.Destroy
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
      Initialize = 'INITIALIZE',
      HeartbeatAck = 'HEARTBEAT_ACK',
      Close = 'CLOSE',
      Destroy = 'DESTROY',
      Ack = 'ACK',
      Nack = 'NACK',
    }
  }

  export type ResponseMessage<T extends ResponseMessage.Type = ResponseMessage.Type> = {
    [ResponseMessage.Type.Reinitialize]: {
      readonly type: ResponseMessage.Type.Reinitialize
    }
    [ResponseMessage.Type.Started]: {
      readonly type: ResponseMessage.Type.Started
      readonly serverTimeoutMilliseconds: number
    }
    [ResponseMessage.Type.Heartbeat]: {
      readonly type: ResponseMessage.Type.Heartbeat
      readonly sequence: number
      readonly currentCorrectedServerTimestamp: Timestamp
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
      Reinitialize = 'REINITIALIZE',
      Started = 'STARTED',
      Heartbeat = 'HEARTBEAT',
      Restart = 'RESTART',
      MutationBatch = 'MUTATION_BATCH',
      UpdateExtension = 'UPDATE_EXTENSION',
    }
  }

  export interface FunnelSequences {
    readonly forUser?: number
    readonly forSpaces: PartialReadonlyRecord<Id, number>
    readonly forPages: PartialReadonlyRecord<Id, number>
  }

  export interface Mutation {
    readonly model: Model.ByType
    readonly sequence: number
    readonly sequenceSource?: Mutation.SequenceSource
  }

  export namespace Mutation {
    export type SequenceSource = 'user' | 'space' | 'page'
  }
}
