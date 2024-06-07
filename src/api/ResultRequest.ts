export abstract class ResultRequest {
    data: Object;
    constructor(data: Object) {
        this.data = data;
    }
}

export class Success extends ResultRequest{}

export class Error extends ResultRequest{}

export class Failure extends ResultRequest{}

export class Unauthorized {}

export class Exists {}
