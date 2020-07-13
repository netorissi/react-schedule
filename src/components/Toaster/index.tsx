import React from 'react';
import { useTransition } from 'react-spring';
import {
  FiAlertCircle,
  FiInfo,
  FiAlertTriangle,
  FiCheckCircle,
} from 'react-icons/fi';

import { ToastMessage } from '../../hooks/toast';
import { Container, Toast } from './styles';

interface ToasterProps {
  messages: ToastMessage[];
}

const icons = {
  info: <FiInfo size={24} />,
  warning: <FiAlertTriangle size={24} />,
  success: <FiCheckCircle size={24} />,
  error: <FiAlertCircle size={24} />,
};

const Toaster: React.FC<ToasterProps> = ({ messages }) => {
  const messagesWithTransitions = useTransition(
    messages,
    message => message.id,
    {
      from: { right: '-120%', opacity: 0 },
      enter: { right: '0%', opacity: 1 },
      leave: { right: '-120%', opacity: 0 },
    },
  );

  return (
    <Container>
      {messagesWithTransitions.map(({ item, key, props }) => (
        <Toast key={key} type={item.type} style={props}>
          {icons[item.type || 'info']}

          <div>
            <strong>{item.title}</strong>
            {item.description && <p>{item.description}</p>}
          </div>
        </Toast>
      ))}
    </Container>
  );
};

export default Toaster;
