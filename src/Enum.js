/*@flow */

class EnumSymbol {
  sym: Symbol;
  name: string;
  value: number|string;
  description: string;

  constructor(name: string, { value, description }: { value: number|string, description: string }) {
    this.name = name;
    this.sym = Symbol.for(name);
    if (!Object.is(value, undefined)) this.value = value;
    if (description) this.description = description;

    Object.freeze(this);
  }

  get display() {
    return this.description || Symbol.keyFor(this.sym);
  }

  toString() {
    return this.sym;
  }

  valueOf() {
    return this.value;
  }
}

export default class Enum {

  constructor(enumLiterals: Object) {
    Object.keys(enumLiterals).forEach(key => {
      if (!enumLiterals[key]) {
        throw new TypeError('Each enum should have been initialized with atleast empty {} value');
      }
      // $FlowIssue https://github.com/facebook/flow/issues/1323
      this[key] = new EnumSymbol(key, enumLiterals[key]);
    });
    Object.freeze(this);
  }

  symbols(): Array<Object> {
    // $FlowIssue https://github.com/facebook/flow/issues/1323
    return Object.keys(this).map(key => this[key]);
  }

  keys(): Array<string> {
    return Object.keys(this);
  }

  contains(sym: EnumSymbol): boolean {
    if (!(sym instanceof EnumSymbol)) return false;
    // $FlowIssue https://github.com/facebook/flow/issues/1323
    return this[Symbol.keyFor(sym.sym)] === sym;
  }
}
