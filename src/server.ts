import { renderReact } from 'hypernova-react';
import * as hypernova from 'hypernova/server';

hypernova({
  getComponent(name) {
    if (name === 'App') {
      const { App } = require('../dist/components/App.js');
      return renderReact('App', App);
    }
    return null;
  },
  devMode: true,
  host: 'localhost',
  port: 4000
});
