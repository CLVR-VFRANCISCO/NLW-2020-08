//CONEXÃO COM BANCO DE DADOS (SQLITE)
const Database = require('sqlite-async')

function execute(db) {
    return db.exec(`
    create table if not exists proffy_tb (
        id integer primary key autoincrement,
        name text,
        avatar text,
        whatsapp text,
        bio text);
    
    create table if not exists class_tb (
        id integer primary key autoincrement,
        proffy_id integer,
        subject integer,
        cost text);

    create table if not exists class_schedule_tb (
        id integer primary key autoincrement,
        class_id integer,
        weekday integer,
        time_from integer,
        time_to integer);
    `)
}


module.exports = Database.open(__dirname + '/database.sqlite').then(execute)

