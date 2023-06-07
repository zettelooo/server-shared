import { Id } from '@zettelooo/commons'
import { PageMember } from './PageMember'
import { Base } from '../Base'
import { Type } from '../Type'

export interface SpaceMember extends Base {
  readonly type: Type.SpaceMember
  readonly spaceId: Id
  readonly userId: Id
  readonly role: SpaceMember.Role
  readonly defaultPageMemberRole: PageMember.Role | null
  readonly spaceSequence: string
}

export namespace SpaceMember {
  export enum Role {
    Owner = 'OWNER',
    Admin = 'ADMIN',
    Viewer = 'VIEWER',
    Guest = 'GUEST',
  }
}
