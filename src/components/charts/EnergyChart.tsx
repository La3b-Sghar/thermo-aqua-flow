
import { 
  AreaChart, 
  Area, 
  BarChart,
  Bar,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';

// Generate mock energy data for the dashboard
const generateMockEnergyData = () => {
  const data = [];
  const now = new Date();
  
  for (let i = 0; i < 10; i++) {
    const time = new Date(now);
    time.setMinutes(now.getMinutes() - (10 - i) * 10);
    
    data.push({
      time: time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      powerUsage: Math.floor(Math.random() * 50) + 350, // 350-400 kWh
      powerGenerated: Math.floor(Math.random() * 40) + 80, // 80-120 kWh
    });
  }
  
  return data;
};

const data = generateMockEnergyData();

interface EnergyChartProps {
  variant: 'area' | 'bar';
  title: string;
}

const EnergyChart = ({ variant, title }: EnergyChartProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 h-full">
      <h3 className="text-lg font-semibold mb-4 text-gray-800">{title}</h3>
      <ResponsiveContainer width="100%" height={280}>
        {variant === 'area' ? (
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis 
              dataKey="time" 
              tick={{ fontSize: 12 }}
              tickLine={false}
              axisLine={{ stroke: '#e5e7eb' }}
            />
            <YAxis 
              tick={{ fontSize: 12 }}
              tickLine={false}
              axisLine={{ stroke: '#e5e7eb' }}
              unit=" kWh"
            />
            <Tooltip />
            <Legend />
            <Area 
              type="monotone" 
              dataKey="powerUsage" 
              stackId="1"
              stroke="#6366f1" 
              fill="#6366f1" 
              fillOpacity={0.2}
              name="Power Usage"
            />
            <Area 
              type="monotone" 
              dataKey="powerGenerated" 
              stackId="2"
              stroke="#10b981" 
              fill="#10b981" 
              fillOpacity={0.2}
              name="Power Generated"
            />
          </AreaChart>
        ) : (
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis 
              dataKey="time" 
              tick={{ fontSize: 12 }}
              tickLine={false}
              axisLine={{ stroke: '#e5e7eb' }}
            />
            <YAxis 
              tick={{ fontSize: 12 }}
              tickLine={false}
              axisLine={{ stroke: '#e5e7eb' }}
              unit=" kWh"
            />
            <Tooltip />
            <Legend />
            <Bar 
              dataKey="powerGenerated" 
              fill="#10b981" 
              radius={[4, 4, 0, 0]}
              name="Power Generated"
            />
          </BarChart>
        )}
      </ResponsiveContainer>
    </div>
  );
};

export default EnergyChart;
