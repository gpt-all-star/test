#!/bin/bash

# Check if node is installed
command -v node >/dev/null 2>&1 || { echo >&2 "Node.js is required but it's not installed. Aborting."; exit 1; }

# Check if npm is installed
command -v npm >/dev/null 2>&1 || { echo >&2 "npm is required but it's not installed. Aborting."; exit 1; }

# Install project dependencies
npm install

# Start the application
npm start