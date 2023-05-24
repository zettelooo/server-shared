import { ZettelTypes } from '@zettelooo/api-types'
import { MutableModel } from '@zettelooo/models'
import { PagePreInstalledExtensions } from '../../../PagePreInstalledExtensions'
import { Id } from '@zettelooo/commons'

export namespace Page {
  export function toPublic(page: MutableModel.Entity.Page, extensionId: Id): ZettelTypes.Extension.Entity.Page {
    return {
      type: ZettelTypes.Model.Type.Page,
      id: page.id,
      createdAt: page.createdAt,
      updatedAt: page.updatedAt,
      version: page.version,
      isDeleted: page.isDeleted,
      ownerUserId: page.ownerUserId,
      name: page.name,
      description: page.description,
      iconEmoji: page.iconEmoji,
      color: page.color,
      avatarFileId: page.avatarFileId,
      view: page.view, // TODO: We require a more proper conversion here in the future
      public: page.public,
      hasExtensionInstalled: page.extensionIds.includes(extensionId),
      extensionData: page.extensionData[extensionId],
    }
  }

  export function fromPublic(
    page: ZettelTypes.Extension.Entity.Page,
    current?: Pick<MutableModel.Page, 'extensionIds' | 'extensionData'>
  ): MutableModel.Entity.Page {
    return {
      type: MutableModel.Type.Page,
      id: page.id,
      createdAt: page.createdAt,
      updatedAt: page.updatedAt,
      version: page.version,
      isDeleted: page.isDeleted,
      name: page.name,
      description: page.description,
      ownerUserId: page.ownerUserId,
      spaceId: null,
      iconEmoji: page.iconEmoji,
      color: page.color,
      avatarFileId: page.avatarFileId,
      view: page.view, // TODO: We require a more proper conversion here in the future
      public: page.public,
      maximumAutomaticallyAssignedRole: null,
      extensionIds: current?.extensionIds ?? PagePreInstalledExtensions.ids,
      extensionData: current?.extensionData ?? PagePreInstalledExtensions.data,
    }
  }
}
