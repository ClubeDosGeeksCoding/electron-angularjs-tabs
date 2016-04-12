"USE STRICT";
var app = angular.module('cdg',['angularUtils.directives.dirPagination']);

var sqlite = require('sqlite-sync');
sqlite.connect('model/database.db');