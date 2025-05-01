import { useRef, useState } from 'react';

const DesktopIcon = ({ icon, title, onClick, position, onPositionChange }) => {
  const iconRef = useRef(null);
  const [dragging, setDragging] = useState(false);

  const onMouseDown = (e) => {
    const startX = e.clientX;
    const startY = e.clientY;
    const startLeft = iconRef.current.offsetLeft;
    const startTop = iconRef.current.offsetTop;
    setDragging(true);

    const onMouseMove = (e) => {
      const newLeft = startLeft + e.clientX - startX;
      const newTop = startTop + e.clientY - startY;
      iconRef.current.style.left = `${newLeft}px`;
      iconRef.current.style.top = `${newTop}px`;
    };

    const onMouseUp = (e) => {
      const movedX = Math.abs(e.clientX - startX);
      const movedY = Math.abs(e.clientY - startY);

      setDragging(false);
      onPositionChange(title, {
        x: iconRef.current.offsetLeft,
        y: iconRef.current.offsetTop
      });

      // Solo ejecutar onClick si no se arrastró
      if (movedX < 5 && movedY < 5) {
        onClick();
      }

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  };

  return (
    <div
      className="icon"
      ref={iconRef}
      onMouseDown={onMouseDown}
      style={{
        position: 'absolute',
        left: position?.x ?? 0,
        top: position?.y ?? 0,
        zIndex: dragging ? 999 : 'auto'
      }}
    >
      <img src={icon} alt={title} />
      <p>{title}</p>
    </div>
  );
};

export default DesktopIcon;
