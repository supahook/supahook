import XCall from "./XCall";
import XAuth from "./XAuth";

abstract class XWebhook {
    id: string | undefined;
    name: string;
    logo: string;
    auth : XAuth | undefined;
    created_at: number = 0;
    updated_at: number = 0;

    constructor(name: string, logo: string) {
        this.name = name;
        this.logo = logo;
    }

    // Save the Webhook to db
    abstract save():  Promise<void>;

    // Get calls associated to this Webhook
    abstract getCalls(): Promise<[XCall]>

    // Get all Webhooks TO_BE_IMPLEMENTED
    static getWebhooks: () => Promise<[XWebhook]>;
}

export default XWebhook;