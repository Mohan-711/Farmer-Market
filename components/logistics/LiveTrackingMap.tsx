import { MapPin } from 'lucide-react';

const cityNodes = [
  { name: 'Pune', x: 130, y: 142, label: 'Pickup' },
  { name: 'Mumbai', x: 170, y: 118, label: 'Destination' },
  { name: 'Nagpur', x: 218, y: 102, label: 'Hub' },
  { name: 'Bangalore', x: 205, y: 180, label: 'Stop' },
];

export function LiveTrackingMap() {
  return (
    <div className="rounded-[20px] border border-[#e7ebe7] bg-white p-4 shadow-[0_10px_24px_rgba(18,58,45,0.04)]">
      <div className="mb-4 flex items-center justify-between">
        <div className="text-xl font-black tracking-[-0.05em] text-[#123a2d]">Live Tracking</div>
      </div>

      <div className="relative overflow-hidden rounded-[18px] border border-[#e7ebe7] bg-[#f0f7f1] p-3">
        <svg viewBox="0 0 360 220" className="h-[220px] w-full rounded-[14px] bg-[#edf8ef]" aria-label="India logistics route map">
          <defs>
            <linearGradient id="indiaFill" x1="0" x2="1">
              <stop offset="0%" stopColor="#e8f5eb" />
              <stop offset="100%" stopColor="#dfeee4" />
            </linearGradient>
          </defs>

          <path
            d="M98 35 L124 25 L160 34 L176 22 L204 24 L226 34 L245 55 L262 45 L286 62 L300 83 L315 102 L322 130 L312 152 L287 170 L270 194 L250 201 L233 190 L217 197 L199 188 L185 202 L160 204 L143 192 L127 186 L113 172 L92 158 L83 136 L77 117 L86 93 L91 71 Z"
            fill="url(#indiaFill)"
            stroke="#8fbda0"
            strokeWidth="2.5"
          />

          <path
            d="M128 145 L150 132 L166 120 L192 122 L208 110 L232 108 L246 92"
            fill="none"
            stroke="#0f7b4a"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray="8 8"
          />

          <path
            d="M166 120 L185 140 L216 166"
            fill="none"
            stroke="#0f7b4a"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray="8 8"
          />

          {cityNodes.map((city) => (
            <g key={city.name}>
              <circle cx={city.x} cy={city.y} r="10" fill="#0f7b4a" opacity="0.12" />
              <circle cx={city.x} cy={city.y} r="6" fill="#0f7b4a" />
              <circle cx={city.x} cy={city.y} r="2.5" fill="#ffffff" />
              <text x={city.x + 12} y={city.y - 12} fill="#123a2d" fontSize="10" fontWeight="700">
                {city.name}
              </text>
              <text x={city.x + 12} y={city.y + 12} fill="#5f6f64" fontSize="8" fontWeight="600">
                {city.label}
              </text>
            </g>
          ))}
        </svg>

        <div className="absolute bottom-3 left-3 rounded-full bg-white/80 px-2.5 py-1 text-[0.68rem] font-semibold text-[#123a2d] shadow-sm backdrop-blur-sm">
          Pune • Pickup
        </div>
        <div className="absolute right-3 top-3 rounded-full bg-white/80 px-2.5 py-1 text-[0.68rem] font-semibold text-[#123a2d] shadow-sm backdrop-blur-sm">
          Mumbai • Delivering
        </div>
      </div>
    </div>
  );
}
