import React from 'react';
import { FiAlertCircle, FiXCircle } from 'react-icons/fi';

import { Container, Toast } from './styles';

const Toaster: React.FC = () => (
  <Container>
    <Toast>
      <FiAlertCircle size={20} />

      <div>
        <strong>Erro</strong>
        <p>Message</p>
      </div>

      <button type="button">
        <FiXCircle size={18} />
      </button>
    </Toast>
  </Container>
);

export default Toaster;
