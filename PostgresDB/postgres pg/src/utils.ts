import { Client } from 'pg';

export async function getClient() {
    const client = new Client("postgres://pgsyjuxr:hTTM72KWCiJybG_6R6dBsbj7gWo3Woea@kiouni.db.elephantsql.com/pgsyjuxr");
    await client.connect();
    return client;
}

