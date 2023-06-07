import { Id, Timestamp } from '@zettelooo/commons'
import { Base } from '../Base'
import { Type } from '../Type'

export interface Account extends Base {
  readonly type: Type.Account
  readonly name: string
  readonly userName: string
  readonly email: string
  readonly color: string
  readonly avatarFileId: string | null
  readonly lastActiveTimestamp: Timestamp

  readonly extensionIds: readonly Id[]
  readonly isOnboarded: boolean
  readonly walletAddress: string | null
}
