import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css';

type props = {
    tema: string
}

export default class VisualizarItens extends Component<props> {
    render() {
        // Simulando dados
        const produtos = [
            { nome: "Pomada Modeladora", preco: 29.9 },
            { nome: "Shampoo Antiqueda", preco: 34.9 }
        ];

        const servicos = [
            { nome: "Corte de Cabelo", preco: 25.0 },
            { nome: "Limpeza de Pele", preco: 50.0 }
        ];

        return (
            <div className="container">
                {/* Título Produtos */}
                <div className={`card-panel ${this.props.tema} white-text`}>
                    <h5 className="center-align">Produtos</h5>
                </div>

                <div className="row">
                    {produtos.map((produto, index) => (
                        <div key={index} className="col s12 m6 offset-m3">
                            <div className="card-panel z-depth-1 grey lighten-4">
                                <span className="black-text">
                                    <strong>{produto.nome}</strong> — R$ {produto.preco.toFixed(2)}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Título Serviços */}
                <div className={`card-panel ${this.props.tema} white-text`}>
                    <h5 className="center-align">Serviços</h5>
                </div>

                <div className="row">
                    {servicos.map((servico, index) => (
                        <div key={index} className="col s12 m6 offset-m3">
                            <div className="card-panel z-depth-1 grey lighten-4">
                                <span className="black-text">
                                    <strong>{servico.nome}</strong> — R$ {servico.preco.toFixed(2)}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}
