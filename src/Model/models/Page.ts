import { Id } from '@zettelooo/commons'
import { Base } from '../Base'
import { Type } from '../Type'

export interface Page extends Base {
  readonly type: Type.Page
  readonly name: string
  readonly description: string
  readonly iconEmoji: string
  readonly avatarFileId: Id | null
  readonly color: string
  readonly memberUserIds: readonly Id[]
  readonly public: boolean
  readonly extensionIds: readonly Id[]
  readonly dataDictionary: Page.Data.Dictionary
}

export namespace Page {
  export interface Data {
    readonly private?: unknown
  }

  export namespace Data {
    export type Dictionary = Partial<{
      readonly [extensionId: Id]: Data
    }>
  }
}
