import ConfigModel from '../models/config.js';
import LogsCtrl from './logs.js';
import _ from 'lodash';
import { successObj, errorObj } from '../../utils/settings.js';
import { FilterTable } from '../../utils/table.js'

const exp = {
    add: (data) => {
        return new Promise(async (resolve) => {
            try {
                let newConfig = new ConfigModel();
                _.each(data, (value, key) => {
                    newConfig[key] = value;
                });
                let result = await newConfig.save();
                await LogsCtrl.add({
                    message: `Configuration added by ${data.userName}`,
                    action: 'add',
                    configId: result._id,
                    userId: data.userId
                })
                return resolve({ ...successObj, data: result });
            } catch (error) {
                console.log(error)
                return resolve({ ...errorObj, message: error.message });
            }
        });
    },
    list: (data) => {
        return new Promise(async (resolve) => {
            try {
                let x = await FilterTable(ConfigModel, {
                    sortField: 'createdAt',
                    sortOrder: 'desc',
                    ...data
                });
                return resolve({ ...successObj, data: x });
            } catch (error) {
                console.log(error)
                return resolve({ ...errorObj, message: error.message });
            }
        });
    },
    delete: (data) => {
        return new Promise(async (resolve) => {
            try {
                if (!data.configId) {
                    return resolve({ ...errorObj, message: 'Configuration ID is required' });
                }
                let config = await ConfigModel.findByIdAndDelete(data.configId);
                if (!config) {
                    return resolve({ ...errorObj, message: 'Configuration not found' });
                }
                return resolve({ ...successObj, data: config });
            } catch (error) {
                console.log(error)
                return resolve({ ...errorObj, message: error.message });
            }
        })
    },
    update: (data) => {
        return new Promise(async (resolve) => {
            try {
                if (!data.configId) {
                    return resolve({ ...errorObj, message: 'Configuration ID is required' });
                }
                let config = await ConfigModel.findById(data.configId);
                if (!config) {
                    return resolve({ ...errorObj, message: 'Configuration not found' });
                }
                _.each(data, (value, key) => {
                    config[key] = value;
                });
                let result = await config.save();
                // save only if there is a change
                if (JSON.stringify(config) !== JSON.stringify(result)) {
                    await LogsCtrl.add({
                        message: `Configuration updated by ${data.userName}`,
                        action: 'update',
                        configId: data.configId,
                        userId: data.userId
                    })
                }
                return resolve({ ...successObj, data: result });
            } catch (error) {
                console.log(error)
                return resolve({ ...errorObj, message: error.message });
            }
        })
    },
    getById: (data) => {
        return new Promise(async (resolve) => {
            try {
                if (!data.configId) {
                    return resolve({ ...errorObj, message: 'Configuration ID is required' });
                }
                let config = await ConfigModel.findById(data.configId);
                if (!config) {
                    return resolve({ ...errorObj, message: 'Configuration not found' });
                }
                return resolve({ ...successObj, data: config });
            } catch (error) {
                console.log(error)
                return resolve({ ...errorObj, message: error.message });
            }
        })
    }
};


export default exp;