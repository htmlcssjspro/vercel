export default function handler(req, res) {
    const { name = 'World' } = req.query;
    console.log('req: ', req);
    return res.send(`Hello ${name}!`);
}
