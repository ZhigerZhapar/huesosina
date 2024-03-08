import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createRoot } from 'react-dom';
import { Provider } from 'react-redux';
import store from './app/store';
import Page from './Home/categoryPage/categoryPage.jsx';
import Page2 from './Home/page2/page2.jsx';
import Page3 from './Home/page3/page3.jsx';
import Page4 from './Home/page4/page4.jsx';
import Search from './components/Input/Input.jsx';
import './index.css';
import SortedPosts from './components/SortedPosts.jsx';

const App = () => {
  return (
      <React.StrictMode>
        <Provider store={store}>
          <Router>
            <Routes>
              <Route path="/" element={<Page />} />
              <Route path="/infoPage" element={<Page2 />} />
              <Route path="/page2/:category" exact component={<Page2 />} />
              <Route path="/page2/1" element={<Page2 />} />
              <Route path="/page2/2" element={<Page2 />} />
              <Route path="/page2/3" element={<Page2 />} />
              <Route path="/page2/4" element={<Page2 />} />
              <Route path="/page2/5" element={<Page2 />} />
              <Route path="/page2/6" element={<Page2 />} />
              <Route path="/previewPage" element={<Page3 />} />
              <Route path="/previewPage/:id" element={<Page3 />} />

              <Route path="/accountPage" element={<Page4 />} />
              <Route path="/categoryPage/:categoryId" element={<SortedPosts />} />
              <Route path="/searchPage" element={<Search />} />
            </Routes>
          </Router>
        </Provider>
      </React.StrictMode>
  );
};

createRoot(document.getElementById('root')).render(<App />);
