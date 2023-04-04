// db.js

import mysql from 'serverless-mysql';

const db = mysql({
  config: {
//    host: process.env.MYSQL_HOST,
//    port: process.env.MYSQL_PORT,
//    database: process.env.MYSQL_DATABASE,
//    user: process.env.MYSQL_USER,
//    password: process.env.MYSQL_PASSWORD
    host: 'ssgvip.com',
    port: 7833,
    database: 'project_ssg',
    user: 'trandh4',
    password: 'Shout4_trandh4_GO_ME'
  }
});

// async function executeQuery({ query, values}:{query:string, values?:string[] } ): Promise<unknown> {
//   try {
//     const results = await db.query(query, values);
//     await db.end();
//     console.log("results")
//     return results;
//   } catch (error) {
//     return { error };
//   }
// }

async function executeQuery({ query, values }) {
    try {
        const results = await db.query(query, values);
        await db.end();
        console.log("results")
        return results;
    } catch (error) {
    return { error };
    }
}

export default executeQuery;