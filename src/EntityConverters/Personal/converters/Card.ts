import { ZettelTypes } from '@zettelooo/api-types'
import { MutableModel } from '@zettelooo/models'

export namespace Card {
  export function toPublic(card: MutableModel.Entity.Card): ZettelTypes.Personal.Entity.Card {
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
        return others
      }), // TODO: May require deep conversion in the future
    }
  }

  export function fromPublic(
    card: ZettelTypes.Personal.Entity.Card,
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
