import React from 'react';

const Home = () => {
    return(
        <>
            <h2>Últimos lançamentos</h2>

            <div className='card'>
                <div className='thumb'>
                    <img src="imagens\capas\9788575228142.jpg" alt="Capa Livro Padrões para Kubernetes" />
                </div>
                <div>
                    <h3>Padrões para Kubernetes</h3>
                    <p>O modo como ....</p>
                    <a href="#">Leia mais &gt;</a>
                </div>
            </div>

            <div className='card'>
                <div className='thumb'>
                <img src="imagens/capas/9788575228074.jpg" alt="Capa Livro Introdução ao Pentest 2ª Edição" />
                </div>
                <div>
                    <h3>Introdução ao Pentest 2ª Edição</h3>
                    <p>O modo como ....</p>
                    <a href="#">Leia mais &gt;</a>
                </div>
            </div>

        </>
    );
};

export default Home;