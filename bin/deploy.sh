apt-get update -y && apt-get upgrade -y
apt-get install openssl -y
apt-get install openssh-client -y
echo "inserting the image version in docker-compose template"
sed -i "s#faustologic\/wps-landing#$CONTAINER_NAME:$VERSION#" template/docker-compose.yml.template

echo "copying docker-compose"
scp template/docker-compose.yml.template $DEPLOY_USER@$DEPLOY_HOST:$DOCKER_COMPOSE_FILE

echo "pulling latest version of the code"
ssh $DEPLOY_USER@$DEPLOY_HOST "source ~/.profile && docker-compose -f $DOCKER_COMPOSE_FILE  pull app"

echo "starting the new version"
ssh $DEPLOY_USER@$DEPLOY_HOST "source ~/.profile && docker-compose -f $DOCKER_COMPOSE_FILE  up -d app"

echo "removing old and unsed images"
ssh $DEPLOY_USER@$DEPLOY_HOST "docker images --filter 'dangling=true' --format '{{.ID}}' | xargs docker rmi"

echo "success!"

exit 0
