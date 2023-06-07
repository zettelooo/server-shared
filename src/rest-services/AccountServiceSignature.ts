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
      readonly notInvited: boolean
      readonly neededFields?: NewUserData.NeededFields
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

  export namespace SubmitInvitationCode {
    export type Request = {
      readonly accessToken: string
      readonly invitationCode: string
    }
    export interface Response {
      readonly invitationCodeIsValid: boolean
    }
  }

  export namespace EditAccount {
    export type Request = {
      readonly accessToken: string
      readonly neededValues: NewUserData.NeededValues
    }
    export interface Response {
      readonly neededValuesErrors?: NewUserData.NeededValuesErrors
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

  export namespace WipeOut {
    export interface Request {}
    export interface Response {}
  }

  export namespace NewUserData {
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
