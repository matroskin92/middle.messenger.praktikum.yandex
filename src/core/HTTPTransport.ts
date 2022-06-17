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

    get = (url: string, options: Options = {}): Promise<string | void> => {
        return this.request(`${process.env.API_ENDPOINT}/${this.path}/${url}`, {
            ...options, method: Methods.GET
        }, options.timeout);
    };

    post = (url: string, options: Options = {}): Promise<string | void> => {
        return this.request(`${process.env.API_ENDPOINT}/${this.path}/${url}`, {
            ...options, method: Methods.POST
        }, options.timeout);
    };

    put = (url: string, options: Options = {}): Promise<string | void> => {
        return this.request(`${process.env.API_ENDPOINT}/${this.path}/${url}`, {
            ...options, method: Methods.PUT
        }, options.timeout);
    };

    delete = (url: string, options: Options = {}): Promise<string | void> => {
        return this.request(`${process.env.API_ENDPOINT}/${this.path}/${url}`, {
            ...options, method: Methods.DELETE
        }, options.timeout);
    };

    request = (url: string, options: Options = {}, timeout = 5000): Promise<string | void> => {
        let { headers = {}, method, data } = options;

        return new Promise((resolve, reject) => {
            if (!method) {
                reject('No method');
            }

            const xhr = new XMLHttpRequest();
            const isGet = method === Methods.GET;
            const isFormData = data instanceof FormData;

            xhr.open(
                method as string,
                isGet && !!data
                    ? `${url}${queryStringify(data)}`
                    : url,
            );

            if (!isFormData && !isGet) {
                xhr.setRequestHeader('Content-Type', 'application/json');
                data = JSON.stringify(data);
            }

            Object.keys(headers).forEach(key => {
                xhr.setRequestHeader(key, headers[key]);
            });

            xhr.onload = () => {
                if (xhr.status >= 400) {
                    reject(xhr.response);
                } else {
                    resolve(xhr.response);
                }
            };

            xhr.withCredentials = true;
            xhr.timeout = timeout;

            xhr.onabort = () => {
                reject(xhr.response)
            }
            xhr.onerror = () => {
                reject(xhr.response)
            }
            xhr.ontimeout = () => {
                reject(xhr.response)
            }

            if (isGet) {
                xhr.send();
            } else {
                xhr.send(data as any);
            }
        })
        .then((response): string => {
            return response as string;
        })
        .catch((e) => {
            const error = JSON.parse(e);
            console.error(error.response);
            window.store.dispatch({screen: '/500'});
        });
    };
}