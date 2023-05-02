import { Id } from '@zettelyay/commons'
import { Developer } from '../Developer'
import { ExtensionHeaderDocument } from '../ExtensionHeaderDocument'

export namespace DeveloperServiceSignature {
  export namespace AdminGetPageData {
    export interface Request {}
    export interface Response {
      readonly developers: readonly Developer[]
      readonly reviewingExtensionHeaders: readonly ExtensionHeaderDocument[]
    }
  }

  export namespace AdminAddDeveloper {
    export interface Request {
      readonly newDeveloper: Pick<Developer, 'id' | 'password' | 'name' | 'email'>
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
      readonly updates: {
        readonly password?: string
        readonly name?: string
        readonly email?: string
      }
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
      readonly signedInDeveloper: DisplayDeveloper
      readonly extensionAccessKeys: Developer.ExtensionAccessKeys
      readonly extensionHeaders: readonly ExtensionHeaderDocument[]
    }
  }

  export namespace UploadExtension {
    export interface Response {}
  }

  export namespace DeleteExtension {
    export interface Request {
      readonly developerId: Id
      readonly extensionId: Id
      readonly publicationStatus: ExtensionHeaderDocument.PublicationStatus
    }
    export interface Response {}
  }

  export namespace GrantExtensionAccessKey {
    export interface Request {
      readonly developerId: Id
      readonly extensionId: Id
    }
    export interface Response {}
  }

  export namespace RevokeExtensionAccessKey {
    export interface Request {
      readonly developerId: Id
      readonly extensionId: Id
    }
    export interface Response {}
  }

  export namespace ModifyExtensionAccessingUserName {
    export interface Request {
      readonly developerId: Id
      readonly extensionId: Id
      readonly userName: string
      readonly action: 'add' | 'remove'
    }
    export interface Response {}
  }

  export namespace SubmitExtensionForReview {
    export interface Request {
      readonly developerId: Id
      readonly extensionId: Id
    }
    export interface Response {}
  }

  export type DisplayDeveloper = Pick<Developer, 'id' | 'name' | 'email'>
}
