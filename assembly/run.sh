#!/bin/bash
yasm -f macho64 $1.asm && ld -o $1 -macosx_version_min 10.7 $1.o && ./$1
