import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import Header from '../components/Header';
import Map from '../components/Map';
import Products from '../components/Products';
import './App.scss';

function App() {

  return (
    <div className="wrapper">
      <Header />
      <div className="main">
        <div>
          {/* Мы помещаем их в один div, чтобы у последнего не было нижней границы. */}
          <Breadcrumb items={["Активности", "Кемпинг"]} />
          <Breadcrumb items={["Парашют", "Мото", "Кемпинг у моря"]} />
        </div>
        <Map />
        <Products />
      </div>
    </div>
  );
}

export default App;
