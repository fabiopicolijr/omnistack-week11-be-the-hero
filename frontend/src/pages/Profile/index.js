import React, {useEffect, useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FiPower, FiTrash2} from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function Profile(){
    const [incidents, setIncidents] = useState([]);

    const instituteId = localStorage.getItem('instituteId');
    const instituteName = localStorage.getItem('instituteName');
    const history = useHistory();

    console.log(`teste: ${instituteId}`);

    useEffect(() => {
        api.get('profile', {
            headers: {
                Authorization: instituteId,
            }
        }).then(response => {
            setIncidents(response.data);
        })
    }, [instituteId]);

    async function handleDeleteIncident(id){
        try{
            await api.delete(`incidents/${id}`,{
                headers: {
                    Authorization: instituteId,
                }
            });

            setIncidents(incidents.filter(incident => incident.id !==id));

        } catch(err){
            alert('Erro ao deletar o caso, tente novamente.');

        }
    }

    function handleLogout(){
        console.log('inicio');
        localStorage.clear();
        console.log('meio');
        history.push('/');
        console.log('fim');

    }

    return(
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be The Hero" />
                <span>Bem vindo(a), {instituteName} </span>
           
                <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
                <button type="button">
                    <FiPower size={18} color="#E02041" onClick={handleLogout} />
                </button>
            </header>

            <h1>Casos cadastrados</h1>

            <ul>
                {incidents.map(incident => (
                    <li key={incident.id}>
                        <strong>CASO:</strong>
                        <p>{incident.title}</p>

                        <strong>DESCRIÇÃO:</strong>
                        <p>{incident.description}</p>

                        <strong>VALOR:</strong>
                        <p>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(incident.value)}</p>

                        <button type="button" onClick={() => {handleDeleteIncident(incident.id)}}>
                            <FiTrash2 size={20} color="#a8a8B3" />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}