import React, { useEffect, useState } from 'react';
import { IdleTimeoutWrapper, PageContent } from '_components';
import { mockData}  from '_data';
import { receiveMessage } from '_utils/sockets.js';
import './index.scss';

function App() {
  const [pageIndex, setPageIndex] = useState(0);
  const [message, setMessage] = useState({});

  useEffect(() => {
    let timer = setTimeout(() => setMessage({}), 2000)
    return () => { clearTimeout(timer) }
  },[message]);

  function handleTimeout(message) {
    console.log(message);
  }

  receiveMessage(setMessage);

  const pages = mockData.data.pages;
  return (
    <IdleTimeoutWrapper sendMessage={handleTimeout} timeBeforeReset={5} messageOnTimeout="Timing out" messageOnActivate="Coming Back!">
      {
        message &&
        <div className="alert">{message.message}</div>
      }
      <PageContent {...pages[pageIndex]} />
      {pageIndex < pages.length &&
        <button
          onClick={() => setPageIndex(pageIndex + 1)}
        >
          {pages[pageIndex].button_text}
        </button>
      }
    </IdleTimeoutWrapper>
  )
}

export default App;