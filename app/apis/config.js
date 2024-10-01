import ConfigCtlr from '../controllers/config.js';
import authentication from '../middlewares/authentication.js';

export default (app) => {
    app.post('/api/config/add', authentication, async (req, res) => {
        const { body, user } = req;
        body.createdBy = user._id;
        const result = await ConfigCtlr.add(body);
        res.json(result);
    })
    app.post('/api/config/list', authentication, async (req, res) => {
        const { body } = req;
        const result = await ConfigCtlr.list(body);
        res.json(result);
    })
    app.put('/api/config/update', authentication, async (req, res) => {
        const { body } = req;
        const result = await ConfigCtlr.update(body);
        res.json(result);
    })
    app.delete('/api/config/delete', authentication, async (req, res) => {
        const { body } = req;
        const result = await ConfigCtlr.delete(body);
        res.json(result);
    })
    app.post('/api/config/:_id', authentication, async (req, res) => {
        const { params } = req;
        const result = await ConfigCtlr.getById(params);
        res.json(result);
    })
}