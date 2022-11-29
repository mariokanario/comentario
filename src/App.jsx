import store from './reducers/index'
import { Provider } from 'react-redux'

import Layout from './components/Layout'

function App() {
  return (
    <Provider store={store}>
      <Layout />
    </Provider>

  );
}

export default App;
