import LogsCtrl from '../controllers/logs.js';
import authentication from '../middlewares/authentication.js';

export default (app) => {
    app.post('/api/logs/list', authentication, async (req, res) => {
        const { body } = req;
        const result = await LogsCtrl.list(body);
        res.json(result);
    })
    app.post('/api/logs/:_id', authentication, async (req, res) => {
        const { params } = req;
        const result = await LogsCtrl.getById(params);
        res.json(result);
    })
}