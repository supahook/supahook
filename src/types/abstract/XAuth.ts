import XCall from "./XCall";

abstract class XAuth {
    type: string; //'API_KEY', 'BASIC', 'BEARER', 'HMAC', 'OAUTH', "MTLS"
    ip_whitelistening: boolean = false;
    rate_limit_per_hour: number = 0;
    security_guard: boolean = false;
    auth_position: string = "header";
    auth_name: string;
    auth_value: string;

    constructor(type: string, auth_name: string, auth_value: string, auth_position?: string) {
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