"use client"
import { useEffect } from 'react';

interface GlowCardProps {
  children: React.ReactNode;
  identifier: string;
}

const GlowCard = ({ children, identifier }: GlowCardProps) => {
  useEffect(() => {
    const CONTAINER = document.querySelector(`.glow-container-${identifier}`) as HTMLElement | null;
    const CARDS = document.querySelectorAll(`.glow-card-${identifier}`);

    const CONFIG = {
      proximity: 40,
      spread: 80,
      blur: 12,
      gap: 32,
      vertical: false,
      opacity: 0,
    };

    const UPDATE = (event: PointerEvent) => {
      for (const CARD of Array.from(CARDS)) {
        const cardElement = CARD as HTMLElement;
        const CARD_BOUNDS = cardElement.getBoundingClientRect();

        const eventX = event?.x ?? event?.clientX ?? 0;
        const eventY = event?.y ?? event?.clientY ?? 0;

        if (
          eventX > CARD_BOUNDS.left - CONFIG.proximity &&
          eventX < CARD_BOUNDS.left + CARD_BOUNDS.width + CONFIG.proximity &&
          eventY > CARD_BOUNDS.top - CONFIG.proximity &&
          eventY < CARD_BOUNDS.top + CARD_BOUNDS.height + CONFIG.proximity
        ) {
          cardElement.style.setProperty('--active', '1');
        } else {
          cardElement.style.setProperty('--active', CONFIG.opacity.toString());
        }

        const centerX = CARD_BOUNDS.left + CARD_BOUNDS.width * 0.5;
        const centerY = CARD_BOUNDS.top + CARD_BOUNDS.height * 0.5;

        let ANGLE =
          (Math.atan2(eventY - centerY, eventX - centerX) *
            180) /
          Math.PI;

        ANGLE = ANGLE < 0 ? ANGLE + 360 : ANGLE;

        cardElement.style.setProperty('--start', (ANGLE + 90).toString());
      }
    };

    document.body.addEventListener('pointermove', UPDATE as EventListener);

    const RESTYLE = () => {
      if (CONTAINER) {
        CONTAINER.style.setProperty('--gap', CONFIG.gap.toString());
        CONTAINER.style.setProperty('--blur', CONFIG.blur.toString());
        CONTAINER.style.setProperty('--spread', CONFIG.spread.toString());
        CONTAINER.style.setProperty(
          '--direction',
          CONFIG.vertical ? 'column' : 'row'
        );
      }
    };

    RESTYLE();
    UPDATE(new PointerEvent('pointermove'));

    // Cleanup event listener
    return () => {
      document.body.removeEventListener('pointermove', UPDATE as EventListener);
    };
  }, [identifier]);

  return (
    <div className={`glow-container-${identifier} glow-container`}>
      <article className={`glow-card glow-card-${identifier} h-fit cursor-pointer border border-[#2a2e5a] transition-all duration-300 relative bg-[#101123] text-gray-200 rounded-xl hover:border-transparent w-full`}>
        <div className="glows"></div>
        {children}
      </article>
    </div>
  );
};

export default GlowCard;
