import { ZettelTypes } from '@zettelooo/api-types'
import { Id } from '@zettelooo/commons'
import { MutableModel } from '@zettelooo/models'
import { Block } from './Block'

export namespace Card {
  export function toPublic(card: MutableModel.Entity.Card, extensionId: Id): ZettelTypes.Extension.Entity.Card {
    return {
      type: ZettelTypes.Model.Type.Card,
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
      blocks: card.blocks.map(block => Block.toPublic(block, extensionId)),
      extensionData: card.extensionData[extensionId],
    }
  }

  export function fromPublic(
    card: ZettelTypes.Extension.Entity.Card,
    extensionId: Id,
    current?: Pick<MutableModel.Card, 'blocks' | 'extensionData'>
  ): MutableModel.Entity.Card {
    const extensionData = { ...(current?.extensionData ?? {}) }
    if (card.extensionData === undefined) {
      delete extensionData[extensionId]
    } else {
      extensionData[extensionId] = card.extensionData
    }
    return {
      type: MutableModel.Type.Card,
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
      blocks: card.blocks.map(block =>
        Block.fromPublic(
          block,
          extensionId,
          current?.blocks.find(currentBlock => currentBlock.id === block.id)
        )
      ),
      extensionData,
    }
  }
}
