import { ZettelTypes } from '@zettelooo/api-types'
import { Id } from '@zettelooo/commons'
import { Model } from '../Model'

export function convertPageModelToPagePublicModel(page: Model.Page, extensionId: Id): ZettelTypes.Model.Page {
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
    hasExtensionInstalled:
      page.extensionConfiguration.extensionIds.includes(extensionId) ||
      page.extensionConfiguration.serviceBindings.some(
        serviceBinding => serviceBinding.providingExtensionId === extensionId
      ),
    data: page.dataDictionary[extensionId],
  }
}
