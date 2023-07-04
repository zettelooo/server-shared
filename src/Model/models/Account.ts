import { Base } from '../Base'
import { Type } from '../Type'
import { User } from './User'

export interface Account extends Omit<User, 'type'>, Base {
  readonly type: Type.Account
  readonly isOnboarded: boolean
  readonly walletAddress: string | null
}
