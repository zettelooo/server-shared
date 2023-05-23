import { Id } from '@zettelooo/commons'
import { MutableModel } from '@zettelooo/models'

export namespace CoreServiceSignature {
  export namespace UpsertAccount {
    export interface Request {
      readonly account: Required<MutableModel.Entity<MutableModel.Type.Account>>
    }
    export interface Response {}
  }

  export namespace UpsertSpace {
    export interface Request {
      readonly space: Required<MutableModel.Entity<MutableModel.Type.Space>>
    }
    export interface Response {}
  }

  export namespace UpsertSpaceMember {
    export interface Request {
      readonly spaceMember: Required<MutableModel.Entity<MutableModel.Type.SpaceMember>>
    }
    export interface Response {}
  }

  export namespace UpsertPage {
    export interface Request {
      readonly page: Required<MutableModel.Entity<MutableModel.Type.Page>>
    }
    export interface Response {}
  }

  export namespace UpsertPageMember {
    export interface Request {
      readonly pageMember: Required<MutableModel.Entity<MutableModel.Type.PageMember>>
    }
    export interface Response {}
  }

  export namespace UpsertCard {
    export interface Request {
      readonly card: Required<MutableModel.Entity<MutableModel.Type.Card>>
    }
    export interface Response {}
  }

  export namespace UpsertComment {
    export interface Request {
      readonly comment: Required<MutableModel.Entity<MutableModel.Type.Comment>>
    }
    export interface Response {}
  }

  export namespace UpsertBadge {
    export interface Request {
      readonly badge: Required<MutableModel.Entity<MutableModel.Type.Badge>>
    }
    export interface Response {}
  }

  export namespace InviteSpaceMemberByEmail {
    export interface Request {
      readonly spaceId: Id
      readonly email: string
      readonly role: MutableModel.SpaceMember.Role
      readonly defaultPageMemberRole: MutableModel.PageMember.Role | null
    }
    export interface Response {}
  }

  export namespace InvitePageMemberByEmail {
    export interface Request {
      readonly pageId: Id
      readonly email: string
      readonly role: MutableModel.PageMember.Role | null
    }
    export interface Response {}
  }

  export namespace DuplicatePage {
    export interface Request {
      readonly pageId: Id
    }
    export interface Response {
      readonly createdPageId: Id
    }
  }
}
