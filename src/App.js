import { render } from '@testing-library/react';
import React, { Component } from 'react';
import Buscador from './Components/Buscador';
import Resultado from './Components/Resultado';
import Header from './Components/Header';


class App extends Component {

  state = {
    termino : '',
    imagenes : []
  }

  
  inicioApi = () => { 
    const url = `https://db.ygoprodeck.com/api/v7/cardinfo.php/?&num=30&offset=0&view=List`
    fetch(url)
      .then(respuesta => respuesta.json())
      .then(resultado => this.setState({imagenes : resultado.data }) )
  }

  consultarApi = () => {

    const urlBusqueda = `https://db.ygoprodeck.com/api/v7/cardinfo.php?name=${this.state.termino}`;
    fetch(urlBusqueda)
      .then(respuesta => respuesta.json())
      .then(resultado => this.setState({imagenes : resultado.data }) )
  }

  datosBusqueda = (termino)  => {
    this.setState({
      termino
    }, () => {
      this.consultarApi();
    })
  }
  

  render(){
    if(this.state.imagenes[1] === undefined){
      this.inicioApi();
    }
    
    return(
    <div className='app .container bg-warning'>
      <Header/>
      <div className="jumbotron">
        <Buscador
        datosBusqueda={this.datosBusqueda}
        />
      </div>
      
      <Resultado
        
        imagenes={this.state.imagenes}
      />
    </div>
    )
  }
}

export default App;
