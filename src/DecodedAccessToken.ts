import { Id } from '@zettelooo/commons'

export interface DecodedAccessToken {
  readonly deviceId: Id
  readonly sessionId: Id
  readonly userId: Id
  readonly peekMode?: boolean // TODO: Add check in all personal data manipulating end-points, we should prevent manipulating user data while peeking their data
}
