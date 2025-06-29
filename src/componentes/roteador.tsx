import { Component } from "react";
import BarraNavegacao from "./barraNavegacao";
import FormularioCadastroCliente from "./formularioCadastroCliente";
import ListaCliente from "./listaCliente";
import AtualizarClientes from "./atualizarClientes";
import VisualizarItens from "./ProdutoServiço";

type state = {
    tela: string
}

export default class Roteador extends Component<{}, state> {
    constructor(props: {} | Readonly<{}>) {
        super(props)
        this.state = {
            tela: 'Clientes'
        }
        this.selecionarView = this.selecionarView.bind(this)
    }

    selecionarView(novaTela: string, evento: Event) {
        evento.preventDefault()
        console.log(novaTela);
        this.setState({
            tela: novaTela
        })
    }

    render() {
        const temaGlobal = "purple darken-3"

        const barraNavegacao = (
            <BarraNavegacao
                seletorView={this.selecionarView}
                tema={temaGlobal}
                botoes={['Clientes', 'Produtos e Serviços', 'Cadastrar', 'Atualizar']}
            />
        )

        if (this.state.tela === 'Clientes') {
            return (
                <>
                    {barraNavegacao}
                    <ListaCliente tema={temaGlobal} />
                </>
            )
        }

        if (this.state.tela === 'Cadastrar') {
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroCliente tema={temaGlobal} />
                </>
            )
        }

        if (this.state.tela === 'Atualizar') {
            return (
                <>
                    {barraNavegacao}
                    <AtualizarClientes tema={temaGlobal} />
                </>
            )
        }

        if (this.state.tela === 'Produtos e Serviços') {
            return (
                <>
                    {barraNavegacao}
                    <VisualizarItens tema={temaGlobal} />
                </>
            )
        }

        // Caso a tela não exista
        return (
            <>
                {barraNavegacao}
                <div className="container">
                    <h5>Página não encontrada :(</h5>
                </div>
            </>
        )
    }
}
