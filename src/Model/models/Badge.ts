import { Id } from '@zettelooo/commons'
import { Base } from '../Base'
import { Type } from '../Type'

export interface Badge extends Base {
  readonly type: Type.Badge
  readonly userId: Id
  readonly action: Badge.Action
}

export namespace Badge {
  export type Action<T extends Action.Type = Action.Type> = {
    [Action.Type.JoinPage]: {
      readonly type: Action.Type.JoinPage
      readonly userId: Id
      readonly pageId: Id
    }
    [Action.Type.CreateCard]: {
      readonly type: Action.Type.CreateCard
      readonly userId: Id
      readonly cardId: Id
    }
    [Action.Type.UpdateCard]: {
      readonly type: Action.Type.UpdateCard
      readonly userId: Id
      readonly cardId: Id
    }
    [Action.Type.MentionInCard]: {
      readonly type: Action.Type.MentionInCard
      readonly userId: Id
      readonly cardId: Id
    }
  }[T]

  export namespace Action {
    export enum Type {
      JoinPage = 'JOIN_PAGE',
      CreateCard = 'CREATE_CARD',
      UpdateCard = 'UPDATE_CARD',
      MentionInCard = 'MENTION_IN_CARD',
    }
  }
}
