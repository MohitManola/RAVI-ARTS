"use client";

import React, { createContext, useContext, useState } from "react";
import QuoteModal from "@/components/QuoteModal";

interface QuoteContextType {
  openQuoteModal: (serviceName?: string) => void;
  closeQuoteModal: () => void;
}

const QuoteContext = createContext<QuoteContextType>({
  openQuoteModal: () => {},
  closeQuoteModal: () => {},
});

export function QuoteProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>("Flex & Large Format Printing");

  const openQuoteModal = (serviceName?: string) => {
    if (serviceName) setSelectedService(serviceName);
    setIsOpen(true);
  };

  const closeQuoteModal = () => {
    setIsOpen(false);
  };

  return (
    <QuoteContext.Provider value={{ openQuoteModal, closeQuoteModal }}>
      {children}
      <QuoteModal
        isOpen={isOpen}
        onClose={closeQuoteModal}
        defaultService={selectedService}
      />
    </QuoteContext.Provider>
  );
}

export function useQuote() {
  return useContext(QuoteContext);
}
