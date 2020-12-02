import { MongoClient } from 'mongodb';

export const db = {
    _database: null,
    connect: async function(url, dbName) {
        const client = await MongoClient.connect(url, {
            poolSize: 10,
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        this.database = client.db(dbName);
    }, 
    getConnection: function() {
        if (!this.database) {
            console.log('You need to call the connect() function first!');
            process.exit(1);
        }

        return this.database;
    },
    close: function() {
        this.database.close();
        this.database = null;
    }
}