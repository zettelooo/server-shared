import { Type } from './Type'
import { Account } from './models/Account'
import { Badge } from './models/Badge'
import { Card } from './models/Card'
import { Page } from './models/Page'
import { PageMember } from './models/PageMember'
import { Space } from './models/Space'
import { SpaceMember } from './models/SpaceMember'
import { User } from './models/User'

export type ByType<T extends Type = Type> = {
  [Type.Account]: Account
  [Type.User]: User
  [Type.Space]: Space
  [Type.SpaceMember]: SpaceMember
  [Type.Page]: Page
  [Type.PageMember]: PageMember
  [Type.Card]: Card
  [Type.Badge]: Badge
}[T]
