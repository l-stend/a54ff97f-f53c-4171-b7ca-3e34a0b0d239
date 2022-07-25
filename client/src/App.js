import './App.css';
import EventsContainer from './components/EventsContainer';
import { getAllEvents } from './features/all-events/allEventsSlice';
import axios from 'axios';
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <div className='App'>Blanalala</div>
      <EventsContainer />
      <ToastContainer
        position='bottom-center'
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme='dark'
      />
    </>
  );
}

export default App;
