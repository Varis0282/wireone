import LogsModel from '../models/logs.js';
import _ from 'lodash';
import { successObj, errorObj } from '../../utils/settings.js';
import { FilterTable } from '../../utils/table.js'

const exp = {
    add: (data) => {
        return new Promise(async (resolve) => {
            try {
                let newLogs = new LogsModel();
                _.each(data, (value, key) => {
                    newLogs[key] = value;
                });
                let result = await newLogs.save();
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
                let x = await FilterTable(LogsModel, {
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
    getById: (data) => {
        return new Promise(async (resolve) => {
            try {
                if (!data.logId) {
                    return resolve({ ...errorObj, message: 'Log ID is required' });
                }
                let log = await LogsModel.findById(data.logId);
                if (!log) {
                    return resolve({ ...errorObj, message: 'Log not found' });
                }
                return resolve({ ...successObj, data: log });
            } catch (error) {
                console.log(error)
                return resolve({ ...errorObj, message: error.message });
            }
        })
    }
};


export default exp;