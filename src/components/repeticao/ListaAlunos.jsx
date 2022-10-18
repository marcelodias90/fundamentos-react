import React from "react"
import alunos from "../../data/alunos"

export default(props) => {
    const alunosLI = alunos.map((aluno) =>{
        return(
            <li key={aluno.id}>
                {aluno.id}) {aluno.nome} - {aluno.nota}
            </li>
        )
    })

    return(
        <di>
            <ul style={{ listStyle: 'none' }}>{alunosLI}</ul>
        </di>
    )
}