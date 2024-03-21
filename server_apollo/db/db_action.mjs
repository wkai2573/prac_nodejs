import pg from 'pg';
import {config} from './config.mjs';

class DbAction {
	constructor() {
		this.client = new pg.Client(config.postgres);
		this.connect();
	}

	async connect() {
		try {
			await this.client.connect();
			console.log('Connected to PostgreSQL database');
		} catch (error) {
			console.error('Error connecting to PostgreSQL database:', error);
		}
	}

	async disconnect() {
		try {
			await this.client.end();
			console.log('Disconnected from PostgreSQL database');
		} catch (error) {
			console.error('Error disconnecting from PostgreSQL database:', error);
		}
	}

	// async query(sql, params) {
	// 	try {
	// 		const result = await this.client.query(sql, params);
	// 		return result.rows;
	// 	} catch (error) {
	// 		console.error('Error executing query:', error);
	// 		throw error;
	// 	}
	// }
}

export {DbAction};