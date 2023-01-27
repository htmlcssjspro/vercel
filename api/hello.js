module.exports = (req, res) => {
    let name = 'anonymous';
    if (req.query.name) {
        name = req.query.name;
    } else if (req.body && req.body.name) {
        name = req.body.name;
    } else if (req.cookies.name) {
        name = req.cookies.name;
    }

    res.status(200).send(`Hello ${name}!`);
};


// export default function handler(req, res) {
//     const { name = 'World' } = req.query;
//     return res.send(`Hello ${name}!`);
// }
