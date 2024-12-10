import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const mockData = [
  { month: 'Jan', players: 2000 },
  { month: 'Feb', players: 3000 },
  { month: 'Mar', players: 4500 },
  { month: 'Apr', players: 5800 },
  { month: 'May', players: 7200 },
  { month: 'Jun', players: 8500 },
  { month: 'Jul', players: 10000 },
];

export default function TrendGraph() {
  return (
    <div className="h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={mockData}>
          <defs>
            <linearGradient id="playerGrowth" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#FF2882" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#FF2882" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <XAxis 
            dataKey="month" 
            stroke="#ffffff60"
            tick={{ fill: '#ffffff90' }}
          />
          <YAxis 
            stroke="#ffffff60"
            tick={{ fill: '#ffffff90' }}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: '#1a1a2e',
              border: 'none',
              borderRadius: '8px',
              color: '#fff'
            }}
          />
          <Area
            type="monotone"
            dataKey="players"
            stroke="#FF2882"
            fillOpacity={1}
            fill="url(#playerGrowth)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}