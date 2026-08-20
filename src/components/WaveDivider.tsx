interface WaveDividerProps {
  fromColor: string;
  toColor: string;
  flip?: boolean;
}

export function WaveDivider({ fromColor, toColor, flip = false }: WaveDividerProps) {
  return (
    <div
      className="relative w-full overflow-hidden leading-none"
      style={{ backgroundColor: fromColor, transform: flip ? "scaleY(-1)" : undefined }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1200 80"
        preserveAspectRatio="none"
        className="block w-full h-[46px] md:h-[64px]"
      >
        <path
          d="M0,32 C150,72 300,0 450,24 C600,48 750,72 900,40 C1030,14 1120,10 1200,28 L1200,80 L0,80 Z"
          fill={toColor}
        />
      </svg>
    </div>
  );
}
