const express = require('express');
const Renderer = require('hypernova-client');
const devModePlugin = require('hypernova-client/plugins/devModePlugin');

const app = express();

const renderer = new Renderer({
  url: 'http://localhost:4000/batch',
  plugins: [devModePlugin]
});

app.get('/', (req, res) => {
  const jobs = {
    App: { name: req.query.name || 'Stranger' }
  };

  renderer
    .render(jobs)
    .then(html => res.send(`${html}<script src="/app.js"></script>`));
});

app.use(express.static('dist'));

app.listen(4001, () => console.log('Now listening'));
