#!/bin/sh

# ==== DEPLOYMENT SCRIPT ====
# This deployment script does the following

echo " "
echo "============== Starting build... =============="

ENV_VAR=$1
STATUS="STARTED"

set -e


if [ -z "$ENV_VAR" ]
	then
		echo "!!! WARNING: Environment not specified. STAGING or LIVE !!!"
		STATUS="FAILED_ENV_VAR"
	else
		case $ENV_VAR in
			"LIVE")
				echo 'NPM install'

                sudo npm install
				echo 'App build Live'

                sudo npm run build

				echo 'Change build permisson'

				sudo chmod -R 755 build

				echo 'Permisson changed'

				STATUS="SUCCESS"
			;;
			"STAGING")
				echo 'NPM install'

                sudo npm install
				echo 'App build Staging'

                sudo npm run build

				echo 'Change build permisson'

				sudo chmod -R 755 build

				echo 'Permisson changed'

				STATUS="SUCCESS"
			;;
		esac
fi

if [ $STATUS = "SUCCESS" ]
	then
		echo " "
		echo "=============== DEPLOYMENT SUCCESS =============="
		echo "=================   o-(^_^)-o   ================="
		echo "================================================="
		echo " "

		exit 0
	else
		echo " "
		echo "============== DEPLOYMENT FAILED =============="
		echo "ERROR STATUS = $STATUS"
		echo "==============================================="
		exit 1
	fi