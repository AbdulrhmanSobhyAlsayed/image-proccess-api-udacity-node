# Simple Image processing API

## First assignment in Advanced web development course in Udacity powered by FWD

this is a simple API for resizing the image developed by Node js and Typescript using:

- Express for the webserver
- Sharp for image resizing
- Jasmine and supertest for testing

## Installation

in order to test this application you have to follow these steps:

clone the project

```sh
git clone https://github.com/AbdulrhmanSobhyAlsayed/image-proccess-api-udacity-node.git
```

move to the folder

```sh
cd image-proccess-api-udacity-node
```

Install the dependencies and devDependencies and start the server.

```sh
npm install
```

run the server

```sh
npm run start
```

the server will run on port 3000 and in order to test it visit this link http://localhost:3000/resize?file=first&width=100&height=200

you must pass three parameters to the URL

- file: choose one of these files [first, second, third, fourth, fifth]
- width: the width of the image (mus be number)
- height: the height of the image (mus be number)

to build the project

```sh
npm run build
```

and the built project will be in dist folder

to run test of the project

```sh
npm run test
```
