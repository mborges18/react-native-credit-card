export abstract class ResultRequest<T> {
  data?: T;
  message?: String;
  constructor(data?: T, message?: String) {
    this.data = data;
    this.message = message;
  }
}

export class Success<T> extends ResultRequest<T> { }

export class Error<T> extends ResultRequest<T> { }

export class Failure<T> extends ResultRequest<T> { }

export class Unauthorized<T> extends ResultRequest<T> { }

export class Exists<T> extends ResultRequest<T> { }
