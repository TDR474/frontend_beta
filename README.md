
### Using NPM

3. Make sure you have [Node.js](https://nodejs.org/en/) installed. Make sure the installed Node version is >= 8.10 and of npm >= 5.6

4. After installing Node.js, open a terminal and run `npm install` in the main `volt-react-dashboard/` folder to download all project dependencies. You'll find them in the `node_modules/` folder.

```
npm install
```

5. Then start the app in development mode by running the following command in terminal:

```
npm run start
```

6. Open http://localhost:3000 to view it in the browser. Any changes you make to the code will be automatically reflected in the browser.

7. If you want to generate the production files, change the `homepage` value from the `package.json` to the domain name that the app will be hosted on, and then run the following command in the terminal:

```
npm run build
```

