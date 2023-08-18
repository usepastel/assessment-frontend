export class AppError extends Error {
    statusCode: number;
    data?: object;
    constructor(message = 'Something went wrong.', name = 'AppError', statusCode = 400, data?: object) {
        super(message);
        this.name = name;
        this.statusCode = statusCode;
        this.data = data;
    }

    toJSON = () => {
        return { name: this.name, message: this.message, statusCode: this.statusCode, data: this.data };
    };
}

export const missingParameter = function (parameter: string, message?: string) {
    if (parameter && !message) {
        message = `Missing ${parameter}.`;
    }

    if (!message) {
        message = 'Missing parameter.';
    }

    return new AppError(message, 'MissingParameter', 400, { field: parameter });
};

export const notLoggedIn = function (message = 'You need to be logged in to perform this action.') {
    return new AppError(message, 'NotLoggedIn', 400);
};

export const invalidParameter = function (parameter: string, message = 'Invalid parameter.') {
    return new AppError(message, 'InvalidParameter', 400, { field: parameter });
};

export const notFound = function (message = 'Not found.') {
    return new AppError(message, 'NotFound', 404);
};
