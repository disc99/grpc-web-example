#!/usr/bin/env bash

cd proxy
docker build -t helloworld/envoy -f ./envoy.Dockerfile .
docker run --name helloworld_envoy -d -p 8080:8080 helloworld/envoy

cd ..
./gradlew run
