import { ZettelTypes } from '@zettelooo/api-types'
import { Model } from '../Model'

export function convertUserPublicModelToUserModel(user: ZettelTypes.Model.User, current: Model.Account): Model.Account {
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
