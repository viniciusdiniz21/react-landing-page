import "./cadastro.css"
import {useState} from 'react'
import api from "../../services/api"

function Cadastro () {
    const [input, setInput] = useState('')
    const [cep, setCep] = useState({})
  
  
    async function HandleSearch() {
      if(input === ''){
        return
      }
      try {
        const response = await api.get(`${input}/json`)
        setCep(response.data)
        return response
      } catch {
        console.log('erro')
        setInput('')
      }
    }

    return(
        <form className="form">
            <label for="name">
                Nome:
                <input name="name" type="text" placeholder="Seu nome"></input>
            </label>
            <label for="email">
                E-mail:
                <input name="email" type="email" placeholder="seuemail@mail.com"></input>
            </label>
            <label for="password">
                Senha:
                <input name="password" type="password" placeholder="*********"></input>
            </label>
            <label for="data">
                Data de Nascimento:
                <input type="date" name="data"></input>
            </label>
            <label for="cpf">
                CPF:
                <input name="cpf" type="text" placeholder="XXX.XXX.XXX-XX"></input>
            </label>
            <label for="cpf">
                CEP:
                <input name="cpf" type="text" placeholder="XX.XXX-XXX"
                    value={input}
                    onChange={(e)=>{setInput(e.target.value)}}
                />
            </label>
            <label for="rua">
                Rua:
                <input type="text" name="rua"
                    value={cep.logradouro}
                ></input>
            </label>
            <label for="bairro">
                Bairro:
                <input type="text" name="bairro"
                    value={cep.bairro}
                ></input>
            </label>
            <button onClick={HandleSearch()}>Button</button>
        </form>
    )
}

export default Cadastro;