import React, { useState } from 'react';
import { 
  TrendingUp, 
  DollarSign, 
  BarChart3, 
  ArrowUpRight, 
  ArrowDownRight,
  AlertCircle,
  RefreshCcw,
  History
} from 'lucide-react';
import { 
  LineChart, 
  Line,
  AreaChart,
  Area,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

// Mock data for price optimization suggestions
const mockPriceData = [
  { id: 1, name: 'Premium T-Shirt', currentPrice: 29.99, suggestedPrice: 34.99, confidence: 85, reason: 'High demand, low stock' },
  { id: 2, name: 'Classic Jeans', currentPrice: 59.99, suggestedPrice: 54.99, confidence: 92, reason: 'Competitive pricing adjustment' },
  { id: 3, name: 'Running Shoes', currentPrice: 89.99, suggestedPrice: 99.99, confidence: 88, reason: 'Seasonal demand increase' },
  { id: 4, name: 'Leather Wallet', currentPrice: 39.99, suggestedPrice: 34.99, confidence: 78, reason: 'Slow moving inventory' },
];

// Mock data for price history
const priceHistoryData = [
  { date: 'Jan', price: 29.99, demand: 82 },
  { date: 'Feb', price: 32.99, demand: 78 },
  { date: 'Mar', price: 34.99, demand: 95 },
  { date: 'Apr', price: 29.99, demand: 88 },
  { date: 'May', price: 27.99, demand: 72 },
  { date: 'Jun', price: 34.99, demand: 89 },
];

const PricingPage = () => {
  const [selectedProduct, setSelectedProduct] = useState(mockPriceData[0]);

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Pricing Optimization</h1>
          <p className="text-gray-400 mt-1">AI-powered price suggestions based on market demand and inventory levels</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <RefreshCcw className="mr-2 h-4 w-4" />
          Refresh Analysis
        </Button>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-invenstory-dark border-white/5 shadow-neumorph-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-400">Revenue Impact</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold">+$12,480</div>
                <div className="flex items-center text-green-400 text-sm mt-1">
                  <ArrowUpRight className="h-4 w-4 mr-1" />
                  <span>Projected monthly increase</span>
                </div>
              </div>
              <div className="w-12 h-12 rounded-full bg-green-400/10 flex items-center justify-center">
                <DollarSign className="h-6 w-6 text-green-400" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-invenstory-dark border-white/5 shadow-neumorph-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-400">Price Changes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold">24</div>
                <div className="flex items-center text-blue-400 text-sm mt-1">
                  <History className="h-4 w-4 mr-1" />
                  <span>Suggestions available</span>
                </div>
              </div>
              <div className="w-12 h-12 rounded-full bg-blue-400/10 flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-blue-400" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-invenstory-dark border-white/5 shadow-neumorph-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-400">Average Confidence</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold">85.8%</div>
                <div className="flex items-center text-purple-400 text-sm mt-1">
                  <BarChart3 className="h-4 w-4 mr-1" />
                  <span>ML model accuracy</span>
                </div>
              </div>
              <div className="w-12 h-12 rounded-full bg-purple-400/10 flex items-center justify-center">
                <AlertCircle className="h-6 w-6 text-purple-400" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Price Suggestions Table */}
      <Card className="bg-invenstory-dark border-white/5">
        <CardHeader>
          <CardTitle>Price Optimization Suggestions</CardTitle>
          <CardDescription>Click on a product to view detailed analysis</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockPriceData.map((product) => (
              <div
                key={product.id}
                className={`p-4 rounded-lg cursor-pointer transition-colors ${
                  selectedProduct.id === product.id
                    ? 'bg-blue-500/10 border border-blue-500/20'
                    : 'bg-gray-800/50 hover:bg-gray-800/70'
                }`}
                onClick={() => setSelectedProduct(product)}
              >
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <h3 className="font-medium">{product.name}</h3>
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline" className="text-gray-400">
                        Current: ${product.currentPrice}
                      </Badge>
                      <Badge variant="outline" className="text-green-400">
                        Suggested: ${product.suggestedPrice}
                      </Badge>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-400">Confidence</span>
                      <span className="font-medium">{product.confidence}%</span>
                    </div>
                    <Progress value={product.confidence} className="w-32 mt-1" />
                  </div>
                </div>
                <p className="text-sm text-gray-400 mt-2">{product.reason}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Price History Chart */}
      <Card className="bg-invenstory-dark border-white/5">
        <CardHeader>
          <CardTitle>Price & Demand Trends</CardTitle>
          <CardDescription>Historical price changes and demand correlation</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={priceHistoryData}>
                <defs>
                  <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="date" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1f2937',
                    border: '1px solid #374151',
                    borderRadius: '0.5rem'
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="price"
                  stroke="#3b82f6"
                  fillOpacity={1}
                  fill="url(#colorPrice)"
                />
                <Line
                  type="monotone"
                  dataKey="demand"
                  stroke="#10b981"
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PricingPage; 