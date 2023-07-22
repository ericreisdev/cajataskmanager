import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Sucesso no login
        const user = userCredential.user;
        console.log("Usuário logado:", user);
        // Faça qualquer ação necessária após o login bem-sucedido
      })
      .catch((error) => {
        // Tratamento de erros no login
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Erro de login:", errorCode, errorMessage);
      });
  };

  return (
    <form onSubmit={handleLogin}>
      <input type="email" value={email} onChange={handleEmailChange} placeholder="E-mail" />
      <input type="password" value={password} onChange={handlePasswordChange} placeholder="Senha" />
      <button type="submit">Entrar</button>
    </form>
  );
};

export default Login;
