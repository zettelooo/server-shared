import { ZettelTypes } from '@zettelooo/api-types'
import { Id } from '@zettelooo/commons'
import { Model } from '../Model'

export namespace Page {
  export function toPublic(page: Model.Page, extensionId: Id): ZettelTypes.Model.Page {
    return {
      type: ZettelTypes.Model.Type.Page,
      id: page.id,
      createdAt: page.createdAt,
      updatedAt: page.updatedAt,
      version: page.version,
      isDeleted: page.isDeleted,
      name: page.name,
      description: page.description,
      iconEmoji: page.iconEmoji,
      avatarFileId: page.avatarFileId,
      color: page.color,
      memberUserIds: page.memberUserIds,
      public: page.public,
      hasExtensionInstalled: page.extensionIds.includes(extensionId),
      privateData: page.dataDictionary[extensionId]?.private,
    }
  }

  export function fromPublic(page: ZettelTypes.Model.Page, extensionId: Id, current?: Model.Page): Model.Page {
    const dataDictionary = { ...current?.dataDictionary }
    if (page.privateData === undefined || !current?.extensionIds.includes(extensionId)) {
      delete dataDictionary[extensionId]
    } else {
      dataDictionary[extensionId] = { private: page.privateData }
    }
    return {
      type: Model.Type.Page,
      id: page.id,
      createdAt: page.createdAt,
      updatedAt: page.updatedAt,
      version: page.version,
      isDeleted: page.isDeleted,
      name: page.name,
      description: page.description,
      iconEmoji: page.iconEmoji,
      color: page.color,
      avatarFileId: page.avatarFileId,
      memberUserIds: page.memberUserIds,
      public: page.public,
      dataDictionary,
      extensionIds: current?.extensionIds ?? [],
      servingExtensions: current?.servingExtensions ?? {},
    }
  }
}
