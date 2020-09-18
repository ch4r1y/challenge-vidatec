export class ValidationException extends Error{

    public static throw(message: string) {
        throw {
            message,
            errorCode: 400
        };
    }

}
