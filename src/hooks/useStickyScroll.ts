import { useSystemStore } from '@/stores/system';
import { useLenis } from 'lenis/react';
import { useEffect } from 'react';

export const useStickyScroll = () => {
  const currentHash = useSystemStore((state) => state.currentHash);
  const setCurrentHash = useSystemStore((state) => state.setCurrentHash);
  const setScrollJumping = useSystemStore((state) => state.setScrollJumping);
  const lenis = useLenis();

  const scrollToBlock = (blockId: string) => {
    const element = document.querySelector(`#${blockId}`) as HTMLDivElement;
    lenis?.scrollTo(element, {
      offset: -30,
      onComplete: () => setScrollJumping(false),
    });
    setCurrentHash(blockId);
  };

  // Скролл при первой загрузке / рефреше страницы
  // Зависимость от lenis: запустится когда Lenis инициализируется, гарантируя отсутствие конфликтов
  // scrollJumping=true блокирует useHashSetter от перезаписи currentHash во время прокрутки
  useEffect(() => {
    if (!lenis || !currentHash) return;
    const target = document.querySelector<HTMLElement>(`#${currentHash}`);
    if (!target) return;

    setScrollJumping(true);
    lenis.scrollTo(target, {
      offset: -30,
      immediate: true,
      onComplete: () => setScrollJumping(false),
    });
  }, [lenis]); // eslint-disable-line react-hooks/exhaustive-deps

  return { currentHash, scrollToBlock };
};
