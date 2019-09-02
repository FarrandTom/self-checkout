# our base image
FROM ubuntu:18.04

# upgrade pip
RUN apt-get update -y && \
    apt-get install -y python3 && \
    apt-get install -y python3-pip python3-dev && \
    pip3 install --upgrade pip && \
    apt-get install curl -y && \
    curl -sL https://deb.nodesource.com/setup_10.x | bash - && \
    apt-get install -y nodejs

# install Python modules needed by the Python app
COPY . /usr/src/app/

#RUN apt-get install screen -y
# COPY requirements.txt /usr/src/app/
RUN pip3 install --no-cache-dir -r /usr/src/app/requirements.txt

RUN npm install --prefix /usr/src/app/

EXPOSE 5000
EXPOSE 3000


#CMD ["cd", "/usr/src/app/backend_tf"]

#CMD ["python3", "/usr/src/app/backend_tf/app.py", "&"]
CMD ["npm", "start", "--prefix", "/usr/src/app/"]
