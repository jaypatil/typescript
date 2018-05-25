export const getClassNameSymbol = Symbol();

export class C {
  [getClassNameSymbol]() {
    return 'C';
  }
}
