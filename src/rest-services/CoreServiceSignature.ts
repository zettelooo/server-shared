import { Id } from '@zettelooo/commons'
import { Model } from '../Model'

export namespace CoreServiceSignature {
  export namespace UpsertAccount {
    export interface Request {
      readonly account: Required<Model.Account>
    }
    export interface Response {}
  }

  export namespace UpsertPage {
    export interface Request {
      readonly page: Required<Model.Page>
    }
    export interface Response {}
  }

  export namespace UpsertCard {
    export interface Request {
      readonly card: Required<Model.Card>
    }
    export interface Response {}
  }

  export namespace UpsertBadge {
    export interface Request {
      readonly badge: Required<Model.Badge>
    }
    export interface Response {}
  }

  export namespace InvitePageMemberByEmail {
    export interface Request {
      readonly pageId: Id
      readonly email: string
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
