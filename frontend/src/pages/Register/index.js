import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';
import './styles.css';

import logoImg from '../../assets/logo.svg';


export default function Register() {
    // armazenar os valores dos inputs dentro de um Estado
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    const history = useHistory();

    async function handleRegister(e) { //cadastra o usuário; "e" pega o evento do submit
        e.preventDefault(); //prevenir o comportamento padrão de recarregar a página no submit

        //vou enviar isso para a API
        const data = {
            name,
            email,
            whatsapp,
            city,
            uf
        };

        //enviando isso para a API. Por padrão o axios já envia em JSON
        try {
            const response = await api.post('ongs', data);
            alert(`Seu ID de acesso: ${response.data.id}`) //template string, variavel dentro do texto, acessar o id, e o data é o resultado da response

            history.push('/'); //manda o uruário para a a rota do login

        } catch (err) {
            alert('Erro no cadastro, tente novamente.');
        }
    }

    return (

        <div className="register-container">

            <div className="content">

                <section>
                    <img src={logoImg} alt="Logo da Be The Hero" />

                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041" />
                        Não tenho cadastro
                    </Link>
                </section>

                <form onSubmit={handleRegister}>
                    <input
                        placeholder="Nome da ONG"
                        value={name}
                        onChange={e => setName(e.target.value)} //colocando o valor do input dentro da variavel name do Estado
                    />
                    <input
                        type="email"
                        placeholder="E-mail"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input
                        placeholder="WhatsApp"
                        value={whatsapp}
                        onChange={e => setWhatsapp(e.target.value)}
                    />

                    <div className="input-group">
                        <input
                            placeholder="Cidade"
                            value={city}
                            onChange={e => setCity(e.target.value)}
                        />
                        <input
                            placeholder="UF"
                            style={{ width: 80 }}
                            value={uf}
                            onChange={e => setUf(e.target.value)}
                        />
                    </div>
                    <button className="button" type="submit">Cadastrar</button>
                </form>

            </div>


        </div>

    )
}