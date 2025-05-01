import { useRef, useEffect, useState } from 'react';

const Window = ({
  title,
  children,
  onClose,
  onMinimize,
  onFocus,
  zIndex,
  isClosing,
  initialPos,
  onDragEnd
}) => {
  const windowRef = useRef(null);
  const [closing, setClosing] = useState(false);
  const [position, setPosition] = useState({ x: initialPos.x, y: initialPos.y });

  useEffect(() => {
    if (isClosing) setClosing(true);
  }, [isClosing]);

  const onMouseDown = (e) => {
    onFocus?.();
    const offset = {
      x: e.clientX - windowRef.current.offsetLeft,
      y: e.clientY - windowRef.current.offsetTop
    };

    const onMouseMove = (e) => {
      const newX = e.clientX - offset.x;
      const newY = e.clientY - offset.y;
      setPosition({ x: newX, y: newY });
    };

    const onMouseUp = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
      onDragEnd?.(position);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  };

  // Tamaño personalizado solo para "Portafolio"
  const customSize = title === "Portafolio"
    ? { width: '900px', height: '500px' }
    : {};

  return (
    <div
      ref={windowRef}
      className={`window ${closing ? 'closing' : ''}`}
      style={{
        top: position.y,
        left: position.x,
        zIndex,
        ...customSize
      }}
    >
      <div className="title-bar" onMouseDown={onMouseDown}>
        <span>{title}</span>
        <div>
          <button className="close-btn" onClick={onMinimize}>🗕</button>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>
      </div>
      <div className="content">
        {children}
      </div>
    </div>
  );
};

export default Window;
