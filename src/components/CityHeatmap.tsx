import { useState } from 'react';

interface AreaRanking {
  id: string;
  name: string;
  ranking: number; // 1-5 ranking vs competitors
  competitor?: string;
  searchVolume: number;
  conversionRate: number;
  path: string; // SVG path data
}

const mockData: AreaRanking[] = [
  {
    id: 'downtown',
    name: 'Downtown',
    ranking: 1,
    searchVolume: 2400,
    conversionRate: 8.2,
    path: 'M 150 200 L 250 200 L 250 300 L 150 300 Z'
  },
  {
    id: 'north-suburbs',
    name: 'North Suburbs',
    ranking: 4,
    competitor: 'Competitor A',
    searchVolume: 1800,
    conversionRate: 3.1,
    path: 'M 100 100 L 300 100 L 300 200 L 100 200 Z'
  },
  {
    id: 'south-suburbs',
    name: 'South Suburbs',
    ranking: 2,
    searchVolume: 1600,
    conversionRate: 6.4,
    path: 'M 150 300 L 250 300 L 250 400 L 150 400 Z'
  },
  {
    id: 'east-side',
    name: 'East Side',
    ranking: 3,
    searchVolume: 1200,
    conversionRate: 4.8,
    path: 'M 250 150 L 350 150 L 350 350 L 250 350 Z'
  },
  {
    id: 'west-side',
    name: 'West Side',
    ranking: 1,
    searchVolume: 1400,
    conversionRate: 7.9,
    path: 'M 50 150 L 150 150 L 150 350 L 50 350 Z'
  },
  {
    id: 'industrial',
    name: 'Industrial District',
    ranking: 5,
    competitor: 'Competitor B',
    searchVolume: 800,
    conversionRate: 2.3,
    path: 'M 100 400 L 300 400 L 300 450 L 100 450 Z'
  }
];

export function CityHeatmap() {
  const [hoveredArea, setHoveredArea] = useState<string | null>(null);
  const [selectedArea, setSelectedArea] = useState<string | null>(null);

  const getColorByRanking = (ranking: number): string => {
    switch (ranking) {
      case 1: return '#0f172a'; // Dark slate - Dominating
      case 2: return '#475569'; // Medium slate - Strong  
      case 3: return '#94a3b8'; // Light slate - Competitive
      case 4: return '#cbd5e1'; // Very light slate - Weak
      case 5: return '#ef4444'; // Red - Losing
      default: return '#cbd5e1';
    }
  };

  const getRankingLabel = (ranking: number): string => {
    switch (ranking) {
      case 1: return 'Dominating';
      case 2: return 'Strong';
      case 3: return 'Competitive';
      case 4: return 'Weak';
      case 5: return 'Losing';
      default: return 'Unknown';
    }
  };

  const hoveredData = hoveredArea ? mockData.find(area => area.id === hoveredArea) : null;

  return (
    <div className="space-y-8">
      {/* Heatmap */}
      <div className="relative bg-white border border-slate-200 p-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Map */}
          <div className="flex-1">
            <svg 
              viewBox="0 0 400 500" 
              className="w-full h-auto max-w-sm sm:max-w-md mx-auto"
              style={{ maxHeight: '350px', minHeight: '250px' }}
            >
              {mockData.map((area) => (
                <g key={area.id}>
                  <path
                    d={area.path}
                    fill={getColorByRanking(area.ranking)}
                    stroke="#ffffff"
                    strokeWidth="2"
                    className="cursor-pointer transition-all duration-200"
                    style={{
                      filter: hoveredArea === area.id ? 'brightness(1.1)' : 'none',
                      transform: hoveredArea === area.id ? 'scale(1.02)' : 'scale(1)',
                      transformOrigin: 'center'
                    }}
                    onMouseEnter={() => setHoveredArea(area.id)}
                    onMouseLeave={() => setHoveredArea(null)}
                    onClick={() => setSelectedArea(selectedArea === area.id ? null : area.id)}
                  />
                  {/* Area Labels */}
                  <text
                    x={area.id === 'downtown' ? 200 : area.id === 'north-suburbs' ? 200 : 
                      area.id === 'south-suburbs' ? 200 : area.id === 'east-side' ? 300 :
                      area.id === 'west-side' ? 100 : 200}
                    y={area.id === 'downtown' ? 250 : area.id === 'north-suburbs' ? 150 : 
                      area.id === 'south-suburbs' ? 350 : area.id === 'east-side' ? 250 :
                      area.id === 'west-side' ? 250 : 425}
                    textAnchor="middle"
                    className="text-xs font-medium fill-white pointer-events-none"
                    style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}
                  >
                    {area.name}
                  </text>
                </g>
              ))}
            </svg>
          </div>

          {/* Legend and Info */}
          <div className="lg:w-80 space-y-6">
            {/* Legend */}
            <div>
              <h4 className="text-sm font-medium mb-4">Market Position</h4>
              <div className="space-y-2">
                {[1, 2, 3, 4, 5].map(rank => (
                  <div key={rank} className="flex items-center gap-3">
                    <div 
                      className="w-4 h-4 rounded-sm"
                      style={{ backgroundColor: getColorByRanking(rank) }}
                    />
                    <span className="text-sm font-light text-slate-600">
                      {getRankingLabel(rank)}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Hover Info */}
            {hoveredData && (
              <div className="bg-slate-50 border border-slate-200 p-4 rounded">
                <h5 className="font-medium mb-2">{hoveredData.name}</h5>
                <div className="space-y-1 text-sm text-slate-600">
                  <div className="flex justify-between">
                    <span>Ranking:</span>
                    <span className="font-medium">#{hoveredData.ranking}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Search Volume:</span>
                    <span>{hoveredData.searchVolume.toLocaleString()}/mo</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Conversion Rate:</span>
                    <span>{hoveredData.conversionRate}%</span>
                  </div>
                  {hoveredData.competitor && (
                    <div className="pt-2 border-t border-slate-200 mt-2">
                      <span className="text-xs text-red-600">
                        {hoveredData.competitor} dominates here
                      </span>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Key Insights */}
      <div className="bg-slate-50 border border-slate-200 p-6">
        <h4 className="text-lg font-medium mb-4">Geographic Intelligence Summary</h4>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
            <div>
              <span className="font-medium text-slate-900">You dominate downtown and west side</span>
              <p className="text-slate-600 font-light">Strong search rankings and high conversion rates in core business areas.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
            <div>
              <span className="font-medium text-slate-900">Competitor A owns north suburbs</span>
              <p className="text-slate-600 font-light">High search volume area where you're ranking #4. Priority optimization target.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-amber-500 mt-2 flex-shrink-0"></div>
            <div>
              <span className="font-medium text-slate-900">East side opportunity</span>
              <p className="text-slate-600 font-light">Competitive market with room for improvement and growth potential.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-slate-400 mt-2 flex-shrink-0"></div>
            <div>
              <span className="font-medium text-slate-900">Industrial district challenge</span>
              <p className="text-slate-600 font-light">Competitor B dominates. Consider if this market aligns with your business goals.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}