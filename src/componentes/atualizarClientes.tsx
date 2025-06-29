
import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css';
import AtualizarClienteForm from "./AtualizarClienteForm";
import AtualizarItemForm from "./AtualizarItemForm";

type props = {
    tema: string
}

type state = {
    pagina: 'menu' | 'cliente' | 'item'
}

export default class AtualizarClientes extends Component<props, state> {
    constructor(props: props) {
        super(props)
        this.state = {
            pagina: 'menu'
        }
    }

    trocarPagina = (novaPagina: 'menu' | 'cliente' | 'item') => {
        this.setState({ pagina: novaPagina });
    }

    render() {
        const estiloBotao = `btn waves-effect waves-light ${this.props.tema}`

        // Página inicial com opções
        if (this.state.pagina === 'menu') {
            return (
                <div className="container">
                    <div className={`card-panel ${this.props.tema} white-text`}>
                        <h5 className="center-align">Escolha o que deseja atualizar:</h5>
                    </div>

                    <div className="row">
                        <div className="col s12 m6 offset-m3 center-align">
                            <button className={estiloBotao} onClick={() => this.trocarPagina('cliente')}>
                                Atualizar Cliente
                            </button>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col s12 m6 offset-m3 center-align">
                            <button className={estiloBotao} onClick={() => this.trocarPagina('item')}>
                                Atualizar Produto/Serviço
                            </button>
                        </div>
                    </div>
                </div>
            );
        }

        // Tela de atualizar cliente
        if (this.state.pagina === 'cliente') {
            return (
                <>
                    <div className="row">
                        <div className="col s12 m3 offset-m1">
                            <button className="btn grey" onClick={() => this.trocarPagina('menu')}>
                                Voltar
                            </button>
                        </div>
                    </div>
                    <div className="container">
                        <AtualizarClienteForm tema={this.props.tema} />
                    </div>
                </>
            );
        }

        // Tela de atualizar item
        if (this.state.pagina === 'item') {
            return (
                <>
                    <div className="row">
                        <div className="col s12 m3 offset-m1">
                            <button className="btn grey" onClick={() => this.trocarPagina('menu')}>
                                Voltar
                            </button>
                        </div>
                    </div>
                    <div className="container">
                        <AtualizarItemForm tema={this.props.tema} />
                    </div>
                </>
            );
        }

        return null;
    }
}