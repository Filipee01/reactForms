import { useState } from 'react'
import './MyForm.css'

const MyForm =  ({user}) => {
    // textArea
    // limpando forms
    //controlando inputs
    //envio de form
    // Gerenciamento de dados
    const [name, setName] = useState(user ? user.name : '')
    const [email, setEmail] = useState(user ? user.email : '')
    const [bio,setBio] = useState(user ? user.bio : '')
    const [role, setRole] = useState(user ? user.role : '')

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Enviando o formulário")
        console.log(name, email, bio, role)

        //cleaning form

        setName("")
        setEmail("")
        setBio("")
    }

    // console.log(name)
    // console.log(email)

    return (    
        <div>
            {/* Criação de form */}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nome</label>
                    <input type="text" name="name" placeholder="Digite o seu nome" onChange={handleName} value = {name}/>
                </div>
                {/* Label envolvendo Input */}
                <label>
                    <span>E-mail</span>
                    <input type="email" name="email" placeholder="Digite o seu E-mail" onChange={(e) => setEmail(e.target.value)} value = {email}/>
                </label>
                 {/* TextArea */}
                 <label>
                    <span>bio</span>
                    <textarea name="bio" placeholder="Descrição do usuário" onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
                 </label>
                 {/* Select */}
                 <label>
                    <span>Função no sistema</span>
                    <select name="role" onChange={(e) => setRole(e.target.value)} value = {role}>
                        <option value="user">Usuário</option>
                        <option value="editor">Editor</option>
                        <option value="admin">Admnistrador</option>
                        <option value="dev">Desenvolvedor</option>
                    </select>
                 </label>
                <input type="submit"  value="Enviar"/>
            </form>
        </div>

    )
} 

export default MyForm