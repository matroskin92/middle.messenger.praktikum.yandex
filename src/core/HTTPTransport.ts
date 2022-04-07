import { queryStringify } from '../utils';

const Methods = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE',
};

type Options = {
    headers?: Record<string, string>,
    method?: string,
    timeout?: number,
    data?: Record<string, unknown>
}

export default class HTTPTransport {
    get = (url: string, options: Options = {}) => {
        return this.request(url, { ...options, method: Methods.GET }, options.timeout);
    };

    post = (url: string, options: Options = {}) => {
        return this.request(url, { ...options, method: Methods.POST }, options.timeout);
    };

    put = (url: string, options: Options = {}) => {
        return this.request(url, { ...options, method: Methods.PUT }, options.timeout);
    };

    delete = (url: string, options: Options = {}) => {
        return this.request(url, { ...options, method: Methods.DELETE }, options.timeout);
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

            xhr.timeout = timeout;
            xhr.ontimeout = reject;

            if (isGet || !data) {
                xhr.send();
            } else {
                const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
                xhr.send(blob);
            }
        });
    };
}