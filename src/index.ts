class API {
    private baseUrl: String;
    
    constructor(baseUrl: String) {
        this.baseUrl = baseUrl;
    }
    
    get(route: String): Promise<any> {
        return new Promise((resolve: Function, reject: Function): void => {
            fetch(this.baseUrl + route, {
                mode: 'cors'
            }).then((res: any): void => {
                if (res.ok) {
                    return res.json();
                } else {
                    reject(new Error(`ServerError: ${res.status}`))
                }
            }).then((json: any): void => {
                resolve(json);
            }, err => {
                reject(err);
            });
        });
    }
    
    post(route: String, data: any): Promise<any> {
        return new Promise((resolve: Function, reject: Function): void => {
            fetch(this.baseUrl + route, {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: data instanceof FormData ? data : JSON.stringify(data)
            }).then((res: any): void => {
                if (res.ok) {
                    return res.json();
                } else {
                    reject(new Error(`ServerError: ${res.status}`))
                }
            }).then((json: any): void => {
                resolve(json);
            }, err => {
                reject(err);
            });
        });
    }
    
    patch(route: String, data: any): Promise<any> {
        return new Promise((resolve: Function, reject: Function): void => {
            fetch(this.baseUrl + route, {
                method: 'PATCH',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: data instanceof FormData ? data : JSON.stringify(data)
            }).then((res: any): void => {
                if (res.ok) {
                    return res.json();
                } else {
                    reject(new Error(`ServerError: ${res.status}`))
                }
            }).then((json: any): void => {
                resolve(json);
            }, err => {
                reject(err);
            });
        });
    }
}