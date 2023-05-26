import { ZettelTypes } from '@zettelooo/api-types'
import { Id } from '@zettelooo/commons'
import { MutableModel } from '@zettelooo/models'

export namespace Block {
  export function toPublic(block: MutableModel.Block, extensionId: Id): ZettelTypes.Extension.Entity.Block {
    // TODO: May require deep conversion in the future:
    const { extensionData, ...others } = block
    return {
      ...others,
      extensionData: block.extensionData[extensionId],
    }
  }

  export function fromPublic(
    block: ZettelTypes.Extension.Entity.Block,
    extensionId: Id,
    current?: MutableModel.Block
  ): MutableModel.Block {
    // TODO: May require deep conversion in the future:
    const extensionData = { ...(current?.extensionData ?? {}) }
    if (block.extensionData === undefined) {
      delete extensionData[extensionId]
    } else {
      extensionData[extensionId] = block.extensionData
    }
    return {
      ...block,
      extensionData,
    }
  }
}
