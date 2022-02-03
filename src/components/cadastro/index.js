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
            <label>
                Nome:
                <input type="text" placeholder="Seu nome"></input>
            </label>
            <label>
                E-mail:
                <input type="email" placeholder="seuemail@mail.com"></input>
            </label>
            <label>
                Senha:
                <input type="password" placeholder="*********"></input>
            </label>
            <label>
                Data de Nascimento:
                <input type="date"></input>
            </label>
            <label>
                CPF:
                <input type="text" placeholder="XXX.XXX.XXX-XX"></input>
            </label>
            <label>
                CEP:
                <input type="text" placeholder="XX.XXX-XXX"
                    value={input}
                    onChange={(e)=>{setInput(e.target.value)}}
                />
            </label>
            <label>
                Rua:
                <input type="text"
                    value={cep.logradouro}
                ></input>
            </label>
            <label>
                Bairro:
                <input type="text"
                    value={cep.bairro}
                ></input>
            </label>
            <label>
                Número:
                <input type="text" name="numero"
                    
                ></input>
            </label>
            <button className="buttonStyle" onClick={HandleSearch()}>Register</button>
        </form>
    )
}

export default Cadastro;