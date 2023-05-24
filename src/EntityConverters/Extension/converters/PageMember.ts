import { ZettelTypes } from '@zettelooo/api-types'
import { MutableModel } from '@zettelooo/models'

export namespace PageMember {
  export function toPublic(pageMember: MutableModel.Entity.PageMember): ZettelTypes.Extension.Entity.PageMember {
    return {
      type: ZettelTypes.Model.Type.PageMember,
      id: pageMember.id,
      createdAt: pageMember.createdAt,
      updatedAt: pageMember.updatedAt,
      version: pageMember.version,
      isDeleted: pageMember.isDeleted,
      pageId: pageMember.pageId,
      userId: pageMember.userId,
      role: pageMember.role!, // TODO: We require a more proper conversion here in the future
    }
  }

  export function fromPublic(pageMember: ZettelTypes.Extension.Entity.PageMember): MutableModel.Entity.PageMember {
    return {
      type: MutableModel.Type.PageMember,
      id: pageMember.id,
      createdAt: pageMember.createdAt,
      updatedAt: pageMember.updatedAt,
      version: pageMember.version,
      isDeleted: pageMember.isDeleted,
      pageId: pageMember.pageId,
      userId: pageMember.userId,
      role: pageMember.role, // TODO: We require a more proper conversion here in the future
    }
  }
}
