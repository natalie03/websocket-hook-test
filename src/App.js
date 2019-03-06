import React, { useEffect, useState } from 'react';
import { PageContent } from '_components';
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

  receiveMessage(setMessage);

  const pages = mockData.data.pages;
  return (
    <div className="App">
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
    </div>
  )
}

export default App;