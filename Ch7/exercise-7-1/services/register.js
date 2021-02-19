// src/services/register.js

'use strict';

let usersSchema = require("../models/database").usersSchema,
    logger = require('../utils/log.js').logger,
    moment = require("moment"),
    async = require('async'),
    CryptoJS = require('crypto-js'),
    params,
    user,
    isUserExists = false,
    connector,
    users;

function register(data, dbconnectorCallBackToRooms) {

    logger.info('---------- register ----------');
    connector = this.getConnector();
    params = data.query || data.params;
    params.member_id = -1;

    let operations = [];
    operations.push(readUserInfoFromDB);
    operations.push(insertUser);
    operations.push(getUserId);

    async.series(operations, function (err, results) {

        let retData = {
            "exist_member_id": params.member_id,
            "isUserExists": isUserExists,
            "user": user
        };

        user = null;
        users = null;
        isUserExists = false;
        params = null;

        if (err) {
            logger.info(err);
            dbconnectorCallBackToRooms(data, {status: 'error', error_message: err, params: retData});
        } else {
            dbconnectorCallBackToRooms(data, {status: 'success', params: retData});
        }
    });
}

function readUserInfoFromDB(callback) {
    logger.info('---------- register :: readUserInfoFromDB ----------');
    if (connector.isModelExists('users')) {
        users = connector.getModel('users');
    } else {
        let schema = connector.setSchema(usersSchema);
        users = connector.setModel('users', schema);
    }
    let findObject = {
        username: params.name,
    };
    users.find(findObject)
        .then((doc) => {
            if (doc.length > 0) {
                isUserExists = true;
                params.member_id = doc[0]._id;
                logger.info('isUserExists');
            } else {
                isUserExists = false;
            }
            callback(null, doc);
        })
        .catch((err) => {
            logger.info(err);
            params.member_id = -1;
            callback(err.message, null);
        });
}

function insertUser(callback) {
    logger.info('---------- register :: insertUser isUserExists :: ' + isUserExists + ', member_id: ' + params.member_id);
    if (isUserExists) {
        callback('error', 'user_exists_already');
    } else {
        let passwordEncrypt;
        let secretPassphrase = 'mySecretPassphrase';
        if (params.password === 'isDebug') {
            passwordEncrypt = CryptoJS.AES.encrypt("123456", secretPassphrase);
            let passwordEncryptEncodeURI = encodeURIComponent(passwordEncrypt);
            logger.info('debug passwordEncryptEncodeURI: ' + passwordEncryptEncodeURI);
        } else {
            passwordEncrypt = params.password;
        }

        let user_password = (CryptoJS.AES.decrypt(passwordEncrypt, secretPassphrase)).toString(CryptoJS.enc.Utf8),
            pass_salt = Math.random().toString(36).slice(-8),
            encryptedPassword = CryptoJS.AES.encrypt(user_password, pass_salt),
            now = moment().format();

        logger.info('---------- register :: insertUser :: user_password : ' + user_password);

        let newUsers = new users({
            username: (params.name).toLowerCase(),
            email: (params.email).toLowerCase(),
            passwordHash: encryptedPassword,
            passwordSalt: pass_salt,
            lastLoginDate: now,
            attempt: 0,
            signDate: now,
            emailEachLogin: true,
            loginToken: '',
            phone: ''
        });

        newUsers.save(function (err) {
            if (err) {
                logger.info('Error' + err.message);
                callback(err.message, null);
            } else {
                callback(null, 'success');
            }
        });
    }
}

function getUserId(callback) {
    if (isUserExists) {
        callback('error', 'user_exists_already');
    } else {
        logger.info('register :: getUserId');

        users.find({
            username: params.name,
        })
        .then((doc) => {
            if (doc.length > 0) {
                params.member_id = doc[0]._id;
                callback(null, doc);
            } else {
                callback('error username return no results');
            }
        })
        .catch((err) => {
            logger.info(err);
            callback(err.message, null);
        });
    }
}

module.exports.register = register;
