import { Type } from './Type'
import { Account } from './models/Account'
import { Badge } from './models/Badge'
import { Card } from './models/Card'
import { Page } from './models/Page'
import { User } from './models/User'

export type ByType<T extends Type = Type> = {
  [Type.Account]: Account
  [Type.User]: User
  [Type.Page]: Page
  [Type.Card]: Card
  [Type.Badge]: Badge
}[T]
