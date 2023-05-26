import { ZettelTypes } from '@zettelooo/api-types'
import { MutableModel } from '@zettelooo/models'

export namespace Block {
  export function toPublic(block: MutableModel.Block): ZettelTypes.Model.Block {
    // TODO: May require deep conversion in the future:
    const { extensionData, ...others } = block
    return others
  }

  export function fromPublic(block: ZettelTypes.Model.Block, current?: MutableModel.Block): MutableModel.Block {
    // TODO: May require deep conversion in the future:
    return {
      ...block,
      extensionData: current?.extensionData ?? {},
    }
  }
}
