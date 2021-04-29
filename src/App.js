import React, { Fragment } from 'react'
import Header from './components/Header';
import Productos from "./components/Productos";
import EditarProducto from './components/EditarProducto';
import NuevoProducto from './components/NuevoProducto';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />

      {/* Contenido dinamico */}
      <div className="container mt-5">
        <Switch>
          <Route exact path="/" component ={Productos} />
          <Route exact path="/productos/nuevo" component = {NuevoProducto} />
          <Route exact path="/productos/editar/:id" component = {EditarProducto} />
        </Switch>
      </div>

    </Router>
  );
}

export default App;
