import React, { useState } from 'react';

const Feedback = () => {
    const [formData, setFormData] = useState(
        {
            nome: '',
            email: '',
            feedback: ''
        }
    
    );
    
    return (
        <div>
            <h1>Feedback Form</h1>
            <form>
                <input type="text" placeholder="Nome" value={formData.nome} onChange={e => setFormData({ ...formData, nome: e.target.value })} />
                <input type="email" placeholder="Email" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} />
                <textarea placeholder="Feedback" value={formData.feedback} onChange={e => setFormData({ ...formData, feedback: e.target.value })} />
                <button type="submit">Enviar</button>
            </form>
            {formData.nome && formData.email && formData.feedback && <p>Formulário enviado com sucesso!</p>}
        </div>
    );
};

export default Feedback;