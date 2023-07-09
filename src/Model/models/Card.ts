import { Id } from '@zettelooo/commons'
import { Base } from '../Base'
import { Type } from '../Type'

export interface Card extends Base {
  readonly type: Type.Card
  readonly pageId: Id
  readonly sequence: string
  readonly dataDictionary: Card.Data.Dictionary
}

export namespace Card {
  export interface Data {
    readonly public?: unknown
    readonly private?: unknown
  }

  export namespace Data {
    export type Dictionary = Partial<{
      readonly [extensionId: Id]: Data
    }>
  }
}
