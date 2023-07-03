import { ZettelTypes } from '@zettelooo/api-types'
import { Model } from '../Model'

export namespace User {
  export function toPublic(user: Model.User | Model.Account): ZettelTypes.Model.User {
    return {
      type: ZettelTypes.Model.Type.User,
      id: user.id,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
      version: user.version,
      isDeleted: user.isDeleted,
      name: user.name,
      userName: user.userName,
      email: user.email,
      avatarFileId: user.avatarFileId,
      color: user.color,
    }
  }

  export function fromPublic(user: ZettelTypes.Model.User, current: Model.Account): Model.Account {
    return {
      ...current,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
      version: user.version,
      isDeleted: user.isDeleted,
      name: user.name,
      userName: user.userName,
      email: user.email,
      avatarFileId: user.avatarFileId,
      color: user.color,
    }
  }
}
