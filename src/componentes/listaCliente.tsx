/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css';

type props = {
    tema: string
}

export default class ListaCliente extends Component<props> {
    render() {
        return (
            <div className="container">
                <div className={`card-panel ${this.props.tema} white-text`}>
                    <h5 className="center-align">Lista de Clientes</h5>
                </div>

                <div className="row">
                    {[1, 2, 3, 4].map(id => (
                        <div key={id} className="col s12 m6 offset-m3">
                            <div className="card-panel z-depth-2">
                                <div className="row">
                                    <div className="col s12">
                                        <p className="grey-text">ID: #{id}</p>
                                    </div>
                                    <div className="col s12">
                                        <span className="black-text"><strong>Nome:</strong> [Nome do Cliente]</span>
                                    </div>
                                    <div className="col s12">
                                        <span className="black-text"><strong>Nome Social:</strong> [Nome Social]</span>
                                    </div>
                                    <div className="col s12">
                                        <span className="black-text"><strong>CPF:</strong> [000.000.000-00]</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}
