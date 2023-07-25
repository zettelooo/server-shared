import { ZettelTypes } from '@zettelooo/api-types'
import { Id } from '@zettelooo/commons'
import { Model } from '../Model'

export function convertCardModelToCardPublicModel(card: Model.Card, extensionId: Id): ZettelTypes.Model.Card {
  return {
    type: ZettelTypes.Model.Type.Card,
    id: card.id,
    createdAt: card.createdAt,
    updatedAt: card.updatedAt,
    version: card.version,
    isDeleted: card.isDeleted,
    pageId: card.pageId,
    sequence: card.sequence,
    data: card.dataDictionary[extensionId],
  }
}
