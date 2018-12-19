declare class API {
    private baseUrl;
    constructor(baseUrl: String);
    get(route: String): Promise<any>;
    post(route: String, data: any): Promise<any>;
    patch(route: String, data: any): Promise<any>;
}
//# sourceMappingURL=index.d.ts.map