import { Pool } from 'pg';


const connectionString = 'postgres://uspfwzld:NBPi5-vRqSeptOqYfrDd_ouQDhUvc9bq@motty.db.elephantsql.com/uspfwzld';
const db = new Pool({ connectionString });

export default db;