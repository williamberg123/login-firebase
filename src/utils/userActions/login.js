import { signInWithEmailAndPassword, linkWithRedirect, FacebookAuthProvider } from 'firebase/auth';
import emailValidator from 'email-validator';

import { firebaseAuth } from '../../data/Firebase';

const accountLogin = async (emailRef, passwordRef, userActions) => {
	if (!emailValidator.validate(emailRef.current.value)) {
		alert('Digite um email válido');
		return;
	}

	if (passwordRef.current.value.length < 6 || passwordRef.current.value.length > 50) {
		alert('Senha deve ter de 6 a 50 caracteres');
		return;
	}

	const email = emailRef.current.value;
	const password = passwordRef.current.value;

	const userCredential = await signInWithEmailAndPassword(firebaseAuth, email, password);

	const provider = new FacebookAuthProvider();
	await linkWithRedirect(userCredential.user, provider);

	userActions.login(userCredential.user);
	window.location.href = '/';
};

export default accountLogin;
