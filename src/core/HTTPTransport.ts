import { queryStringify } from '../utils';

const enum Methods {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE',
}

type Options = {
    includeCredentials?: boolean,
    headers?: Record<string, string>,
    method?: Methods,
    timeout?: number,
    data?: Record<string, any> | {} | null
}

export default class HTTPTransport {
    path: string;

    constructor(route: string) {
        this.path = route;
    }

    get = (url: string, options: Options = {}) => {
        return this.request(`${process.env.API_ENDPOINT}/${this.path}/${url}`, {
            ...options, method: Methods.GET
        }, options.timeout);
    };

    post = (url: string, options: Options = {}) => {
        return this.request(`${process.env.API_ENDPOINT}/${this.path}/${url}`, {
            ...options, method: Methods.POST
        }, options.timeout);
    };

    put = (url: string, options: Options = {}) => {
        return this.request(`${process.env.API_ENDPOINT}/${this.path}/${url}`, {
            ...options, method: Methods.PUT
        }, options.timeout);
    };

    delete = (url: string, options: Options = {}) => {
        return this.request(`${process.env.API_ENDPOINT}/${this.path}/${url}`, {
            ...options, method: Methods.DELETE
        }, options.timeout);
    };

    request = (url: string, options: Options = {}, timeout = 5000) => {
        const { headers = {}, method, data } = options;

        return new Promise(function (resolve, reject) {
            if (!method) {
                reject('No method');
                return;
            }

            const xhr = new XMLHttpRequest();
            const isGet = method === Methods.GET;

            xhr.open(
                method,
                isGet && !!data
                    ? `${url}${queryStringify(data)}`
                    : url,
            );

            Object.keys(headers).forEach(key => {
                xhr.setRequestHeader(key, headers[key]);
            });

            xhr.onload = function () {
                resolve(xhr);
            };

            xhr.onabort = reject;
            xhr.onerror = reject;
            xhr.withCredentials = true;
            xhr.timeout = timeout;
            xhr.ontimeout = reject;

            if (isGet) {
                xhr.send()
            } else {
                xhr.send(data as any)
            }
        });
    };
}