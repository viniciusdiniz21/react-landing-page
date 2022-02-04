import "./cadastro.css"
import { useState } from 'react'
import api from "../../services/api"

function validaCPF(cpf) {
    var Soma = 0
    var Resto
  
    var strCPF = String(cpf).replace(/[^\d]/g, '')
    
    if (strCPF.length !== 11)
       return false
    
    if ([
      '00000000000',
      '11111111111',
      '22222222222',
      '33333333333',
      '44444444444',
      '55555555555',
      '66666666666',
      '77777777777',
      '88888888888',
      '99999999999',
      ].indexOf(strCPF) !== -1)
      return false
  
    for (let i=1; i<=9; i++)
      Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
  
    Resto = (Soma * 10) % 11
  
    if ((Resto == 10) || (Resto == 11)) 
      Resto = 0
  
    if (Resto != parseInt(strCPF.substring(9, 10)) )
      return false
  
    Soma = 0
  
    for (let i = 1; i <= 10; i++)
      Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i)
  
    Resto = (Soma * 10) % 11
  
    if ((Resto == 10) || (Resto == 11)) 
      Resto = 0
  
    if (Resto != parseInt(strCPF.substring(10, 11) ) )
      return false
  
    return true
  }

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
        let dados = JSON.parse(localStorage.getItem("dadosUsuarios"))
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
                if(validaCPF(cpf) && Object.keys(cep).length > 0){
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
                }else{
                    alert("Erro ao validar dados")
                }
                 
            }}>Register</button>
        </form>
    )
}

export default Cadastro;