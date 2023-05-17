import { Id } from '@zettelooo/commons'

export namespace SearchServiceSignature {
  export namespace OnUsers {
    export interface Request {
      readonly query: string
    }
    export interface Response {
      readonly basicUsers: readonly BasicUser[]
    }
  }

  export interface BasicUser {
    readonly id: Id
    readonly name: string
    readonly userName: string
    readonly email: string
    readonly avatarFileId: Id | null
    readonly backgroundColor: string
  }
}
