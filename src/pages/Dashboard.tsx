import React, { useState } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Package, 
  TrendingUp, 
  DollarSign, 
  Users, 
  FileText, 
  Settings,
  Search,
  Bell,
  User,
  ChevronDown,
  BarChart3,
  Activity,
  AlertCircle,
  CheckCircle2,
  ShoppingCart,
  ArrowUpRight,
  ArrowDownRight,
  PlusCircle,
  Download,
  FileBarChart,
  Trash2,
  X,
  Menu
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  BarChart as ReBarChart, 
  Bar, 
  LineChart, 
  Line,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  PieChart, 
  Pie, 
  Cell 
} from 'recharts';
import { cn } from "@/lib/utils";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { 
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger
} from '@/components/ui/sidebar';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useIsMobile } from '@/hooks/use-mobile';
import InventoryPage from './Inventory';
import ForecastingPage from './ForecastingPage'
import RecommendationsPage from './RecommendationsPage';
import PricingPage from './PricingPage';

// Mock data for charts and tables
const salesData = [
  { name: 'Jan', value: 4000 },
  { name: 'Feb', value: 3000 },
  { name: 'Mar', value: 2000 },
  { name: 'Apr', value: 2780 },
  { name: 'May', value: 1890 },
  { name: 'Jun', value: 2390 },
  { name: 'Jul', value: 3490 },
];

const stockLevels = [
  { name: 'T-Shirts', value: 70 },
  { name: 'Jeans', value: 45 },
  { name: 'Shoes', value: 90 },
  { name: 'Accessories', value: 30 },
];

const recentProducts = [
  { id: 1, name: 'Premium T-Shirt', sku: 'TS-001', stock: 120, demand: 'High', price: '$29.99', supplier: 'ClothCo' },
  { id: 2, name: 'Classic Jeans', sku: 'JN-002', stock: 45, demand: 'Medium', price: '$59.99', supplier: 'DenimWorld' },
  { id: 3, name: 'Running Shoes', sku: 'SH-003', stock: 23, demand: 'High', price: '$89.99', supplier: 'SportGear' },
  { id: 4, name: 'Leather Wallet', sku: 'AC-004', stock: 78, demand: 'Low', price: '$39.99', supplier: 'AccessoryHub' },
  { id: 5, name: 'Winter Jacket', sku: 'JK-005', stock: 12, demand: 'Medium', price: '$129.99', supplier: 'OutwearCo' },
];

const alertsData = [
  { id: 1, type: 'urgent', message: 'Low stock alert: Running Shoes (SH-003)', time: '10 min ago' },
  { id: 2, type: 'warning', message: 'Sales spike detected for Premium T-Shirt', time: '1 hour ago' },
  { id: 3, type: 'info', message: 'New shipment arrived from DenimWorld', time: '3 hours ago' },
  { id: 4, type: 'success', message: 'Price optimization complete for 24 products', time: 'Yesterday' },
];

const COLORS = ['#9b87f5', '#33C3F0', '#FF8042', '#00C49F'];

