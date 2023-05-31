import SearchForm from './components/SearchForm/SearchForm';
import GlobalStyles from './components/styles/Global';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {

  return (
    
    <Router basename='/github-finder'>
      <GlobalStyles />
      <header><h2>Welcome to GitHub Finder!</h2></header>
      <Routes>
        <Route path="search/:query" element={<SearchForm />} />
        <Route path="*" element={<SearchForm />} />
      </Routes>
       <footer>
            Daniyar Yeskaliyev © {new Date().getFullYear()}
        </footer>
    </Router>
    
  )
}

export default App
