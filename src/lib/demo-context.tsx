'use client';

import { createContext, ReactNode, useContext, useState } from 'react';
import { DemoModal } from '@/components/ui/DemoModal';
import { CallRequestModal } from '@/components/ui/CallRequestModal';

export interface ContactContextValue {
  openDemo: () => void;
  openCallRequest: () => void;
}

const ContactContext = createContext<ContactContextValue | null>(null);

export function DemoProvider({ children }: { children: ReactNode }) {
  const [demoOpen, setDemoOpen] = useState(false);
  const [callOpen, setCallOpen] = useState(false);

  const value: ContactContextValue = {
    openDemo: () => setDemoOpen(true),
    openCallRequest: () => setCallOpen(true),
  };

  return (
    <ContactContext.Provider value={value}>
      {children}
      <DemoModal open={demoOpen} onClose={() => setDemoOpen(false)} />
      <CallRequestModal open={callOpen} onClose={() => setCallOpen(false)} />
    </ContactContext.Provider>
  );
}

export const ContactProvider = DemoProvider;

function useContact(): ContactContextValue {
  const ctx = useContext(ContactContext);
  if (!ctx) throw new Error('useContact must be used within ContactProvider');
  return ctx;
}

export function useDemo() {
  return useContact();
}

export function useCallRequest() {
  return useContact();
}
