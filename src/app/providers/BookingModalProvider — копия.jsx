import React, { createContext, useContext, useState } from 'react';
import { BookingModal } from '../../widgets/marketing/BookingModal';

const BookingModalContext = createContext();

export const useBookingModal = () => useContext(BookingModalContext);

export const BookingModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <BookingModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      <BookingModal isOpen={isOpen} onClose={closeModal} />
    </BookingModalContext.Provider>
  );
};
