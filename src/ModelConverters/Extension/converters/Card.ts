import { ZettelTypes } from '@zettelooo/api-types'
import { Id } from '@zettelooo/commons'
import { Model } from '../../../Model'

export namespace Card {
  export function toPublic(card: Model.Card, extensionId: Id): ZettelTypes.Extension.Model.Card {
    return {
      type: ZettelTypes.Extension.Model.Type.Card,
      id: card.id,
      createdAt: card.createdAt,
      updatedAt: card.updatedAt,
      version: card.version,
      isDeleted: card.isDeleted,
      ownerUserId: card.ownerUserId,
      editorUserId: card.editorUserId,
      color: card.color,
      pageId: card.pageId,
      sequence: card.sequence,
      text: card.text,
      files: card.files, // TODO: We require a more proper conversion here in the future
      extensionData: card.extensionData[extensionId],
    }
  }

  export function fromPublic(
    card: ZettelTypes.Extension.Model.Card,
    extensionId: Id,
    current?: Pick<Model.Card, 'extensionData'>
  ): Model.Card {
    const extensionData = { ...(current?.extensionData ?? {}) }
    if (card.extensionData === undefined) {
      delete extensionData[extensionId]
    } else {
      extensionData[extensionId] = card.extensionData
    }
    return {
      type: Model.Type.Card,
      id: card.id,
      createdAt: card.createdAt,
      updatedAt: card.updatedAt,
      version: card.version,
      isDeleted: card.isDeleted,
      ownerUserId: card.ownerUserId,
      editorUserId: card.editorUserId,
      color: card.color,
      pageId: card.pageId,
      sequence: card.sequence,
      text: card.text,
      files: card.files, // TODO: We require a more proper conversion here in the future
      extensionData,
    }
  }
}
