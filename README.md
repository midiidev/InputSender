# InputSender

a cool way to send keyboard inputs to your friend's pc!!!

This is Vue. Not fake HTML.
![daeinkord is stupid](https://files.catbox.moe/wv3t09.png)

## Setup

1. Port forward `3000` with `TCP`
2. Generate a certificate for https from within the `Backend/` folder (`openssl req -nodes -new -x509 -keyout server.key -out server.cert`)
3. Run the express app located in `Backend/`
4. Send your IP to your friend (be careful with this)

## Usage

- Open the [official frontend](https://inputsender.fireash.xyz) in your browser, create your own, or directly send `POST` requests to the api
- `Send text` will send whatever you type
- the W, A, S, D, and SPACE buttons are provided for g a m i n g

## Troubleshooting

i have put way too much effort into this readme

- Java is required. I'm not sure what version, so make sure you have a relatively recent version installed, I guess. This was tested with OpenJDK 19, but any version in the last 4 years should probably work.
- Node.js is obviously required. I also don't know which version so try to make sure it's up to date, I guess.
- installer openssl to create certificate if you don't have it installed already
- i am losing my sanity
