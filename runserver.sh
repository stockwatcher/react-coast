#!/bin/bash

JS_MAIN="./example-main.js"
JS_BUNDLE="./example-bundle.js"
JS_BUNDLE_MAP="./example-bundle.js.map"
BABEL_PRESETS="es2015 react"

PIDS=()

if [ "$1" = "dev" ]; then

  # Run development scripts in the background

  # Watch for js changes and pipe them through Browserify
  # Exorcist is for extracting the map file out of the js
  watchify -t [ babelify --presets [ $BABEL_PRESETS ] ] $JS_MAIN --outfile 'exorcist '$JS_BUNDLE_MAP' > '$JS_BUNDLE --debug --verbose &
  PIDS+=($!)

  # Watch for sass changes
  sass --watch sass:rc-gen/css &
  PIDS+=($!)
fi

if [ "$1" != "dev" ]; then
  echo "Updating npm packages..."
  npm update && npm prune
  echo "Done updating npm packages."

  echo "Building bundle.js..."
  browserify -t [ babelify --presets [ $BABEL_PRESETS ] ] $JS_MAIN --outfile $JS_BUNDLE --verbose
  echo "Done building bundle.js"
fi

# Kill all child script processes when the script exits
for pid in ${PIDS[@]}; do
  trap "kill ${pid}" SIGINT SIGTERM EXIT
done

if [ "$1" == "clean" ]; then
  exit 0
fi

node server.js

