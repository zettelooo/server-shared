export namespace PersonalKeyServiceSignature {
  export namespace AddPersonalKey {
    export interface Request {}
    export interface Response {
      readonly personalKey: string
    }
  }

  export namespace PersonalKeys {
    export interface Request {}
    export interface Response {
      readonly personalKeys: readonly string[]
    }
  }

  export namespace RemovePersonalKey {
    export interface Request {
      readonly personalKey: string
    }
    export interface Response {}
  }
}
