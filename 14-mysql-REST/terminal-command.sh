# Install Docker www.docker.com
# -d      will run in background
# --name  give it a name to refer to later on
docker run -d --name docker-mysql -p 3306:3306 -e MYSQL_ALLOW_EMPTY_PASSWORD=yes -e MYSQL_DATABASE=test mysql

# now you can stop, start & remove the DB by name
docker stop docker-mysql
docker start docker-mysql
docker rm docker-mysql

# you can also have multiple databases
# you just can't run more than one at once on the same port
docker run -d --name docker-mysql2 -p 3307:3306 -e MYSQL_ALLOW_EMPTY_PASSWORD=yes -e MYSQL_DATABASE=test mysql
# docker-mysql2 is now running on port 3307

# this shows any docker containers running
docker ps

# connect using sequel pro (mac) or MySQL Workbench (mac/pc)


# other ways to install mysql
# go to mysql.com and use the installer
# on Mac, use homebrew (brew.sh): brew install mysql
# I also recommend using brew services to control, start, stop mysql server
