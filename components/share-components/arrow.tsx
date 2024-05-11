export default function SmallArrow({
  fillColor,
  className,
}: {
  fillColor: string;
  className?: string;
}) {
  return (
    <div className={`${className}`}>
      <svg
        width='12'
        height='13'
        viewBox='0 0 12 13'
        className='duration-300'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <rect
          x='2'
          y='12.5'
          width='4'
          height='4'
          transform='rotate(-90 2 12.5)'
          fill={`${fillColor}`}
        />
        <rect
          x='6'
          y='8.5'
          width='4'
          height='4'
          transform='rotate(-90 6 8.5)'
          fill={`${fillColor}`}
        />
        <rect
          x='2'
          y='4.5'
          width='4'
          height='4'
          transform='rotate(-90 2 4.5)'
          fill={`${fillColor}`}
        />
      </svg>
    </div>
  );
}
