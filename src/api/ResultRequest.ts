export abstract class ResultRequest {
    data: Object;
    message: String;
    constructor(data: Object, message: String) {
        this.data = data;
        this.message = message;
    }
}

export class Success extends ResultRequest{}

export class Error extends ResultRequest{}

export class Failure extends ResultRequest{}

export class Unauthorized extends ResultRequest{}

export class Exists extends ResultRequest{}
