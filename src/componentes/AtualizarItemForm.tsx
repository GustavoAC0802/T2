import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css';

type props = {
    tema: string
}

export default class AtualizarItemForm extends Component<props> {
    render() {
        const estiloBotao = `btn waves-effect waves-light ${this.props.tema}`;

        return (
            <div className="container">
                <div className={`card-panel ${this.props.tema} white-text`}>
                    <h5 className="center-align">Atualizar Produto ou Serviço</h5>
                </div>

                <div className="card-panel">
                    <div className="row">
                        <div className="input-field col s12 m6 offset-m3">
                            <select className="browser-default" id="tipo_item">
                                <option value="">Escolha uma opção</option>
                                <option value="produto">Produto</option>
                                <option value="servico">Serviço</option>
                            </select>
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s12 m6 offset-m3">
                            <input id="id_item" type="number" className="validate" />
                            <label htmlFor="id_item">ID do item</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s12 m6 offset-m3">
                            <input id="nome_item" type="text" className="validate" />
                            <label htmlFor="nome_item">Novo nome</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s12 m6 offset-m3">
                            <input id="preco_item" type="number" className="validate" />
                            <label htmlFor="preco_item">Novo preço</label>
                        </div>
                    </div>

                    <div className="row center-align">
                        <div className="col s12">
                            <button className={estiloBotao}>
                                Atualizar Item
                                <i className="material-icons right">autorenew</i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
