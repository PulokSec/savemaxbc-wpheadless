import mysql, { Connection, ConnectionOptions } from 'mysql2/promise';

export async function query({
  query,
  values = [],
}: {
  query: string;
  values?: any[];
}) {
  const dbconnection: Connection = await mysql.createConnection({
    host: process.env.NEXT_PUBLIC_MYSQL_HOST,
    user: process.env.NEXT_PUBLIC_MYSQL_USER,
    port: process.env.NEXT_PUBLIC_MYSQL_PORT,
    password: process.env.NEXT_PUBLIC_MYSQL_PASSWORD,
    database: process.env.NEXT_PUBLIC_MYSQL_DATABASE,
  } as ConnectionOptions);

  try {
    const [results] = await dbconnection.execute(query, values);
    dbconnection.end();
    return results;
  } catch (error: unknown) {
    console.log(error);
    if (error instanceof Error) {
      throw error;
    }
    throw new Error('Unknown error occurred');
  }
}
