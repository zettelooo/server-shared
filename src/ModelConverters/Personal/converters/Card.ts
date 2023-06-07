import { ZettelTypes } from '@zettelooo/api-types'
import { Model } from '../../../Model'

export namespace Card {
  export function toPublic(card: Model.Card): ZettelTypes.Personal.Model.Card {
    return {
      type: ZettelTypes.Personal.Model.Type.Card,
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
    }
  }

  export function fromPublic(
    card: ZettelTypes.Personal.Model.Card,
    current?: Pick<Model.Card, 'extensionData'>
  ): Model.Card {
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
      extensionData: current?.extensionData ?? {},
    }
  }
}
