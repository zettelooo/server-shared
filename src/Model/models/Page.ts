import { Id } from '@zettelooo/commons'
import { Base } from '../Base'
import { Type } from '../Type'

export interface Page extends Base, Page.ExtensionConfiguration {
  readonly type: Type.Page
  readonly name: string
  readonly description: string
  readonly iconEmoji: string
  readonly avatarFileId: Id | null
  readonly color: string
  readonly memberUserIds: readonly Id[]
  readonly public: boolean
  readonly dataDictionary: Page.Data.Dictionary
}

export namespace Page {
  export interface ExtensionConfiguration {
    readonly extensionIds: readonly Id[]
    readonly servingExtensions: ExtensionConfiguration.ServingExtensions
  }

  export namespace ExtensionConfiguration {
    export interface ServingExtensions {
      readonly [servingExtensionId: Id]: {
        readonly [providingServiceName: string]: {
          readonly consumingExtensionId: Id
          readonly consumingServiceName: string
        }
      }
    }
  }
  export interface Data {
    readonly private?: unknown
  }

  export namespace Data {
    export type Dictionary = Partial<{
      readonly [extensionId: Id]: Data
    }>
  }
}
