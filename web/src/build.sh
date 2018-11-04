#!/bin/bash

for proto in $(find . -name \*.proto); do
    protoc -I=. \
      --js_out=import_style=commonjs:. \
      --grpc-web_out=import_style=commonjs,mode=grpcwebtext:. \
      $proto
done
