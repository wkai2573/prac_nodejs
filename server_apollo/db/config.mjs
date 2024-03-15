class Config {
	constructor() {
		const {env} = process;

		this.postgres = {
			host: process.env.DB_HOST,
			port: process.env.DB_PORT,
			user: process.env.DB_USER,
			password: process.env.DB_PASSWORD,
			database: process.env.DB_NAME,
		};
	}
}


const config = new Config();
export {config}