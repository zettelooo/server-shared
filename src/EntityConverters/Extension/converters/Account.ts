import { ZettelTypes } from '@zettelooo/api-types'
import { MutableModel } from '@zettelooo/models'

export namespace Account {
  export function toPublic(account: MutableModel.Entity.Account): ZettelTypes.Extension.Entity.Account {
    return {
      type: ZettelTypes.Model.Type.Account,
      id: account.id,
      createdAt: account.createdAt,
      updatedAt: account.updatedAt,
      version: account.version,
      isDeleted: account.isDeleted,
      name: account.name,
      userName: account.userName,
      email: account.email,
      color: account.color,
      avatarFileId: account.avatarFileId,
      walletAddress: account.walletAddress,
    }
  }

  export function fromPublic(
    account: ZettelTypes.Extension.Entity.Account,
    current: MutableModel.Entity.Account
  ): MutableModel.Entity.Account {
    return {
      ...current,
      createdAt: account.createdAt,
      updatedAt: account.updatedAt,
      version: account.version,
      isDeleted: account.isDeleted,
      name: account.name,
      userName: account.userName,
      email: account.email,
      color: account.color,
      avatarFileId: account.avatarFileId,
      walletAddress: account.walletAddress,
    }
  }
}
