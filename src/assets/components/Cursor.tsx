import { useState, useEffect } from 'react';
import _debounce from 'lodash/debounce';

const Cursor = () => {
  const [cursor, setCursor] = useState({
    position: { x: 0, y: 0 },
    size: { w: 10, h: 10 }
  });

  const updateMousePosition = (event: MouseEvent) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    
    const hoveredElement = document.elementFromPoint(mouseX, mouseY);

    if (hoveredElement && hoveredElement.getAttribute('cursor-focus') === 'true') {
      const info = hoveredElement.getBoundingClientRect();
      setCursor({
        size: { w: info.width+6, h: info.height },
        position: { x: info.x-3, y: info.y }
      });
    } else {
      setCursor({
        size: { w: 10, h: 10 },
        position: { x: mouseX - 5, y: mouseY - 5 }
      });
    }
  };

  const handleMouseMove = _debounce(updateMousePosition, 10);

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [handleMouseMove]);

  return (
    <div 
      className="absolute z-50 bg-black/0 backdrop-invert pointer-events-none transition-all ease-out duration-200"
      style={{ 
        width: `${cursor.size.w}px`, 
        height: `${cursor.size.h}px`, 
        left: `${cursor.position.x}px`, 
        top: `${cursor.position.y}px` 
      }}
    >
    </div>
  );
};

export default Cursor;
