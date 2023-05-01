import { Id } from '@zettelyay/commons'

export interface DecodedAccessToken {
  readonly deviceId: Id
  readonly sessionId: Id
  readonly userId: Id
  readonly pickMode?: boolean // TODO: Add check in all personal data manipulating end-points, we should prevent manipulating user data while picking their data
}
