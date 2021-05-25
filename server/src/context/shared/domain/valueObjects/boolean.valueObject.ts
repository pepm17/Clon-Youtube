export class BooleanValueObject {
  constructor(private value: boolean) {}

  getValue(): boolean {
    return this.value;
  }

  setStatus(): void {
    this.value = !this.value;
  }
}
