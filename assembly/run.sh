#!/bin/bash
yasm -f macho64 -o ./bin/$1.o $1.asm
ld -o ./bin/$1 -macosx_version_min 10.7 ./bin/$1.o

./bin/$1
