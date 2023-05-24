import { ZettelTypes } from '@zettelooo/api-types'
import { MutableModel } from '@zettelooo/models'

export namespace User {
  export function toPublic(
    user: MutableModel.Entity.User | MutableModel.Entity.Account
  ): ZettelTypes.Personal.Entity.User {
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
      color: user.color,
      avatarFileId: user.avatarFileId,
    }
  }
}
