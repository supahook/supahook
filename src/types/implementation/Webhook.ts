import Auth from "./Auth";
import XWebhook from "../abstract/XWebhook";
import Call from "./Call";

class Webhook extends XWebhook { // db
    id: string | undefined;
    auth : Auth | undefined;
    created_at: number = 0;
    updated_at: number = 0;

    constructor(name: string, logo: string, id?: string, auth?: object, created_at?: number, updated_at?: number) {
        super(name, logo);

        if (id && created_at && updated_at && auth) {
            this.id = id;
            this.created_at = created_at;
            this.updated_at = updated_at;
            this.auth = Auth.fromObject(auth);
        }
    }

    // Save Webhook to database
    async save() {

    }

    // Get calls associated to this Webhook
    async getCalls(): Promise<[Call]> {

        return [new Call()];
    }

    // Get all Webhooks
     static async getWebhooks(): Promise<[Webhook]>  {
        return [new Webhook('', '')];
    }

}

export default Webhook;