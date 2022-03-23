import Imagen from './Imagen';
import React, {Component} from "react";

class Resultado extends Component {
    
    mostrarImagenes = () => {

        const imagenes = this.props.imagenes;

        console.log(typeof(imagenes))

        //if(Object.entries(imagenes).lenght() === 0) return null;        //Usar arreglo como un objeto

        console.log(imagenes);

        return(
            <React.Fragment>
                <div className="col-12 p-5 row">
                    {imagenes.map(datos => ( 
                        <Imagen 
                            key={datos.id} 
                            datos={datos} 
                        />
                        ) ) }
                </div>
                
            </React.Fragment>
            

        )
    }

    render() {
        return (
            <React.Fragment>
                { this.mostrarImagenes() }
                
            </React.Fragment>
            
        );
    }
}

export default Resultado;