import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css';

type props = {
    tema: string
}

export default class AtualizarClienteForm extends Component<props> {
    render() {
        return (
            <div className="container">
                <div className={`card-panel ${this.props.tema} white-text`}>
                    <h5 className="center-align">Atualizar Cliente</h5>
                </div>

                <div className="card-panel">
                    <div className="row">
                        <div className="input-field col s12 m4">
                            <input id="id_cliente" type="number" className="validate" />
                            <label htmlFor="id_cliente">ID do Cliente</label>
                        </div>
                        <div className="input-field col s12 m8">
                            <input id="novo_nome" type="text" className="validate" />
                            <label htmlFor="novo_nome">Novo Nome</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s12 m6">
                            <input id="novo_nome_social" type="text" className="validate" />
                            <label htmlFor="novo_nome_social">Nome Social</label>
                        </div>
                        <div className="input-field col s12 m6">
                            <input id="novo_cpf" type="text" className="validate" />
                            <label htmlFor="novo_cpf">CPF</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s12 m6 offset-m3">
                            <input id="novo_genero" type="text" className="validate" />
                            <label htmlFor="novo_genero">Gênero (M/F)</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col s12 m6 center-align">
                            <button className={`btn waves-effect waves-light ${this.props.tema}`}>
                                Atualizar
                                <i className="material-icons right">edit</i>
                            </button>
                        </div>
                        <div className="col s12 m6 center-align">
                            <button className="btn red lighten-1 waves-effect">
                                Deletar
                                <i className="material-icons right">delete</i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
