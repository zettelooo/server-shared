import { Id, PartialReadonlyRecord } from '@zettelooo/commons'
import { Model } from '../Model'

export namespace AccountServiceSignature {
  export namespace GoogleSignInGetAuthLink {
    export interface Request {
      readonly deviceId: Id
      readonly agentEnvironment: 'browser' | 'electron'
      readonly popupWindow: boolean
    }
    export interface Response {
      readonly signInLink: string
    }
  }

  export namespace WalletSignInAuthenticate {
    export interface Request {
      readonly walletAddress: string
    }
    export interface Response {
      readonly nonceMessage?: string
    }
  }

  export namespace WalletSignInVerify {
    export interface Request {
      readonly deviceId: Id
      readonly walletAddress: string
      readonly nonceMessage: string
      readonly signedNonceMessage: string
    }
    export interface Response {
      readonly userTokens: UserTokens
    }
  }

  export namespace GetAccountStatus {
    export type Request = {
      readonly accessToken: string
    }
    export interface Response {
      readonly accountStatus: AccountStatus
    }
  }

  export namespace EditAccount {
    export type Request = {
      readonly accessToken: string
      readonly neededValues: AccountStatus.NeededValues
    }
    export interface Response {
      readonly neededValuesErrors?: AccountStatus.NeededValuesErrors
    }
  }

  export namespace RefreshToken {
    export interface Request {
      readonly refreshToken: string
    }
    export interface Response {
      readonly userTokens: UserTokens
    }
  }

  export namespace GetSubscriptionLink {
    export interface Request {
      readonly agentEnvironment: 'browser' | 'electron'
      readonly accessToken: string
      readonly refreshToken: string
    }
    export interface Response {
      readonly subscriptionLinkUrl: string | null
    }
  }

  export namespace GetCustomerPortalLink {
    export interface Request {
      readonly redirectBackUrl: string
    }
    export interface Response {
      readonly customerPortalLinkUrl: string | null
    }
  }

  export namespace WipeOut {
    export interface Request {}
    export interface Response {}
  }

  export interface AccountStatus {
    readonly neededFields: AccountStatus.NeededFields
    readonly subscription: Model.Account.Subscription
  }

  export namespace AccountStatus {
    export type NeededField = 'name' | 'userName' | 'email' | 'walletAddress'
    export type NeededFields = readonly NeededField[]
    export type NeededValues = Partial<Pick<Model.Account, NeededField>>
    export type NeededValuesErrors = PartialReadonlyRecord<NeededField, string>
  }

  export interface UserTokens {
    readonly accessToken: string
    readonly refreshToken: string
  }
}
