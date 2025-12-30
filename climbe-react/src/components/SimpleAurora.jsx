import { useEffect, useRef } from 'react';

const SimpleAurora = ({ colorStops = ['#39c6bb', '#222222', '#ffffff'] }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      console.error('Canvas 2D não suportado');
      return;
    }

    console.log('Iniciando SimpleAurora...');

    // Configurar tamanho
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    let animationId;
    let time = 0;

    const animate = () => {
      time += 0.01;
      
      // Limpar canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Criar gradiente animado
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      
      // Adicionar cores com animação
      const offset1 = (Math.sin(time) + 1) / 2;
      const offset2 = (Math.cos(time * 0.7) + 1) / 2;
      
      gradient.addColorStop(0, colorStops[0] + '60');
      gradient.addColorStop(offset1, colorStops[1] + '40');
      gradient.addColorStop(offset2, colorStops[2] + '20');
      gradient.addColorStop(1, 'transparent');
      
      // Desenhar retângulo com gradiente
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Adicionar efeito de onda aurora
      ctx.beginPath();
      ctx.moveTo(0, canvas.height / 2);
      
      for (let x = 0; x <= canvas.width; x += 10) {
        const y = canvas.height / 2 + Math.sin((x * 0.01) + time) * 150 + Math.cos((x * 0.005) + time * 0.5) * 50;
        ctx.lineTo(x, y);
      }
      
      ctx.lineTo(canvas.width, canvas.height);
      ctx.lineTo(0, canvas.height);
      ctx.closePath();
      
      const waveGradient = ctx.createLinearGradient(0, canvas.height / 2 - 150, 0, canvas.height);
      waveGradient.addColorStop(0, 'transparent');
      waveGradient.addColorStop(0.3, colorStops[0] + '80');
      waveGradient.addColorStop(0.7, colorStops[1] + '60');
      waveGradient.addColorStop(1, 'transparent');
      
      ctx.fillStyle = waveGradient;
      ctx.fill();
      
      // Segunda onda para mais profundidade
      ctx.beginPath();
      ctx.moveTo(0, canvas.height / 2 + 50);
      
      for (let x = 0; x <= canvas.width; x += 15) {
        const y = canvas.height / 2 + 50 + Math.sin((x * 0.008) + time * 1.2) * 100;
        ctx.lineTo(x, y);
      }
      
      ctx.lineTo(canvas.width, canvas.height);
      ctx.lineTo(0, canvas.height);
      ctx.closePath();
      
      const waveGradient2 = ctx.createLinearGradient(0, canvas.height / 2 - 50, 0, canvas.height);
      waveGradient2.addColorStop(0, 'transparent');
      waveGradient2.addColorStop(0.4, colorStops[0] + '40');
      waveGradient2.addColorStop(0.8, colorStops[2] + '30');
      waveGradient2.addColorStop(1, 'transparent');
      
      ctx.fillStyle = waveGradient2;
      ctx.fill();
      
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [colorStops]);

  return (
    <canvas
      ref={canvasRef}
      style={{ 
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
        pointerEvents: 'none'
      }}
    />
  );
};

export default SimpleAurora;