const DashboardHome = () => {
  return (
    <div className="space-y-6">
      {/* Top Row - Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Total Sales */}
        <Card className="bg-invenstory-dark border-white/5 shadow-neumorph-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-400">Total Sales</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold">$24,780</div>
                <div className="flex items-center text-green-400 text-sm mt-1">
                  <ArrowUpRight className="h-4 w-4 mr-1" />
                  <span>18.2% vs last month</span>
                </div>
              </div>
              <div className="w-12 h-12 rounded-full bg-green-400/10 flex items-center justify-center">
                <DollarSign className="h-6 w-6 text-green-400" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Total Orders */}
        <Card className="bg-invenstory-dark border-white/5 shadow-neumorph-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-400">Total Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold">1,463</div>
                <div className="flex items-center text-green-400 text-sm mt-1">
                  <ArrowUpRight className="h-4 w-4 mr-1" />
                  <span>12.5% vs last month</span>
                </div>
              </div>
              <div className="w-12 h-12 rounded-full bg-blue-400/10 flex items-center justify-center">
                <ShoppingCart className="h-6 w-6 text-blue-400" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Inventory Value */}
        <Card className="bg-invenstory-dark border-white/5 shadow-neumorph-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-400">Inventory Value</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold">$187,350</div>
                <div className="flex items-center text-yellow-400 text-sm mt-1">
                  <ArrowUpRight className="h-4 w-4 mr-1" />
                  <span>3.8% vs last month</span>
                </div>
              </div>
              <div className="w-12 h-12 rounded-full bg-yellow-400/10 flex items-center justify-center">
                <Package className="h-6 w-6 text-yellow-400" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Out of Stock */}
        <Card className="bg-invenstory-dark border-white/5 shadow-neumorph-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-400">Out of Stock</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold">7</div>
                <div className="flex items-center text-red-400 text-sm mt-1">
                  <ArrowDownRight className="h-4 w-4 mr-1" />
                  <span>2 more than last week</span>
                </div>
              </div>
              <div className="w-12 h-12 rounded-full bg-red-400/10 flex items-center justify-center">
                <AlertCircle className="h-6 w-6 text-red-400" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Middle Row - Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Sales Trends */}
        <Card className="bg-invenstory-dark border-white/5 shadow-neumorph-sm">
          <CardHeader>
            <CardTitle>Sales Trends</CardTitle>
            <CardDescription>Monthly sales performance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={salesData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#9b87f5" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#9b87f5" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis 
                    dataKey="name" 
                    stroke="#6c7281" 
                    tick={{ fill: '#6c7281' }} 
                  />
                  <YAxis stroke="#6c7281" tick={{ fill: '#6c7281' }} />
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#2a2a2a" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1A1F2C', 
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '8px'
                    }} 
                    labelStyle={{ color: '#fff' }}
                    itemStyle={{ color: '#9b87f5' }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#9b87f5" 
                    fillOpacity={1} 
                    fill="url(#colorValue)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        
        {/* Stock Levels */}
        <Card className="bg-invenstory-dark border-white/5 shadow-neumorph-sm">
          <CardHeader>
            <CardTitle>Inventory Health</CardTitle>
            <CardDescription>Current stock levels by category</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center h-[300px]">
              <div className="w-1/2 h-full">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={stockLevels}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {stockLevels.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#1A1F2C', 
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: '8px'
                      }} 
                      itemStyle={{ color: '#fff' }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="w-1/2 space-y-4 pl-6">
                {stockLevels.map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="flex items-center">
                        <span 
                          className="w-3 h-3 rounded-full mr-2" 
                          style={{ backgroundColor: COLORS[index % COLORS.length] }}
                        ></span>
                        {item.name}
                      </span>
                      <span>{item.value}%</span>
                    </div>
                    <Progress 
                      value={item.value} 
                      className="h-2" 
                      style={{
                        backgroundColor: COLORS[index % COLORS.length]
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Bottom Row - Table and Alerts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Products Table */}
        <Card className="bg-invenstory-dark border-white/5 shadow-neumorph-sm lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Recent Products</CardTitle>
              <CardDescription>Latest inventory updates</CardDescription>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="border-white/10">
                  Actions
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-invenstory-dark-accent border-white/10">
                <DropdownMenuItem className="cursor-pointer">
                  <PlusCircle className="mr-2 h-4 w-4" />
                  <span>Add Product</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <Download className="mr-2 h-4 w-4" />
                  <span>Export Data</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator className="bg-white/10" />
                <DropdownMenuItem className="cursor-pointer">
                  <FileBarChart className="mr-2 h-4 w-4" />
                  <span>Generate Report</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-3 px-4 text-gray-400 font-medium text-sm">Product</th>
                    <th className="text-left py-3 px-4 text-gray-400 font-medium text-sm">SKU</th>
                    <th className="text-left py-3 px-4 text-gray-400 font-medium text-sm">Stock</th>
                    <th className="text-left py-3 px-4 text-gray-400 font-medium text-sm">Demand</th>
                    <th className="text-left py-3 px-4 text-gray-400 font-medium text-sm">Price</th>
                    <th className="text-left py-3 px-4 text-gray-400 font-medium text-sm">Supplier</th>
                  </tr>
                </thead>
                <tbody>
                  {recentProducts.map((product) => (
                    <tr 
                      key={product.id} 
                      className="border-b border-white/5 hover:bg-white/5 transition-colors"
                    >
                      <td className="py-3 px-4">{product.name}</td>
                      <td className="py-3 px-4 text-gray-400">{product.sku}</td>
                      <td className="py-3 px-4">
                        <Badge 
                          className={cn(
                            "font-normal",
                            product.stock < 20 ? "bg-red-500" : 
                            product.stock < 50 ? "bg-yellow-500" : 
                            "bg-green-500"
                          )}
                        >
                          {product.stock}
                        </Badge>
                      </td>
                      <td className="py-3 px-4">
                        <Badge variant="outline" className="font-normal border-white/10">
                          {product.demand}
                        </Badge>
                      </td>
                      <td className="py-3 px-4">{product.price}</td>
                      <td className="py-3 px-4 text-gray-400">{product.supplier}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
          <CardFooter className="border-t border-white/5 flex justify-between">
            <div className="text-sm text-gray-400">
              Showing 5 of 128 products
            </div>
            <Button variant="ghost" size="sm">
              View All
            </Button>
          </CardFooter>
        </Card>
        
        {/* Alerts */}
        <Card className="bg-invenstory-dark border-white/5 shadow-neumorph-sm">
          <CardHeader>
            <CardTitle>Alerts & Notifications</CardTitle>
            <CardDescription>Recent system alerts</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {alertsData.map((alert) => (
                <div 
                  key={alert.id} 
                  className="bg-invenstory-dark-accent rounded-lg p-3 border-l-2 flex items-start gap-3"
                  style={{ 
                    borderLeftColor: 
                      alert.type === 'urgent' ? '#ef4444' : 
                      alert.type === 'warning' ? '#f59e0b' : 
                      alert.type === 'success' ? '#10b981' : 
                      '#3b82f6'
                  }}
                >
                  <div className="flex-shrink-0 mt-1">
                    {alert.type === 'urgent' && <AlertCircle className="h-5 w-5 text-red-400" />}
                    {alert.type === 'warning' && <AlertCircle className="h-5 w-5 text-yellow-400" />}
                    {alert.type === 'success' && <CheckCircle2 className="h-5 w-5 text-green-400" />}
                    {alert.type === 'info' && <Activity className="h-5 w-5 text-blue-400" />}
                  </div>
                  <div className="flex-grow">
                    <p className="text-sm">{alert.message}</p>
                    <p className="text-xs text-gray-400 mt-1">{alert.time}</p>
                  </div>
                  <Button variant="ghost" size="icon" className="h-6 w-6">
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter className="border-t border-white/5">
            <Button variant="ghost" size="sm" className="w-full">
              View All Alerts
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

// Placeholder components for the other routes
// const ForecastingPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Demand Forecasting</h1></div>;
// const PricingPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Pricing Optimization</h1></div>;
// const RecommendationsPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Personalized Recommendations</h1></div>;
const ReportsPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Reports & Insights</h1></div>;
const SettingsPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Settings & Integrations</h1></div>;

const Dashboard = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen flex bg-invenstory-dark">
      {/* Sidebar */}
      <Sidebar className="bg-invenstory-dark-accent border-r border-white/5">
        <SidebarHeader className="p-4 border-b border-white/5">
          <div className="flex items-center">
            <BarChart3 className="h-6 w-6 text-invenstory-primary mr-2" />
            <span className="text-xl font-bold">Invenstory</span>
          </div>
        </SidebarHeader>
        <SidebarContent className="p-3">
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link to="/dashboard">
                  <LayoutDashboard className="h-5 w-5" />
                  <span>Dashboard</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link to="/dashboard/inventory">
                  <Package className="h-5 w-5" />
                  <span>Inventory</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link to="/dashboard/forecasting">
                  <TrendingUp className="h-5 w-5" />
                  <span>Forecasting</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link to="/dashboard/pricing">
                  <DollarSign className="h-5 w-5" />
                  <span>Pricing</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link to="/dashboard/recommendations">
                  <Users className="h-5 w-5" />
                  <span>Recommendations</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link to="/dashboard/reports">
                  <FileText className="h-5 w-5" />
                  <span>Reports</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link to="/dashboard/settings">
                  <Settings className="h-5 w-5" />
                  <span>Settings</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter className="p-4 border-t border-white/5">
          <div className="flex items-center">
            <Avatar className="h-8 w-8 mr-3">
              <AvatarImage src="https://github.com/shadcn.png" alt="User" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="flex-grow">
              <p className="text-sm font-medium">John Doe</p>
              <p className="text-xs text-gray-400">Store Manager</p>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-invenstory-dark-accent border-white/10">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-white/10" />
                <DropdownMenuItem className="cursor-pointer">
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator className="bg-white/10" />
                <Link to="/">
                  <DropdownMenuItem className="cursor-pointer text-red-400">
                    Logout
                  </DropdownMenuItem>
                </Link>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </SidebarFooter>
      </Sidebar>

      {/* Main Content */}
      <div className="flex-1 flex flex-col w-full">
        {/* Top Navigation */}
        <header className="h-16 border-b border-white/5 bg-invenstory-dark flex items-center justify-between px-4 w-full">
          <div className="flex items-center">
            <SidebarTrigger className="md:hidden mr-3" />
            
            {isMobile ? (
              <button 
                className="flex md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            ) : (
              <div className="relative max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input 
                  type="search" 
                  placeholder="Search..." 
                  className="pl-10 bg-invenstory-dark-accent border-white/10 w-[240px]"
                />
              </div>
            )}
          </div>

          <div className="flex items-center space-x-3">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                  <Bell className="h-5 w-5" />
                  <span className="absolute top-1 right-1 bg-red-500 rounded-full w-2 h-2"></span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-80 bg-invenstory-dark-accent border-white/10">
                <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-white/10" />
                {alertsData.slice(0, 3).map((alert) => (
                  <DropdownMenuItem key={alert.id} className="cursor-pointer flex items-start p-3">
                    <div className="flex-shrink-0 mr-3 mt-1">
                      {alert.type === 'urgent' && <AlertCircle className="h-5 w-5 text-red-400" />}
                      {alert.type === 'warning' && <AlertCircle className="h-5 w-5 text-yellow-400" />}
                      {alert.type === 'success' && <CheckCircle2 className="h-5 w-5 text-green-400" />}
                      {alert.type === 'info' && <Activity className="h-5 w-5 text-blue-400" />}
                    </div>
                    <div className="flex-grow">
                      <p className="text-sm">{alert.message}</p>
                      <p className="text-xs text-gray-400 mt-1">{alert.time}</p>
                    </div>
                    <Button variant="ghost" size="icon" className="h-6 w-6">
                      <X className="h-3 w-3" />
                    </Button>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator className="bg-white/10" />
                <DropdownMenuItem className="cursor-pointer justify-center font-medium">
                  View All Notifications
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost"
                  className="flex items-center space-x-2"
                >
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="https://github.com/shadcn.png" alt="User" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <span className="hidden sm:inline-block">John Doe</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-invenstory-dark-accent border-white/10">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-white/10" />
                <DropdownMenuItem className="cursor-pointer">
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator className="bg-white/10" />
                <Link to="/">
                  <DropdownMenuItem className="cursor-pointer text-red-400">
                    Logout
                  </DropdownMenuItem>
                </Link>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* Mobile Search */}
        {isMobile && mobileMenuOpen && (
          <div className="px-4 py-3 border-b border-white/5 animate-fade-in w-full">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input 
                type="search" 
                placeholder="Search..." 
                className="pl-10 bg-invenstory-dark-accent border-white/10 w-full"
              />
            </div>
          </div>
        )}

        {/* Main Content Area */}
        <main className="flex-1 overflow-auto p-6 w-full">
          <div className="w-full max-w-full">
            <Routes>
              <Route index element={<DashboardHome />} />
              <Route path="inventory" element={<InventoryPage />} />
              <Route path="forecasting" element={<ForecastingPage />} />
              <Route path="pricing" element={<PricingPage />} />
              <Route path="recommendations" element={<RecommendationsPage />} />
              <Route path="reports" element={<ReportsPage />} />
              <Route path="settings" element={<SettingsPage />} />
            </Routes>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
