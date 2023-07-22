import { Id } from '@zettelooo/commons'

export interface ExtensionConfiguration {
  readonly extensionIds: readonly Id[]
  readonly serviceBindings: readonly ExtensionConfiguration.ServiceBinding[]
}

export namespace ExtensionConfiguration {
  export interface ServiceBinding {
    readonly providingExtensionId: Id
    readonly providingServiceName: string
    readonly consumingExtensionId: Id
    readonly consumingServiceName: string
  }
}
