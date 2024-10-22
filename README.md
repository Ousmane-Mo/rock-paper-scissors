## Getting Started

First, create an next app and clone this project
```bash 
npx create-next-app@latest
cd my-app

git clone https://github.com/Ousmane-Mo/rock-paper-scissors.git

```
Then, Install json-server
```bash
npm install json-server
```

Finally, run the development server and json-server to access 'database':
you need to use the parameters -p to change port or else it will be on port 3000
which is the same port used by the app
```bash
npm run dev
json-server -p 4000 --watch db.json
```

You can now open [http://localhost:3000](http://localhost:3000) with your browser to see the result.