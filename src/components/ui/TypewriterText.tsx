'use client';

import { useEffect, useState } from 'react';

interface TypewriterTextProps {
  words: string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  pauseTime?: number;
  className?: string;
}

export function TypewriterText({
  words,
  typeSpeed = 80,
  deleteSpeed = 40,
  pauseTime = 1800,
  className = '',
}: TypewriterTextProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    if (!isDeleting && displayed === currentWord) {
      const timer = setTimeout(() => setIsDeleting(true), pauseTime);
      return () => clearTimeout(timer);
    }

    if (isDeleting && displayed === '') {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timer = setTimeout(
      () => {
        setDisplayed((prev) =>
          isDeleting
            ? currentWord.substring(0, prev.length - 1)
            : currentWord.substring(0, prev.length + 1)
        );
      },
      isDeleting ? deleteSpeed : typeSpeed
    );

    return () => clearTimeout(timer);
  }, [displayed, isDeleting, wordIndex, words, typeSpeed, deleteSpeed, pauseTime]);

  return (
    <span className={className} aria-live="off">
      <span className="text-gradient">{displayed}</span>
      <span
        className="inline-block w-[0.06em] h-[0.82em] bg-accent ml-[0.06em] translate-y-[0.04em] animate-blink"
        aria-hidden="true"
      />
    </span>
  );
}
