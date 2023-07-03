import { Base } from '../Base'
import { User } from './User'

export interface Account extends Omit<User, 'type'>, Base {
  readonly isOnboarded: boolean
  readonly walletAddress: string | null
}
