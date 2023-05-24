import { ZettelTypes } from '@zettelooo/api-types'
import { Id } from '@zettelooo/commons'
import { MutableModel } from '@zettelooo/models'

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
      blocks: card.blocks.map(block => {
        const { extensionData, ...others } = block
        return {
          ...others,
          extensionData: block.extensionData[extensionId],
        }
      }), // TODO: May require deep conversion in the future
      extensionData: card.extensionData[extensionId],
    }
  }

  export function fromPublic(
    card: ZettelTypes.Extension.Entity.Card,
    current?: Pick<MutableModel.Card, 'blocks' | 'extensionData'>
  ): MutableModel.Entity.Card {
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
      blocks: card.blocks.map(block => ({
        ...block,
        extensionData: current?.blocks.find(oldBlock => oldBlock.id === block.id)?.extensionData ?? {},
      })), // TODO: May require deep conversion in the future
      extensionData: current?.extensionData ?? {},
    }
  }
}
