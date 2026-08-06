/*
  Descripción: Estilos del componente o página RegisterForm.
  Funciones:
    - Componente React RegisterFormContainer.
  Requiere:
    - styled-components para estilos
*/

import styled from "styled-components";

export const RegisterFormContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

  .auth-container {
    width: 100%;
    max-width: 520px;
    min-height: calc(100vh - 200px);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 140px 0 80px;
  }

  .auth-card {
    position: relative;
    background: rgba(255, 255, 255, 0.98);
    padding: 40px;
    border-radius: 22px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    border-top: 2px solid rgba(255, 255, 255, 0.95);
    border-bottom: 2px solid rgba(255, 255, 255, 0.95);
    box-shadow: 0 24px 60px rgba(0, 0, 0, 0.16);
    width: 100%;
    max-width: 460px;
    margin: 0 auto;
  }

  .auth-card h1 {
    text-align: center;
    margin-bottom: 30px;
    color: #333;
    font-size: 28px;
  }

  .auth-form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .form-group label {
    color: #333;
    font-weight: 600;
    font-size: 14px;
  }

  .form-group input {
    padding: 12px 15px;
    border: 2px solid #e0e0e0;
    border-radius: 5px;
    font-size: 14px;
    font-family: inherit;
    transition:
      border-color 0.3s ease,
      box-shadow 0.3s ease;
  }

  .form-group input:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }

  .form-group input::placeholder {
    color: #999;
  }

  .auth-button {
    padding: 12px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition:
      transform 0.3s ease,
      box-shadow 0.3s ease;
    margin-top: 10px;
  }

  .auth-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 20px rgba(102, 126, 234, 0.4);
  }

  .auth-button:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }

  .error-message {
    background-color: #fee;
    color: #c33;
    padding: 12px;
    border-radius: 5px;
    margin-bottom: 20px;
    border-left: 4px solid #c33;
    font-size: 14px;
  }

  .auth-link {
    text-align: center;
    margin-top: 20px;
    color: #666;
    font-size: 14px;
  }

  .auth-link a {
    color: #667eea;
    text-decoration: none;
    font-weight: 600;
    transition: color 0.3s ease;
  }

  .auth-link a:hover {
    color: #764ba2;
    text-decoration: underline;
  }

  @media (max-width: 600px) {
    .auth-card {
      padding: 30px 20px;
    }

    .auth-card h1 {
      font-size: 24px;
    }
  }
`;
