import { useState } from 'react';

function MyForm() {

    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: ''
    });

    const handleChange = (event) => {
        setUser({...user, [event.target.name]:
            event.target.value});
    }

    const handleSubmit

    return (
        <div>
            
        </div>
    );
}

export default MyForm;