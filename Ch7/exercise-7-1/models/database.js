/*
 * Copyright 2020 Elad Elrom, All Rights Reserved.
 * Code licensed under the BSD License:
 * @author Elad Elrom <elad.ny...gmail.com>
 */

// models/database.js

let usersSchema = {
    username: 'String',
    email: 'String',
    passwordHash: 'String',
    passwordSalt: 'String',
    lastLoginDate: 'String',
    attempt: 'Number',
    signDate: 'String',
    emailEachLogin: 'Boolean',
    loginToken: 'String',
    phone: 'String'
};

if (typeof exports != 'undefined' ) {
    exports.usersSchema = usersSchema;
}