import { Id } from '@zettelooo/commons'
import { Base } from '../Base'
import { Type } from '../Type'
import { DataDictionary } from '../types/DataDictionary'

export interface Card extends Base {
  readonly type: Type.Card
  readonly pageId: Id
  readonly sequence: string
  readonly dataDictionary: DataDictionary
}
