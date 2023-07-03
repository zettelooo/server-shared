import { Id } from '@zettelooo/commons'
import { Base } from '../Base'
import { Type } from '../Type'

export interface Card extends Base {
  readonly type: Type.Card
  readonly pageId: Id
  readonly sequence: string
  readonly dataDictionary: {
    readonly [extensionId: Id]: {
      readonly public?: unknown
      readonly private?: unknown
    }
  }
}
