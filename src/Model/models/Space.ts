import { Id } from '@zettelooo/commons'
import { Base } from '../Base'
import { Type } from '../Type'

export interface Space extends Base {
  readonly type: Type.Space
  readonly name: string
  readonly description: string
  readonly iconEmoji: string
  readonly color: string
  readonly avatarFileId: Id | null
  readonly acceptsGuests: boolean
}
