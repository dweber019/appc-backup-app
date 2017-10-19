# Automatic backup job - NodeJs
This app is running on the Swisscom App Cloud and creates and deletes backups for databases specified in `src/config.js`.

## Prerequisites
### Manuel
1. Install [NodeJS](https://nodejs.org/en/) / `brew install node`
2. npm install

## Build
### Browser
1. To start locally run. ```$ node app.js```
2. app runs locally

## Release
check if correct ENV variable are set
open terminal

```
cd <path/to/project>
cf push <your-app-name-of-choice>
```

E.g on Jenkins:

```
cf api https://api.lyra-836.appcloud.swisscom.com
cf auth $CF_USERNAME $CF_PASSWORD
cf target -o <your organization> -s <your space>
cf push <your-app-name-of-choice>
cf set-env <your-app-name-of-choice> USERNAME $CF_USERNAME
cf set-env <your-app-name-of-choice> PASSWORD $CF_PASSWORD
cf set-env <your-app-name-of-choice> MARIADB_UID <UID>
cf set-env <your-app-name-of-choice> MONGODB_UID <UID>
....
....
cf restage <your-app-name-of-choice>
```
where `$CF_USERNAME` and `$CF_PASSWORD`b are bound by Jenkins

## ENV Variables
Configurable in Swisscom Developer Portal or via manifest.yml

- **CRON_EXPRESSION**: cron expression for backup schedule (ex. 0 1 * * * to run the job every day at 01:00)
- **BACKUP_COUNT**: how many backups should be stored (MAX 30)
- **USERNAME**: username swisscom app cloud developer portal
- **PASSWORD**: password swisscom app cloud developer portal
- **CF_HOST_URL**: "https://api.lyra-836.appcloud.swisscom.com" (internal cloud: https://api.scapp-console.swisscom.com)
- **CF_LOGIN_URL**: "https://login.lyra-836.appcloud.swisscom.com/oauth/token" (internal cloud: https://login.scapp-console.swisscom.com/oauth/token)
- **MARIADB_UID**: Navigate to the db to backup (console.developer.swisscom.com or scapp-console.swisscom.com). The UID is shown in the URL.
- **MONGODB_UID**: same
