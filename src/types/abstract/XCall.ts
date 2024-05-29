abstract class XCall {
    id: string | undefined;
    type: "original" | "replay";
    webhook_id: string;
    headers: string;
    method: "GET" | "POST" | "PUT" | "PATCH";
    url: string;
    client_ip: string;
    body: string;
    created_at: number;
    authenticated: boolean = false;
    forwarded: boolean = false;
    response_status_code: number = 0;

    constructor(type: "original" | "replay", webhook_id: string, headers: string, method: "GET" | "POST" | "PUT" | "PATCH", url: string, client_ip: string, body: string, created_at: number) {
        this.type = type;
        this.webhook_id = webhook_id;
        this.headers = headers;
        this.method = method;
        this.url = url;
        this.client_ip = client_ip;
        this.body = body;
        this.created_at = created_at;
    }


    abstract forward(): Promise<void>;

    abstract replay(): Promise<void>;
}

export default XCall;