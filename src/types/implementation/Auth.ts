import XAuth from "../abstract/XAuth";
import XCall from "../abstract/XCall";

class Auth extends XAuth { // no db

    async authenticate(call: XCall): Promise<boolean> {
        return true;
    }

    static fromObject(data: object) : Auth {
        return new Auth('', '', '');
    }
}

export default Auth;