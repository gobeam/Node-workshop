# Introduction to Node.js
Node.js is an open-source and cross-platform JavaScript runtime environment.
it runs the V8 JavaScript engine. V8 is a javascript engine. Node extends and embeds V8. Chrome & Electron also extends and embeds V8. A Node.js app is run in a single process, without creating a new thread for every request. Node.js libraries are written using non-blocking paradigms. Non-blocking is better for performance that's why Node.js is considered performant. Non blocking is also called asynchronous.

## Node.js thread
Node is Single Threaded.
Node uses threads but has only one main thread. It uses events to sync state. Code does not block means there is always something running. Node makes it easy to write performant code.
Node/chrome uses thread but has one main thread and uses events to sync state. Asynchronous behaviour is provided by events and it is managed by Event loop.

## NPM
npm, short for Node Package Manager is an online repository for the publishing of open-source Node.js projects and it is also a command-line utility for interacting with said repository that aids in package installation, version management, and dependency management.

## Reference
[Introduction to Node.js](https://nodejs.dev/learn)
