import { Id } from '@zettelooo/commons'

export interface ExtensionConfiguration {
  readonly extensionIds: readonly Id[]
  readonly servingExtensions: ExtensionConfiguration.ServingExtensions
}

export namespace ExtensionConfiguration {
  export interface ServingExtensions {
    readonly [servingExtensionId: Id]: {
      readonly [providingServiceName: string]: {
        readonly consumingExtensionId: Id
        readonly consumingServiceName: string
      }
    }
  }
}
