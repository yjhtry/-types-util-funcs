export type PickKeysByType<T, V> = keyof {
  [K in keyof T as T[K] extends V ? K : never]: T[K];
}

type _RangeUtils<L, C extends any[] = [], R = L> =
C['length'] extends L
  ? R
  : _RangeUtils<L, [...C, 0], C['length'] | R>

export type NumberRange<L, H> = L | Exclude<_RangeUtils<H>, _RangeUtils<L>>

export type { Expect, Equal } from './utils'
