export class DateValueObject {
  constructor(private value: Date) {}

  getValue(): Date {
    return this.value;
  }
}
