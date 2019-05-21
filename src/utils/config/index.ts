import appRootPath from 'app-root-path';
import fs from 'fs';
import path from 'path';

let configFile: string;
if (process.env.NODE_ENV) {
    configFile = `${process.env.NODE_ENV}.json`;
} else {
    throw new Error('NODE_ENV not defined');
}
configFile = path.join(appRootPath.path, '/config', configFile);

const configData = fs.readFileSync(configFile);

export const config = JSON.parse(configData.toString());
