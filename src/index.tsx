import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';

import 'styles/global.module.scss';
import App from './pages/index';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <RecoilRoot>
    <App />
  </RecoilRoot>
);
