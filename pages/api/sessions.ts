// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import * as errors from '@/lib/errors';

export interface User {
    id: number;
    email: string;
    name: string;
}

export interface Error {
    name: string;
    statusCode: number;
    data: object;
}

const loginUser = function (email: string, password: string): User {
    if (!email) {
        throw errors.missingParameter('email');
    }

    if (!password) {
        throw errors.missingParameter('password');
    }

    if (typeof email !== 'string' || !email.includes('@')) {
        throw errors.invalidParameter('email', 'Email needs to be a string.');
    }

    if (typeof password !== 'string') {
        throw errors.invalidParameter('password', 'Password needs to be a string.');
    }

    if (password.length < 8) {
        throw errors.invalidParameter('password', 'Password should be 8 characters or longer.');
    }

    if (email === 'test@usepastel.com' && password === 'password123') {
        return {
            id: 1,
            email: 'test@usepastel.com',
            name: 'Testing Pastel'
        };
    }

    throw errors.notFound('No user was found with that combination of email and password.');
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Error | User>) {
    try {
        if (req.method === 'POST') {
            const result = loginUser(req.body.email, req.body.password);
            res.status(200).json(result);
        } else {
            throw errors.notFound('Route not found.');
        }
    } catch (err) {
        res.status((err as Error).statusCode).json(err as Error);
    }
}
