import React, { ReactNode, useState, useContext } from 'react';

import cn from 'classnames';

interface IChildren {
  children: ReactNode;
}

interface IContext {
  createModal: Function;
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
export const ModalContext = React.createContext<IContext>({ createModal: () => {} });

export const useModalContext = (): Function => {
  const { createModal } = useContext(ModalContext);
  return createModal;
};

export const Modal: React.FC<IChildren> = ({ children }: IChildren) => {
  const [showModal, setShowModal] = useState(false);

  const closeInModal = () => {
    setShowModal(true);
  };

  const [modalSettings, setModalSettings] = useState({
    // eslint-disable-next-line react/display-name
    componentCreatorFunction: (close?: Function): JSX.Element => <div>{close}</div>,
    closeOnBackgroundClick: true,
    closeInTime: 0,
    hasBlur: true,
  });

  const createModal = (
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    func: (close?: Function) => JSX.Element,
    closeble = true,
    timer = 0,
    hasBlur = true
  ): void => {
    setModalSettings({
      componentCreatorFunction: func,
      closeOnBackgroundClick: closeble,
      closeInTime: timer,
      hasBlur,
    });
    setShowModal(true);
  };

  console.log(modalSettings);

  return (
    <ModalContext.Provider value={{ createModal }}>
      {children}
      {showModal && (
        <div
          onClick={modalSettings.closeOnBackgroundClick ? () => setShowModal(false) : undefined}
          className={cn({
            'modal-container': true,
            'modal-container_blur': modalSettings.hasBlur,
          })}
        >
          {modalSettings.componentCreatorFunction(closeInModal)}
        </div>
      )}
    </ModalContext.Provider>
  );
};
