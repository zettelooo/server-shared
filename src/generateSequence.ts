export function generateSequence(options?: {
  readonly timestampMicroseconds?: number
  readonly previousSequence?: string
  readonly nextSequence?: string
  readonly offset?: number
}): string {
  const currentTimestampMicroseconds =
    (options?.timestampMicroseconds ?? Math.floor(Date.now() * 1000)) + (options?.offset || 0)
  if (!options?.nextSequence) return `${currentTimestampMicroseconds}0000000000000000000000000`
  if (!options.previousSequence)
    return (BigInt(options.nextSequence) - BigInt('10000000000000000000000000000')).toString()
  return ((BigInt(options.previousSequence) + BigInt(options.nextSequence)) / BigInt(2)).toString()
}
