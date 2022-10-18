import './App.css'
import React from "react";

import ListaAlunos from './components/repeticao/ListaAlunos';
import FamiliaMembro from './components/basicos/FamiliaMembro';
import Familia from './components/basicos/Familia';
import Card from "./components/layout/Card";
import Aleatorio from "./components/basicos/Aleatorio";
import Primeiro from './components/basicos/Primeiro'
import ComParamentro from './components/basicos/ComParamentro'
import Fragmento from './components/basicos/Fragmento'

export default () => {
    return (
        <div className="App">
            <h1>Fundamentos React</h1>
            <div className="Cards">
                <Card titulo="#06 - Repetição" color="#C2B280">
                    <ListaAlunos></ListaAlunos>
                </Card>

                <Card titulo="#05 - Componente com Filhos" color="#ADD8E6">
                    <Familia sobrenome="Bicalhos">
                        <FamiliaMembro nome="Pedro"/>
                        <FamiliaMembro nome="Ana"/>
                        <FamiliaMembro nome="Gustavo"/>
                    </Familia>
                </Card> 

                <Card titulo="#04 - Desafio Aleatório" color="#FA6900">
                    <Aleatorio min={1} max={60} />
                </Card> 

                <Card titulo="03 - fragmento" color="#E94C6F">
                    <Fragmento />
                </Card>

                <Card titulo="#02 - Fragmento" color="E8B71A">
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