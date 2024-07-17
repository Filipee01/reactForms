import './MyForm.css'

const MyForm =  () => {
    return (    
        <div>
            {/* Criação de form */}
            <form >
                <div>
                    <label htmlFor="name">Nome</label>
                    <input type="text" name="name" placeholder="Digite o seu nome" />
                </div>
                {/* Label envolvendo Input */}
                <label>
                    <span>E-mail</span>
                    <input type="email" name="email" placeHolder="Digite o seu E-mail" />
                </label>
                <input type="submit"  value="Enviar"/>
            </form>
        </div>

    )
} 

export default MyForm