import { Id } from '@zettelooo/commons'
import { Developer } from '../Developer'
import { Extension } from '../Extension'

export namespace DeveloperServiceSignature {
  export namespace AdminGetPageData {
    export interface Request {}
    export interface Response {
      readonly developers: readonly Developer.Display[]
      readonly reviewingExtensionHeaders: readonly Extension.Header[]
    }
  }

  export namespace AdminAddDeveloper {
    export interface Request {
      readonly newDeveloper: Pick<Developer.Document, 'id' | 'password' | 'name' | 'email'>
    }
    export interface Response {}
  }

  export namespace AdminRemoveDeveloper {
    export interface Request {
      readonly developerId: Id
    }
    export interface Response {}
  }

  export namespace AdminEditDeveloper {
    export interface Request {
      readonly developerId: Id
      readonly updates: Partial<Pick<Developer.Document, 'password' | 'name' | 'email'>>
    }
    export interface Response {}
  }

  export namespace AdminApproveExtension {
    export interface Request {
      readonly extensionId: Id
    }
    export interface Response {}
  }

  export namespace SignIn {
    export interface Request {
      readonly id: Id
      readonly password: string
    }
    export interface Response {
      readonly developerId?: Id
    }
  }

  export namespace GetPageData {
    export interface Request {
      readonly developerId: Id
    }
    export interface Response {
      readonly signedInDeveloper: Developer.Display
      readonly extensionFlows: readonly Extension.Flow.Display[]
    }
  }

  export namespace GrantAccessKey {
    export interface Request {
      readonly developerId: Id
      readonly name: string
    }
    export interface Response {
      readonly accessKey: string
    }
  }

  export namespace RevokeAccessKey {
    export interface Request {
      readonly developerId: Id
      readonly name: string
    }
    export interface Response {}
  }

  export namespace UploadExtension {
    export interface Response {}
  }

  export namespace CreateExtensionFlow {
    export interface Request {
      readonly developerId: Id
      readonly appId: Id
    }
    export interface Response {}
  }

  export namespace DeleteExtension {
    export interface Request {
      readonly developerId: Id
      readonly extensionId: Id
      readonly publicationMode?: Extension.Flow.PublicationMode
    }
    export interface Response {}
  }

  export namespace GrantExtensionAccessKey {
    export interface Request {
      readonly developerId: Id
      readonly extensionId: Id
      readonly name: string
    }
    export interface Response {
      readonly accessKey: string
    }
  }

  export namespace RevokeExtensionAccessKey {
    export interface Request {
      readonly developerId: Id
      readonly extensionId: Id
      readonly name: string
    }
    export interface Response {}
  }

  export namespace ModifyExtensionRelatedUserName {
    export interface Request {
      readonly developerId: Id
      readonly extensionId: Id
      readonly role: 'tester' | 'target'
      readonly action: 'add' | 'remove'
      readonly userName: string
    }
    export interface Response {}
  }

  export namespace LimitedPublishExtension {
    export interface Request {
      readonly developerId: Id
      readonly extensionId: Id
    }
    export interface Response {}
  }

  export namespace EditExtensionStagedToBePublished {
    export interface Request {
      readonly developerId: Id
      readonly extensionId: Id
      readonly stagedToBePublished: boolean
    }
    export interface Response {}
  }
}
