class API {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }
    get(route) {
        return new Promise((resolve, reject) => {
            fetch(this.baseUrl + route, {
                mode: 'cors'
            }).then((res) => {
                if (res.ok) {
                    return res.json();
                }
                else {
                    reject(new Error(`ServerError: ${res.status}`));
                }
            }).then((json) => {
                resolve(json);
            }, err => {
                reject(err);
            });
        });
    }
    post(route, data) {
        return new Promise((resolve, reject) => {
            fetch(this.baseUrl + route, {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: data instanceof FormData ? data : JSON.stringify(data)
            }).then((res) => {
                if (res.ok) {
                    return res.json();
                }
                else {
                    reject(new Error(`ServerError: ${res.status}`));
                }
            }).then((json) => {
                resolve(json);
            }, err => {
                reject(err);
            });
        });
    }
    patch(route, data) {
        return new Promise((resolve, reject) => {
            fetch(this.baseUrl + route, {
                method: 'PATCH',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: data instanceof FormData ? data : JSON.stringify(data)
            }).then((res) => {
                if (res.ok) {
                    return res.json();
                }
                else {
                    reject(new Error(`ServerError: ${res.status}`));
                }
            }).then((json) => {
                resolve(json);
            }, err => {
                reject(err);
            });
        });
    }
}
//# sourceMappingURL=index.js.map