import { ZettelTypes } from '@zettelooo/api-types'
import { PagePreInstalledExtensions } from '../../../PagePreInstalledExtensions'
import { Model } from '../../../Model'

export namespace Page {
  export function toPublic(page: Model.Page): ZettelTypes.Personal.Model.Page {
    return {
      type: ZettelTypes.Personal.Model.Type.Page,
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
    }
  }

  export function fromPublic(
    page: ZettelTypes.Personal.Model.Page,
    current?: Pick<Model.Page, 'extensionIds' | 'extensionData'>
  ): Model.Page {
    return {
      type: Model.Type.Page,
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
