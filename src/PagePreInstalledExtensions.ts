// TODO: Temporary approach:

import { Id, ReadonlyRecord } from '@zettelooo/commons'

const dataById: ReadonlyRecord<Id, any> = {
  // 'zettel.daily-focus': undefined,
  // 'zettel.daily-review': undefined,
  // 'zettel.daily-standup': undefined,
  // 'zettel.eth-fiat': undefined,
  // 'zettel.gallery-view': undefined,
  // 'zettel.google-docs-sync': undefined,
  // 'zettel.insert-nft': undefined,
  // 'zettel.link-preview': { enabled: true },
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
  export const ids: readonly Id[] = Object.keys(dataById)

  export const data: ReadonlyRecord<Id, { readonly private: any }> = ids.reduce((current, id) => {
    if (dataById[id] !== undefined) {
      current[id] = { private: dataById[id] }
    }
    return current
  }, {} as Record<Id, { readonly private: any }>)
}
