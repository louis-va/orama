import { useState, useEffect, useRef } from 'react';
import _debounce from 'lodash/debounce';

const Cursor = () => {
  const [hasMouse, setHasMouse] = useState(false);
  const [cursor, setCursor] = useState({ size: { w: 10, h: 10 }, position: { x: 0, y: 0 } });
  const mouseRef = useRef({ x: 0, y: 0 });

  const updateCursorPosition = (x: number, y: number) => {
    const hoveredElement = document.elementFromPoint(x, y);

    if (hoveredElement && hoveredElement.getAttribute('cursor-focus') === 'true') {
      const info = hoveredElement.getBoundingClientRect();
      setCursor({
        size: { w: info.width + 6, h: info.height },
        position: { x: info.x - 3, y: info.y },
      });
    } else {
      setCursor({
        size: { w: 10, h: 10 },
        position: { x: x - 5, y: y - 5 },
      });
    }
  };

  const handleMouseMove = _debounce((event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    mouseRef.current = { x: mouseX, y: mouseY };
    updateCursorPosition(mouseX, mouseY);
  }, 10);

  const handleScroll = _debounce(() => {
    const { x, y } = mouseRef.current;
    updateCursorPosition(x, y);
  }, 10);

  useEffect(() => {
    const checkDevice = () => {
      setHasMouse(!('ontouchstart' in window || navigator.maxTouchPoints > 0));
    };
    checkDevice();

    if (hasMouse) {
      const handleMouseMoveRef = handleMouseMove;
      const handleScrollRef = handleScroll;
      
      document.addEventListener('mousemove', handleMouseMoveRef);
      window.addEventListener('scroll', handleScrollRef);
      
      return () => {
        document.removeEventListener('mousemove', handleMouseMoveRef);
        window.removeEventListener('scroll', handleScrollRef);
      };
    }
  });

  if (!hasMouse) {
    return null;
  }

  return (
    <div className='fixed w-screen h-screen z-50 pointer-events-none overflow-x-hidden'>
      <div
        className='absolute bg-black/0 backdrop-invert pointer-events-none transition-all ease-out duration-200'
        style={{
          width: `${cursor.size.w}px`,
          height: `${cursor.size.h}px`,
          left: `${cursor.position.x}px`,
          top: `${cursor.position.y}px`,
        }}
      ></div>
    </div>
  );
};

export default Cursor;
