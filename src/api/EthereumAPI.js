import * as Constants from '../utils/Constants';
import {fetchRetry} from '../utils/Fetch';

export async function getCurrentBalance(address) {
    const data =await fetchRetry(Constants.URL, {
        method: "POST",
        body: JSON.stringify({
            "jsonrpc":"2.0",
            "id":1,
            "method":Constants.METHOD_ETHER_BALANCE,
            "params":[address,"latest"]
        }),
    });
    return data.result;
}

export async function getCurrentBlock() {
    const data =await fetchRetry(Constants.URL, {
        method: "POST",
        body: JSON.stringify({
            "jsonrpc":"2.0",
            "id":1,
            "method":Constants.METHOD_CURRENT_BLOCK,
            "params":[]
        }),
    });
    return data.result;
}
