import React from 'react'
import './App.scss';

function App() {
  return (
    <div className="app">
      <aside className="aside">
        <header className="header">
          <div className="logo header__logo">
            <span class="logo__title">reactfilms</span>
            <span className="logo__subtitle">because netflix sucks.</span>
          </div>
        </header>
        <nav></nav>
        <footer>
          <button className="button header__button">Login</button>
        </footer>
      </aside>
      <main className="main">
        <section className="search">
          <input className="input search__input" type="text" placeholder="Search" />
        </section>
      </main>
    </div>
  );
}

export default App;
