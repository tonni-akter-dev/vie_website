
interface DotIndicatorProps {
  width?: number;
  height?: number;
  direction?: 'horizontal' | 'vertical';
  colors?: string[];
  animationDuration?: number;
  animationDelay?: number;
  bounceDistance?: number;
  spacing?: number;
}

const DotIndicator = ({ 
  width = 16, 
  height = 16, 
  direction = 'horizontal',
  colors = ["#A5AC8A", "#C2C4AC", "#533115"],
  animationDuration = 3,
  animationDelay = 0.5,
  bounceDistance = 20,
  spacing = 16
}: DotIndicatorProps) => {
  const isHorizontal = direction === 'horizontal';
  const translateProperty = isHorizontal ? 'translateY' : 'translateX';
  const negativeDistance = isHorizontal ? `-${bounceDistance}px` : `-${bounceDistance}px`;

  return (
    <>
      <style>{`
        @keyframes sequentialBounce-${direction} {
          0% {
            transform: ${translateProperty}(0);
          }
          16.66% {
            transform: ${translateProperty}(${negativeDistance});
          }
          50% {
            transform: ${translateProperty}(${negativeDistance});
          }
          66.66% {
            transform: ${translateProperty}(0);
          }
          100% {
            transform: ${translateProperty}(0);
          }
        }
        .sequential-bounce-${direction} {
          animation: sequentialBounce-${direction} ${animationDuration}s infinite ease-in-out;
        }
      `}</style>
      <div className={`flex justify-center items-center mt-6 ${
        isHorizontal 
          ? `flex-row` 
          : `flex-col`
      }`} style={{
        gap: `${spacing}px`
      }}>
        {colors.map((color, index) => (
          <span
            key={index}
            className={`rounded-full sequential-bounce-${direction}`}
            style={{
              width: `${width}px`,
              height: `${height}px`,
              backgroundColor: color,
              animationDelay: `${(colors.length - 1 - index) * animationDelay}s`, 
            }}
          />
        ))}
      </div>
    </>
  );
};

export default DotIndicator;