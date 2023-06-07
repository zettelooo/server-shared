import { Id } from '@zettelooo/commons'
import { Base } from '../Base'
import { File } from '../Model'
import { Type } from '../Type'
import { ExtensionData } from '../types/ExtensionData'

export interface Card extends Base {
  readonly type: Type.Card
  readonly ownerUserId: Id
  readonly editorUserId: Id | null
  readonly color: string
  readonly pageId: Id
  readonly sequence: string
  readonly text: string
  readonly files: readonly File[]
  readonly extensionData: ExtensionData
}
