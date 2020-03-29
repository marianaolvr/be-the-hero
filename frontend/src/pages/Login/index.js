import React from 'react';
import { Link } from 'react-router-dom';
// Link substitui o <a> para não recarregar toda a página SPA
import { FiLogIn } from 'react-icons/fi';

import './styles.css';

import logoImg from '../../assets/logo.svg';
import heroesImage from '../../assets/heroes.png';

export default function Login() {
    return (
        <div className="login-container">
            <section className="form">

                <img src={logoImg} alt="Logo da Heroes: Be The Hero" />

                <form>
                    <h1>Faça seu Login</h1>
                    <input placeholder="Sua ID" />
                    <button className="button" type="submit">Entrar</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#E02041"/>
                        Não tenho cadastro
                    </Link>
                </form>


            </section>

            <img src={heroesImage} alt="Grupo de pessoas de costa uma abraçando a outra" />

        </div>
    );
}