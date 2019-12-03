FROM node:12.6.0

RUN apt update
RUN apt install -y ffmpeg
RUN apt install -y flvmeta

WORKDIR /usr/app

COPY package.json .
RUN npm install --quiet

COPY . .