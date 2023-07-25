import { ZettelTypes } from '@zettelooo/api-types'
import { Id } from '@zettelooo/commons'
import { Model } from '../Model'

export function convertPagePublicModelToPageModel(
  page: ZettelTypes.Model.Page,
  extensionId: Id,
  current?: Model.Page
): Model.Page {
  const dataDictionary = { ...current?.dataDictionary }
  if (page.data === undefined) delete dataDictionary[extensionId]
  else {
    dataDictionary[extensionId] = page.data
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
    extensionConfiguration: current?.extensionConfiguration ?? {
      extensionIds: [],
      serviceBindings: [],
    },
  }
}
