import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { name: 'Week 1', actual: 4000, predicted: 4200 },
  { name: 'Week 2', actual: 3000, predicted: 3100 },
  { name: 'Week 3', actual: 2000, predicted: 2400 },
  { name: 'Week 4', actual: 2780, predicted: 2600 },
  { name: 'Week 5', actual: 1890, predicted: 2100 },
  { name: 'Week 6', actual: 2390, predicted: 2500 },
  { name: 'Week 7', actual: 3490, predicted: 3700 },
  { name: 'Week 8', actual: null, predicted: 4000 },
  { name: 'Week 9', actual: null, predicted: 4200 },
  { name: 'Week 10', actual: null, predicted: 3800 },
];

export function ForecastChart() {
  return (
    <Card className="bg-invenstory-dark border-white/5 shadow-neumorph-sm">
      <CardHeader>
        <CardTitle>Demand Forecast</CardTitle>
        <CardDescription>
          AI-powered sales prediction for the next 6 weeks
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorActual" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#6366F1" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#6366F1" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorPredicted" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#22C55E" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#22C55E" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis 
                dataKey="name" 
                stroke="#6c7281" 
                tick={{ fill: '#6c7281' }}
              />
              <YAxis 
                stroke="#6c7281" 
                tick={{ fill: '#6c7281' }}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'rgba(30, 41, 59, 0.8)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '8px',
                  color: '#F1F5F9'
                }}
              />
              <Legend />
              <Area 
                type="monotone" 
                dataKey="actual" 
                stroke="#6366F1" 
                fillOpacity={1} 
                fill="url(#colorActual)" 
                name="Actual Sales"
                strokeWidth={2}
              />
              <Area 
                type="monotone" 
                dataKey="predicted" 
                stroke="#22C55E" 
                fillOpacity={1} 
                fill="url(#colorPredicted)" 
                name="Predicted Sales"
                strokeWidth={2}
                strokeDasharray="5 5"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
