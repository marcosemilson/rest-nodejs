import {Pool} from 'pg';

const connectionString = 'postgres://ykynqswz:4ca7a-EdE0Ij4Sywf3oBADm1CVqW3YUa@kesavan.db.elephantsql.com/ykynqswz';

const db = new Pool({connectionString});

export default db;  