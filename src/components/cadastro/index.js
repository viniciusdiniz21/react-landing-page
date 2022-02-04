import "./cadastro.css"
import { useState } from 'react'
import api from "../../services/api"

function Cadastro () {
    const [input, setInput] = useState('')
    const [cep, setCep] = useState({})
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [dataNasc, setDataNasc] = useState('')
    const [cpf, setCpf] = useState('')
    const [rua, setRua] = useState('')
    const [bairro, setBairro] = useState('')
    const [numero, setNumero] = useState('')
  
    async function HandleSearch() {
      if(input.length !== 8){
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

    function HandleSubmit(){
        const dados = JSON.parse(localStorage.getItem("dadosUsuarios"))
        if(dados == null){
            localStorage.setItem("dadosUsuarios", "[]");
            dados = []
        }

        const register = {
            nome: nome,
            email: email,
            senha: senha,
            cep: input,
            cpf: cpf,
            rua: rua,
            bairro: bairro,
            dataNasc: dataNasc,
            numero: numero
        }

        dados.push(register)

        localStorage.setItem("dadosUsuarios", JSON.stringify(dados))
    }

    return(
        <form className="form">
            <label>
                Nome:
                <input type="text" placeholder="Seu nome" value={nome} 
                onChange={(e)=>{setNome(e.target.value)}}
                ></input>
            </label>
            <label>
                E-mail:
                <input type="email" placeholder="seuemail@mail.com" value={email}
                onChange={(e)=>{setEmail(e.target.value)}}
                ></input>
            </label>
            <label>
                Senha:
                <input type="password" placeholder="*********" value={senha}
                onChange={(e)=>{setSenha(e.target.value)}}
                ></input>
            </label>
            <label>
                Data de Nascimento:
                <input type="date" value={dataNasc}
                onChange={(e)=>{setDataNasc(e.target.value)}}
                ></input>
            </label>
            <label>
                CPF (apenas numeros):
                <input type="text" placeholder="XXX.XXX.XXX-XX" value={cpf}
                onChange={(e)=>{setCpf(e.target.value)}}></input>
            </label>
            <label>
                CEP (apenas numeros):
                <input type="text" placeholder="XX.XXX-XXX"
                    value={input}
                    onChange={(e)=>{setInput(e.target.value)}}
                    onBlur={HandleSearch()}
                />
            </label>
            <label>
                Rua:
                <input type="text"
                    value={cep.logradouro}
                    onChange={(e)=>{setRua(e.target.value)}}
                ></input>
            </label>
            <label>
                Bairro:
                <input type="text"
                    value={cep.bairro}
                    onChange={(e)=>{setBairro(e.target.value)}}
                ></input>
            </label>
            <label>
                Número:
                <input type="text" name="numero"
                    value={numero}
                    onChange={(e)=>{setNumero(e.target.value)}}
                ></input>
            </label>
            <button className="buttonStyle" type="button" onClick={(event)=>{
                event.preventDefault()
                HandleSubmit()
                setNome('')
                setEmail('')
                setSenha('')
                setCpf('')
                setInput('')
                setRua('')
                setBairro('')
                setNumero('')
                setDataNasc('')
            }}>Register</button>
        </form>
    )
}

export default Cadastro;