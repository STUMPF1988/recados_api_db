require('dotenv/config');

module.exports = {
    type: "postgres",
    // host: "ec2-44-193-111-218.compute-1.amazonaws.com",
    // port: 5432,
    // username: process.env.DB_USER,
    // password: process.env.DB_PASS,
    // database: process.env.DB_DATABASE,
    url: process.env.DATABASE_URL,
    synchronize: false,
    logging: false,
    entities:[ process.env.ENTITIES_DIR],
    cli: {
    entitiesDir: 'src/core/database/entities',
    migrationsDir: 'src/core/database/migrations'
    },
    migrations: [
        'src/core/database/migrations/**/*.ts'
    ],
    subscribers: [],
    extra: {
        ssl: {
            rejectUnauthorized: false,
        },
    },
 };