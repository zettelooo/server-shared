import { PartialReadonlyRecord } from '@zettelooo/commons'

export interface UserDailyActivity {
  readonly userId: string
  readonly date: string
  readonly count?: {
    readonly byClient: PartialReadonlyRecord<UserDailyActivity.Client, number>
    readonly byAction: PartialReadonlyRecord<UserDailyActivity.Action, number>
  }
}

export namespace UserDailyActivity {
  export const clients = ['not specified', 'web desktop', 'web mobile', 'desktop', 'chrome extension'] as const

  export type Client = (typeof clients)[number]

  export const actions = ['not specified', 'sign in', 'upsert page', 'open page', 'upsert card'] as const

  export type Action = (typeof actions)[number]

  export function formatDate(date: Date): string {
    return date.toISOString().split('T')[0]
  }

  export function parseDate(date: string): Date {
    return new Date(`${date}T00:00:00.000Z`)
  }

  export function getRelativeDate(date: string, offsetDays: number): string {
    const dateObject = parseDate(date)
    dateObject.setUTCDate(dateObject.getUTCDate() + offsetDays)
    return formatDate(dateObject)
  }

  export function getDateDifference(fromDate: string, toDate: string): number {
    return Math.round((parseDate(toDate).getTime() - parseDate(fromDate).getTime()) / (24 * 60 * 60 * 1000))
  }
}
