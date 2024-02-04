export type * from './utils'

/**
 * pick a sub object from T by the V type
 */
export type PickKeysByType<T, V> = keyof {
  [K in keyof T as T[K] extends V ? K : never]: T[K];
}

type _RangeUtils<L, C extends any[] = [], R = L> =
C['length'] extends L
  ? R
  : _RangeUtils<L, [...C, 0], C['length'] | R>

/**
 * Generate a number range from L to H
 */
export type NumberRange<L, H> = L | Exclude<_RangeUtils<H>, _RangeUtils<L>>

/**
 * Partial required
 */
export type PartialRequired<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>
