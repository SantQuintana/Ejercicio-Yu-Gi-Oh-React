import { render } from "@testing-library/react";
import React, {Component} from "react";

class Buscador extends Component {

    busquedaRef = React.createRef();

    obtenerDatos = (e) => {
        e.preventDefault();

        //Tomamos el valor del imput
        const termino = this.busquedaRef.current.value;

        //Enviamos el valor al componente principal
        this.props.datosBusqueda(termino);

    }

    render(){
        return(

        <form onSubmit={this.obtenerDatos}>
            <div className="container">
                <h2 className="text-center py-5">Lista de Cartas</h2>

                <div className="input-group input-group-lg col-8">
                    <input type="submit" className="input-group-text" value="Buscar Carta"/>
                    <input ref={this.busquedaRef} type="text" className="form-control col-6" placeholder="Ingresa tu carta"/>
                </div>
            </div>
        </form>
            
        )
    }
}

export default Buscador;