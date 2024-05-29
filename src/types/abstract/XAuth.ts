import XCall from "./XCall";

abstract class XAuth {
    type: "api_key" | "basic" | "bearer" | "hmac" | "oauth" | "mtls";
    ip_whitelistening: boolean = false;
    rate_limit_per_hour: number = 0;
    security_guard: boolean = false;
    auth_position: "headers" | "query" = "headers";
    auth_name: string;
    auth_value: string;

    constructor(type: "api_key" | "basic" | "bearer" | "hmac" | "oauth" | "mtls", auth_name: string, auth_value: string, auth_position?: "headers" | "query") {
        this.type = type;
        this.auth_name = auth_name;
        this.auth_value = auth_value;

        if (auth_position) {
            this.auth_position = auth_position;
        }
    }

    // authenticate a call
    abstract authenticate(call: XCall):  Promise<boolean>;

    // create an auth instance from an object: TO_BE_IMPLEMENTED
    static fromObject: (data: object) => XAuth;
}

export default XAuth;