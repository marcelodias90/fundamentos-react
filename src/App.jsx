import './App.css'
import React from "react";

import Contador from './components/contador/Contador';
import Input from './components/formulario/Input';
import IndiretaPai from './components/comunicacao/IndiretaPai';
import UsuarioInfo from './components/condicional/UsuarioInfo';
import ParOuImpar from './components/condicional/ParOuImpar';
import TabelaProdutos from './components/repeticao/TabelaProdutos';
import ListaAlunos from './components/repeticao/ListaAlunos';
import FamiliaMembro from './components/basicos/FamiliaMembro';
import Familia from './components/basicos/Familia';
import Card from "./components/layout/Card";
import Aleatorio from "./components/basicos/Aleatorio";
import ComParamentro from './components/basicos/ComParamentro'
import Fragmento from './components/basicos/Fragmento'
import Primeiro from './components/basicos/Primeiro'
import DiretaPai from './components/comunicacao/DiretaPai';

export default () => {
    return (
        <div className="App">
            <h1>Fundamentos React</h1>
            <div className="Cards">
                <Card titulo="#11 - Contador" color="#424242">
                    <Contador></Contador>
                </Card>

                <Card titulo="#11 - Componente Controlado(Input)" color="#8BAD39">
                    <Input></Input>
                </Card>

                <Card titulo="#10 - Comunicação Indireta" color="#8BAD39">
                    <IndiretaPai></IndiretaPai>
                </Card>

                <Card titulo="#09 - Comunicação Direta" color="#59323C">
                    <DiretaPai></DiretaPai>
                </Card>

                <Card titulo="#08 - Renderização Condicional" color="#3A9AD9">
                    <ParOuImpar numero={21}></ParOuImpar>
                    <UsuarioInfo usuario={{ nome: 'Antonio' }}></UsuarioInfo>
                </Card>

                <Card titulo="#07 - Desafio Repetição" color="#3A9AD9">
                    <TabelaProdutos></TabelaProdutos>
                </Card>

                <Card titulo="#06 - Repetição" color="#C2B280">
                    <ListaAlunos></ListaAlunos>
                </Card>

                <Card titulo="#05 - Componente com Filhos" color="#ADD8E6">
                    <Familia sobrenome="Bicalhos">
                        <FamiliaMembro nome="Pedro" />
                        <FamiliaMembro nome="Ana" />
                        <FamiliaMembro nome="Gustavo" />
                    </Familia>
                </Card>

                <Card titulo="#04 - Desafio Aleatório" color="#FA6900">
                    <Aleatorio min={1} max={60} />
                </Card>

                <Card titulo="03 - fragmento" color="">
                    <Fragmento />
                </Card>

                <Card titulo="#02 - Com Parâmetro" color="#E8B71A">
                    <ComParamentro titulo="Situação do Aluno"
                        aluno="Pedro Silva"
                        nota={9.3} />
                </Card>

                <Card titulo="#01 - Com Parâmetro" color="#588C73" >
                    <Primeiro></Primeiro>
                </Card>
            </div>
        </div>
    )
}