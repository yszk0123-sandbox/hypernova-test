import { renderReact } from 'hypernova-react';
import * as hypernova from 'hypernova/server';
import * as path from 'path';

const createGetComponent = (files: any, vmOptions?: any) => {
  const getComponent = hypernova.createGetComponent(files, vmOptions);
  return (name: string) => renderReact(name, getComponent(name)[name]);
};

hypernova({
  getComponent: createGetComponent({
    App: path.resolve(path.join('dist', 'components', 'App.js'))
  }),
  devMode: true,
  host: 'localhost',
  port: 4000
});
