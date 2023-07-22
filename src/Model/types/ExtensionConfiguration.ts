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

  export function getExtensionIds(extensionConfiguration: ExtensionConfiguration): readonly Id[] {
    return [
      ...extensionConfiguration.extensionIds,
      ...extensionConfiguration.serviceBindings.map(serviceBinding => serviceBinding.providingExtensionId),
    ].filter((item, index, array) => index === array.indexOf(item))
  }
}
