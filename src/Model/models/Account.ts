import { Type } from '../Type'
import { User } from './User'

export interface Account extends Omit<User, 'type'> {
  readonly type: Type.Account
  readonly isOnboarded: boolean
  readonly walletAddress: string | null
  readonly subscription: Account.Subscription
}

export namespace Account {
  export type Subscription = 'none' | 'invited' | 'normal'
}
