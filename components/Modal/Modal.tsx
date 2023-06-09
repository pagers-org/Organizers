/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/display-name */
import { PropsWithChildren, useContext } from 'react';

import ModalPortal from './ModalPortal';
import ModalProvider, { ModalContext } from './ModalProvider';

import type { ModalProps } from './Modal.types';
import * as Styled from './Modal.styled';

const Modal = ({ children }: PropsWithChildren<ModalProps>) => {
  return <ModalProvider>{children}</ModalProvider>;
};

Modal.Trigger = ({ children }: PropsWithChildren) => {
  const { open } = useContext(ModalContext);

  return <Styled.TriggerWrapper onClick={open}>{children}</Styled.TriggerWrapper>;
};

Modal.Content = ({ children }: PropsWithChildren) => {
  const { isOpened, close } = useContext(ModalContext);

  const onCloseWithoutPropagation = (e: React.MouseEvent<HTMLDivElement>) => {
    close();
    e.stopPropagation();
  };

  return (
    <ModalPortal>
      {isOpened && (
        <>
          <Styled.Dimmer onClick={onCloseWithoutPropagation} />
          <Styled.Wrapper>
            <Styled.ModalWrapper>{children}</Styled.ModalWrapper>
          </Styled.Wrapper>
        </>
      )}
    </ModalPortal>
  );
};

export default Modal;
