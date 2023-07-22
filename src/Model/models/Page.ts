import { Id } from '@zettelooo/commons'
import { Base } from '../Base'
import { Type } from '../Type'
import { DataDictionary } from '../types/DataDictionary'
import { ExtensionConfiguration } from '../types/ExtensionConfiguration'

export interface Page extends Base, ExtensionConfiguration {
  readonly type: Type.Page
  readonly name: string
  readonly description: string
  readonly iconEmoji: string
  readonly avatarFileId: Id | null
  readonly color: string
  readonly memberUserIds: readonly Id[]
  readonly public: boolean
  readonly dataDictionary: DataDictionary
}
