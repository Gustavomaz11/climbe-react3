import { useEffect, useRef } from 'react';

const TestAurora = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      console.error('Canvas 2D não suportado');
      return;
    }

    console.log('Iniciando TestAurora...');

    // Configurar tamanho
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      console.log('Canvas size:', canvas.width, 'x', canvas.height);
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Desenhar algo bem simples e visível
    const draw = () => {
      // Fundo vermelho bem opaco para teste
      ctx.fillStyle = 'rgba(255, 0, 0, 0.8)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Texto grande
      ctx.fillStyle = 'white';
      ctx.font = '48px Arial';
      ctx.textAlign = 'center';
      ctx.fillText('TESTE AURORA VISÍVEL', canvas.width / 2, canvas.height / 2);
      
      console.log('Desenhando TestAurora');
    };

    draw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 9999,
        background: 'red'
      }}
    />
  );
};

export default TestAurora;
