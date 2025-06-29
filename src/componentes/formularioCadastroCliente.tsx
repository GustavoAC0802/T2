import { Component } from "react";

type props = {
    tema: string
}

export default class FormularioCadastroCliente extends Component<props> {
    render() {
        let estiloBotao = `btn waves-effect waves-light ${this.props.tema}`;

        return (
            <div className="container">
                <div className={`card-panel ${this.props.tema} white-text`}>
                    <h5 className="center-align">Cadastro de Cliente</h5>
                </div>

                <form className="card-panel">
                    <div className="row">
                        <div className="input-field col s12 m6">
                            <input id="nome" type="text" className="validate" />
                            <label htmlFor="nome">Nome</label>
                        </div>
                        <div className="input-field col s12 m6">
                            <input id="nome_social" type="text" className="validate" />
                            <label htmlFor="nome_social">Nome Social</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s12 m6">
                            <select className="browser-default" id="genero">
                                <option value="">Escolha o gênero</option>
                                <option value="M">Masculino</option>
                                <option value="F">Feminino</option>
                            </select>
                        </div>
                        <div className="input-field col s12 m6">
                            <input id="cpf" type="text" className="validate" />
                            <label htmlFor="cpf">CPF</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s12 m6 offset-m3">
                            <input id="data_emissao" type="text" className="validate" />
                            <label htmlFor="data_emissao" className="active">
                                Data de emissão do CPF (dd/mm/aaaa)
                            </label>
                        </div>
                    </div>

                    <div className="row center-align">
                        <div className="col s12">
                            <button className={estiloBotao} type="submit" name="action">
                                Cadastrar
                                <i className="material-icons right">person_add</i>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}
