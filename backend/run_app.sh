#/bin/bash

monitor=`ps -ef | grep gunicorn | wc -l ` 
if [ $monitor -eq 1 ] 
then
    #gunicorn -w 3 -b 10.0.6.87:5000 "flaskr:create_app()" > log.txt 2>&1 &
    export FLASK_APP="flaskr:create_app()"
    export FLASK_ENV=development
    flask init-db
    gunicorn -w 3 -b 127.0.0.1:5000 "flaskr:create_app()" > log.txt 2>&1 &
else
    echo "Flask service is running"
fi
