import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export default function Home() {
	const { push } = useHistory();
	const [message, setMessage] = React.useState(null);

	const onClick = async () => {
		setMessage(null);
		try {
			await axios.get('/api/test');
			setMessage('ok');
		} catch (err) {
			console.log('Error in contact');
			setMessage('error');
		}
	};

	return (
		<div>
			<div style={{ marginBottom: '2rem' }}>Home</div>
			<div style={{ cursor: 'pointer' }} onClick={() => push('/contact')}>
				Go to Contact
			</div>
			<div style={{ cursor: 'pointer' }} onClick={() => push('login')}>
				Go to Login
			</div>
			<button onClick={onClick}>ping server</button>
			<div>{message}</div>
		</div>
	);
}
