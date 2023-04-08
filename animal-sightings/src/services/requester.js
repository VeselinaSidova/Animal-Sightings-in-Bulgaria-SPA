const requester = async (method, token, url, data) => {
    const options = {};

    if (method !== 'GET') {
        options.method = method;

        if (data) {
            options.headers = {
                'content-type': 'application/json',
            };

            options.body = JSON.stringify(data);
        }
    }

    if (token) {
        options.headers = {
            ...options.headers,
            'X-Authorization': token,
        };
    }

    const response = await fetch(url, options);

    if (response.status === 204) {
        return {};
    }

    if (response.status === 404) {
        throw new Error('Resource not found (HTTP 404)');
      }

    const result = await response.json();

    if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
    }

    return result;
};

export const requestFactory = (token) => {
    if (!token) {
        const serializedAuth = localStorage.getItem('auth');

        if (serializedAuth) {
            const auth = JSON.parse(serializedAuth);
            token = auth.accessToken;
        }
    }

    return {
        get: requester.bind(null, 'GET', token),
        post: requester.bind(null, 'POST', token),
        put: requester.bind(null, 'PUT', token),
        patch: requester.bind(null, 'PATCH', token),
        delete: requester.bind(null, 'DELETE', token),
    }
};
