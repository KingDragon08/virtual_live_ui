import Controller from '@components/Controller';
import Provider from './Provider';
import Monitor from '@components/Monitor';
import EventBus from '@components/EventBus';
import Draw from '@components/Draw';
import Announce from '@components/Announce';

function App() {

  return (
    <Provider>
      <Draw />
      <Controller />
      <Monitor />
      <EventBus />
      <Announce />
    </Provider>
  );
}

export default App;
