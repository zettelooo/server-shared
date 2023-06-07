import { ZettelTypes } from '@zettelooo/api-types'
import { Model } from '../../../Model'

export namespace User {
  export function toPublic(user: Model.User | Model.Account): ZettelTypes.Extension.Model.User {
    return {
      type: ZettelTypes.Extension.Model.Type.User,
      id: user.id,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
      version: user.version,
      isDeleted: user.isDeleted,
      name: user.name,
      userName: user.userName,
      email: user.email,
      color: user.color,
      avatarFileId: user.avatarFileId,
    }
  }

  export function fromPublic(user: ZettelTypes.Extension.Model.User, current: Model.Account): Model.Account {
    return {
      ...current,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
      version: user.version,
      isDeleted: user.isDeleted,
      name: user.name,
      userName: user.userName,
      email: user.email,
      color: user.color,
      avatarFileId: user.avatarFileId,
    }
  }
}
