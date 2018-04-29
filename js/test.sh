#!/bin/bash
set -e

PATH_SET=false
file=""

while getopts d: option
do
    case "${option}" in
        d) file="${OPTARG}"; PATH_SET=true ;;
    esac
done

if $PATH_SET; then
    path=( day*${file}*.js )
    node $path
else
    array_of_files=( day*.js )
    for file_name in "${array_of_files[@]}"
    do
        node $file_name || exit 1
    done
fi
