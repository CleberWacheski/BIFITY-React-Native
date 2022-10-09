import axios from "axios";

export const api = axios.create({
    baseURL: 'https://rest.coinapi.io/v1/',
    headers: {
        'X-CoinAPI-Key': 'D72FC868-11B9-468B-B400-5DE5E3F69908',
        Accept: 'application/json',
       // 'Accept-Encoding': 'deflate,gzip'
    }
})



//C55D21BA-16C4-4076-A2C1-135ACB9C6F3C
//CB118C29-D44D-4CCB-92A3-E975DBF1AD06
//D72FC868-11B9-468B-B400-5DE5E3F69908