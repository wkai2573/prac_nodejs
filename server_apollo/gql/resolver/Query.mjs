import {service} from './Query/service.js';
import * as user from './Query/user.mjs';
import * as hello from './Query/hello.mjs';
import * as me from './Query/me.mjs';
// import * as role from './Query/role.mjs';
// import * as folder from './Query/folder.mjs';
// import * as dashboard from './Query/dashboard.mjs';
// import * as feature from './Query/feature.mjs';
// import * as dbSetting from './Query/db_setting.mjs';
// import * as attachment from './Query/attachment.mjs';
// import * as scheduledReport from './Query/scheduled_report.mjs';

export default {
	service,
	...user,
	
	...hello,
	...me,

	// tableau: () => ({}),
	// ...dbSetting,
	// ...role,
	// ...folder,
	// ...dashboard,
	// ...feature,
	// ...attachment,
	// ...scheduledReport,
};
