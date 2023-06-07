import { Id } from '@zettelooo/commons'
import { Base } from '../Base'
import { Type } from '../Type'
import { ExtensionData } from '../types/ExtensionData'
import { PageMember } from './PageMember'

export interface Page extends Base {
  readonly type: Type.Page
  readonly ownerUserId: Id
  readonly name: string
  readonly description: string
  readonly spaceId: Id | null
  readonly iconEmoji: string
  readonly color: string
  readonly avatarFileId: Id | null
  readonly view: Page.View
  readonly public: boolean
  readonly maximumAutomaticallyAssignedRole: PageMember.Role | null
  readonly extensionIds: readonly Id[]
  readonly extensionData: ExtensionData
}

export namespace Page {
  export enum View {
    List = 'LIST',
    Gallery = 'GALLERY',
  }
}
