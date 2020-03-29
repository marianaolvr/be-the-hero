import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
// Link substitui o <a> para não recarregar toda a página SPA
import { FiLogIn } from 'react-icons/fi';
import api from '../../services/api';
import './styles.css';

import logoImg from '../../assets/logo.svg';
import heroesImage from '../../assets/heroes.png';

export default function Login() {
    //guardando o input em um Estado
    const [id, setId] = useState('');
    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();

        try {
            const response = await api.post('sessions', { id }) //id é o objeto da ong que está querendo fazer o login
            
            //salvar no storage do navegador - porque preciso ter o nome e o id disponível em toda a minha aplicação
            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);

            //redireciona o usuário logado para o perfil da sua ong
            history.push('/profile')
        } catch (err) {
            alert('Falha no login, tente novamente'); 
        }

    }

    return (
        <div className="login-container">
            <section className="form">

                <img src={logoImg} alt="Logo da Heroes: Be The Hero" />

                <form onSubmit={handleLogin}>
                    <h1>Faça seu Login</h1>
                    <input
                        placeholder="Sua ID"
                        value={id}
                        onChange={e => setId(e.target.value)}
                    />

                    <button className="button" type="submit">Entrar</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#E02041" />
                        Não tenho cadastro
                    </Link>
                </form>


            </section>

            <img src={heroesImage} alt="Grupo de pessoas de costa uma abraçando a outra" />

        </div>
    );
}