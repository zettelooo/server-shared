import { ZettelTypes } from '@zettelooo/api-types'
import { Id } from '@zettelooo/commons'
import { Model } from '../Model'

export namespace Card {
  export function toPublic(card: Model.Card, extensionId: Id): ZettelTypes.Model.Card {
    return {
      type: ZettelTypes.Model.Type.Card,
      id: card.id,
      createdAt: card.createdAt,
      updatedAt: card.updatedAt,
      version: card.version,
      isDeleted: card.isDeleted,
      pageId: card.pageId,
      sequence: card.sequence,
      publicData: card.dataDictionary[extensionId]?.public,
      privateData: card.dataDictionary[extensionId]?.private,
    }
  }

  export function fromPublic(
    card: ZettelTypes.Model.Card,
    extensionId: Id,
    current?: Pick<Model.Card, 'dataDictionary'>
  ): Model.Card {
    const dataDictionary = { ...(current?.dataDictionary ?? {}) }
    if (card.publicData === undefined && card.privateData === undefined) {
      delete dataDictionary[extensionId]
    } else {
      dataDictionary[extensionId] = {
        ...(card.publicData === undefined ? {} : { public: card.publicData }),
        ...(card.privateData === undefined ? {} : { private: card.privateData }),
      }
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
}
