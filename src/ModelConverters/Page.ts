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

  export function fromPublic(
    page: ZettelTypes.Model.Page,
    extensionId: Id,
    current?: Pick<Model.Page, 'extensionIds' | 'dataDictionary'>
  ): Model.Page {
    const extensionIds = [...(current?.extensionIds ?? [])]
    if (page.hasExtensionInstalled) {
      extensionIds.includes(extensionId) || extensionIds.push(extensionId)
    } else {
      extensionIds.includes(extensionId) && extensionIds.splice(extensionIds.indexOf(extensionId), 1)
    }
    const dataDictionary = { ...current?.dataDictionary }
    if (page.privateData === undefined) {
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
      extensionIds,
      dataDictionary,
    }
  }
}
