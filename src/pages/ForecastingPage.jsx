import { ForecastChart } from "@/components/forecast/ForecastChart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Battery, BatteryCharging, Percent } from "lucide-react";

export default function ForecastingPage() {
  return (
    <div className="space-y-6 animate-fade-in flex-col justify-between items-center">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Demand Forecasting</h1>
        <p className="text-muted-foreground">AI-powered sales predictions and inventory optimization</p>
      </div>

      <Tabs defaultValue="overview" className="space-y-4 ">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="products">By Product</TabsTrigger>
          <TabsTrigger value="scenarios">Scenario Planning</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4 w-max">
          <ForecastChart />
          
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 ">
            <Card className="bg-invenstory-dark border-white/5 shadow-neumorph-sm">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Forecast Accuracy</CardTitle>
                <Percent className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">94.2%</div>
                <p className="text-xs text-muted-foreground">+2.1% from last quarter</p>
              </CardContent>
            </Card>
            
            <Card className="bg-invenstory-dark border-white/5 shadow-neumorph-sm">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Stock Health</CardTitle>
                <Battery className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">87%</div>
                <p className="text-xs text-muted-foreground">3 products need attention</p>
              </CardContent>
            </Card>
            
            <Card className="bg-invenstory-dark border-white/5 shadow-neumorph-sm">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Suggested Reorders</CardTitle>
                <BatteryCharging className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">8 Products</div>
                <p className="text-xs text-muted-foreground">Based on projected demand</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="products">
          <Card className="bg-invenstory-dark border-white/5 shadow-neumorph-sm">
            <CardHeader>
              <CardTitle>Product-level Forecasts</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Select a product to view detailed forecast data.</p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="scenarios">
          <Card className="bg-invenstory-dark border-white/5 shadow-neumorph-sm">
            <CardHeader>
              <CardTitle>Scenario Planning</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Adjust parameters to simulate different market scenarios.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
