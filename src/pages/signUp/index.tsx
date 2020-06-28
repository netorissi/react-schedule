import React from 'react';
import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi';

import Input from '../../components/Input';
import Button from '../../components/Button';

import Logo from '../../assets/logo.svg';

import { Container, Content, Background } from './styles';

const SignUp: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={Logo} alt="GoBarber" />

        <form>
          <h1>Faça seu cadastro</h1>

          <Input name="name" placeholder="Email" icon={FiUser} />
          <Input name="email" placeholder="Email" icon={FiMail} />

          <Input
            name="password"
            type="password"
            placeholder="Senha"
            icon={FiLock}
          />

          <Button type="submit">Cadastrar</Button>
        </form>

        <a href="login">
          <FiArrowLeft />
          Voltar para login
        </a>
      </Content>
      <Background />
    </Container>
  );
};

export default SignUp;
