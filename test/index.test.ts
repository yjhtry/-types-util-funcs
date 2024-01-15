/* eslint-disable ts/ban-ts-comment */
import { describe, it } from 'vitest'
import type { Equal, Expect, NumberRange, PickKeysByType } from '../src/index'

describe('test types', () => {
  it('numberRange should working', () => {
    type _ = Expect<Equal<NumberRange<1, 5>, 1 | 2 | 3 | 4 | 5>>
  })

  it('numberRange should error', () => {
    // @ts-expect-error
    type _ = Expect<Equal<NumberRange<1, 2>, 1 | 2 | 3 | 4 | 5>>
  })

  it('pickKeysByType should working', () => {
    type _ = Expect<Equal<'name', PickKeysByType<{ name: 'john', age: 22 }, string>>>
  })

  it('pickKeysByType should error', () => {
    // @ts-expect-error
    type _ = Expect<Equal<'name', PickKeysByType<{ name: 'john', age: 22 }, number>>>
  })
})
