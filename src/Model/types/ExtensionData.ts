import { Id } from '@zettelooo/commons'

export interface ExtensionData {
  readonly [extensionId: Id]: unknown
}
