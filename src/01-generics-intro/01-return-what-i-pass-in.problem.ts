import { Equal, Expect } from '../helpers/type-utils'

const returnWhatIPassIn = <T>(t: T) => {
  // T -> template / plantilla / type
  return t
}

const one = returnWhatIPassIn(1)
const matt = returnWhatIPassIn('matt')
const luz = returnWhatIPassIn('luz')

type tests = [Expect<Equal<typeof one, 1>>, Expect<Equal<typeof matt, 'matt'>>]
