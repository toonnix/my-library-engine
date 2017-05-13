// import * as fs from "fs";
// import * as path from "path";
import * as Sequelize from 'sequelize'
const config = require('../config');


// let sequelize = module.exports;
//
// const basename = path.basename(module.filename);
const sequelize = new Sequelize(config.database);

// const db = {
//     sequelize: sequelize,
//     Sequelize: Sequelize
// };
//
// fs
//     .readdirSync(__dirname)
//     .filter(function (file) {
//         return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js')
//     })
//     .forEach(function (file) {
//         const model = sequelize['import'](path.join(__dirname, file))
//         // NOTE: you have to change from the original property notation to
//         // index notation or tsc will complain about undefined property.
//         db[model['name']] = model
//     });
//
// Object.keys(db).forEach(function (modelName) {
//     if (db[modelName].associate) {
//         db[modelName].associate(db)
//     }
// });

export default {
    sequelize,
    Sequelize
};
