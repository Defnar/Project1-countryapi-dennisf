export class FetchError extends Error{
    constructor(message: string) {
        super(message)
        this.name = "Fetch Error"
    }
}

export class ApiError extends Error{
    constructor(message: string) {
        super(message)
        this.name = "API Error"
    }
}