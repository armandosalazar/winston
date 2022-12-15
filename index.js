const app = require('./src/app');
const config = require('./config.json');

app.listen(process.env.PORT || config.port, function () {
	console.log(`Server listen on port ${process.env.PORT || config.port}`);
});