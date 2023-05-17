// TODO: Temporary approach:

import { ReadonlyRecord, Id } from '@zettelooo/commons'

const managedDataById: ReadonlyRecord<Id, any> = {
  // 'zettel.daily-focus': undefined,
  // 'zettel.daily-review': undefined,
  // 'zettel.daily-standup': undefined,
  // 'zettel.eth-fiat': undefined,
  // 'zettel.gallery-view': undefined,
  // 'zettel.google-docs-sync': undefined,
  // 'zettel.insert-nft': undefined,
  'zettel.link-preview': { enabled: true },
  // 'zettel.link-summarizer': undefined,
  // 'zettel.mood-tracker': undefined,
  // 'zettel.nft-collection-info': undefined,
  // 'zettel.openai-chatgpt': undefined,
  // 'zettel.scheduler': undefined,
  // 'zettel.slide-view': undefined,
  // 'zettel.tableland-sync': undefined,
  // 'zettel.twync': undefined,
  // 'zettel.wallet-address-balance': undefined,
}

export namespace PagePreInstalledExtensions {
  export const ids: readonly Id[] = Object.keys(managedDataById)

  export const managedData: ReadonlyRecord<Id, any> = ids.reduce((current, id) => {
    if (managedDataById[id] !== undefined) {
      current[id] = managedDataById[id]
    }
    return current
  }, {} as Record<Id, any>)
}
