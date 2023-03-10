const drainJson = req =>
    new Promise((resolve) => {
        let data = '';
        req.on('data', (chunk) => {
            data += chunk;
        });
        req.on('end', () => {
            resolve(JSON.parse(data));
        });
    });


export default async function handler(req, res) {
    const getKeys = obj => Object.keys(obj);


    req.query;
    req.body;
    req.cookies;
    req.method;
    req.url;
    req.statusCode;
    req.statusMessage;
    req.client;
    // console.log('req.client: ', getKeys(req.client));

    console.log('req.client.server: ', req.client.server);

    return res.json({
        hello:         'Hello, Vercel!!!',
        url:           req.url,
        method:        req.method,
        statusCode:    req.statusCode,
        statusMessage: req.statusMessage,
    });
}

function handlerExample(req, res) {
    req.query; // An object containing the request's query string, or {} if the request does not have a query string.
    req.body; // An object containing the body sent by the request, or null if no body is sent.
    req.cookies; // An object containing the cookies sent by the request, or {} if the request contains no cookies.

    const reqKeys =  [
        '_readableState', '_events', '_eventsCount', '_maxListeners', '_consuming', '_dumped',
        'httpVersionMajor', 'httpVersionMinor', 'httpVersion',
        'rawHeaders', 'rawTrailers',
        'complete',
        'aborted',
        'upgrade',
        'socket',
        'url',
        'method',
        'statusCode', 'statusMessage',
        'client',
        'query',
        'body',
        'cookies',
    ];

    const code = 200;
    const body = req.body;
    const obj = {};
    const url = '';
    res.status(code); // A function to set the status code sent with the response where code must be a valid HTTP status code. Returns res for chaining.
    res.send(body); // A function to set the content of the response where body can be a string, an object or a Buffer.
    res.json(obj); // A function to send a JSON response where obj is the JSON object to send.
    res.redirect(url); // A function to redirect to the URL derived from the specified path with status code "307 Temporary Redirect".
    res.redirect(code, url); // A function to redirect to the URL derived from the specified path, with specified HTTP status code.

    return res.json(req);
}
