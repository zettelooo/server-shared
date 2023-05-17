import { Id } from '@zettelooo/commons'

export interface Developer {
  readonly id: Id
  readonly password: string
  readonly name: string
  readonly email: string
  readonly extensionAccessKeys: Developer.ExtensionAccessKeys
}

export namespace Developer {
  export type ExtensionAccessKeys = Readonly<Record<Id, string>>
}
