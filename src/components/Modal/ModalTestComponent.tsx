import React, { ReactNode } from 'react';
import { useModalContext } from './Modal';

export const ModalTestComponent: React.FC = () => {
  const createModal = useModalContext();

  const checkShit = (close: Function): ReactNode | void => {
    return (
      <div>
        <button onClick={() => close}>кнопка закрытия модалки</button>
        <div>JSX из компонента приложения</div>
      </div>
    );
  };

  return (
    <button onClick={() => createModal(checkShit)}>
      <p>проверОчка. Нажать, чтобы вызвать модалку</p>
    </button>
  );
};
