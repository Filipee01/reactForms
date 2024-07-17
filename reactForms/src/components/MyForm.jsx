import { useState } from 'react'
import './MyForm.css'

const MyForm =  () => {

    //envio de form
    // Gerenciamento de dados
    const [name, setName] = useState()
    const [email, setEmail] = useState()

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Enviando o formulário")
        console.log(name, email)
    }

    // console.log(name)
    // console.log(email)

    return (    
        <div>
            {/* Criação de form */}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nome</label>
                    <input type="text" name="name" placeholder="Digite o seu nome" onChange={handleName} />
                </div>
                {/* Label envolvendo Input */}
                <label>
                    <span>E-mail</span>
                    <input type="email" name="email" placeholder="Digite o seu E-mail" onChange={(e) => setEmail(e.target.value)}/>
                </label>
                <input type="submit"  value="Enviar"/>
            </form>
        </div>

    )
} 

export default MyForm