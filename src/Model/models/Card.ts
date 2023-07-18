import { Id } from '@zettelooo/commons'
import { Base } from '../Base'
import { Type } from '../Type'

export interface Card extends Base {
  readonly type: Type.Card
  readonly pageId: Id
  readonly sequence: string
  readonly publicDataDictionary: Card.DataDictionary
  readonly privateDataDictionary: Card.DataDictionary
}

export namespace Card {
  export type DataDictionary = Partial<{
    readonly [extensionId: Id]: unknown
  }>
}
