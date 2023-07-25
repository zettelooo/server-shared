import { ZettelTypes } from '@zettelooo/api-types'
import { Id } from '@zettelooo/commons'
import { Model } from '../Model'

export function convertCardPublicModelToCardModel(
  card: ZettelTypes.Model.Card,
  extensionId: Id,
  current?: Model.Card
): Model.Card {
  const dataDictionary = { ...current?.dataDictionary }
  if (card.data === undefined) delete dataDictionary[extensionId]
  else {
    dataDictionary[extensionId] = card.data
  }

  return {
    type: Model.Type.Card,
    id: card.id,
    createdAt: card.createdAt,
    updatedAt: card.updatedAt,
    version: card.version,
    isDeleted: card.isDeleted,
    pageId: card.pageId,
    sequence: card.sequence,
    dataDictionary,
  }
}
