export class Dates {
  constructor(private createdAt: Date, private updatedAt: Date) {}

  static create(dates: any) {
    return new this(dates.createdAt, dates.updatedAt);
  }

  toJson() {
    return {
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}
