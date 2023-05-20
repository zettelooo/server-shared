import { Id, ReadonlyRecord } from '@zettelooo/commons'

export namespace Developer {
  interface Base {
    readonly id: Id
    readonly name: string
    readonly email: string
  }

  export interface Document extends Base {
    readonly password: string
    readonly accessKeysByName: ReadonlyRecord<string, string>
  }

  export interface Display extends Base {
    readonly accessKeyNames: readonly string[]
  }
}
