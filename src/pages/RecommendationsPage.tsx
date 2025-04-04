
// import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, Users } from "lucide-react";

// Sample recommendation data
const recommendationData = [
  {
    id: "REC001",
    segment: "Sports Enthusiasts",
    product: "Running Shoes - Sport X",
    reasoning: "96% of similar customers purchased this item",
    affinity: "High",
    conversion: "24%",
    revenue: "$12,450"
  },
  {
    id: "REC002",
    segment: "Tech Professionals",
    product: "Wireless Headphones",
    reasoning: "Based on browsing habits and purchase history",
    affinity: "High",
    conversion: "18%",
    revenue: "$8,200"
  },
  {
    id: "REC003",
    segment: "Home Office Workers",
    product: "Laptop Sleeve Case",
    reasoning: "Frequently bought with laptops and monitors",
    affinity: "Medium",
    conversion: "12%",
    revenue: "$3,400"
  },
  {
    id: "REC004",
    segment: "Urban Commuters",
    product: "Smartwatch Pro",
    reasoning: "Location data suggests transit usage patterns",
    affinity: "Medium",
    conversion: "15%",
    revenue: "$7,800"
  },
  {
    id: "REC005",
    segment: "Fitness Trackers",
    product: "Blue Cotton T-Shirt",
    reasoning: "Seasonal trend and demographic match",
    affinity: "Low",
    conversion: "8%",
    revenue: "$2,100"
  }
];

export default function RecommendationsPage() {
  const getAffinityBadge = (affinity: string) => {
    switch (affinity) {
      case "High":
        return <Badge variant="default" className="bg-green-500">High</Badge>;
      case "Medium":
        return <Badge variant="default" className="bg-amber-500">Medium</Badge>;
      case "Low":
        return <Badge variant="default" className="bg-blue-500">Low</Badge>;
      default:
        return <Badge>Unknown</Badge>;
    }
  };

  return (
      <div className="space-y-6 animate-fade-in">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Personalized Recommendations</h1>
          <p className="text-muted-foreground">AI-powered customer insights and product suggestions</p>
        </div>

        <Tabs defaultValue="segments" className="space-y-4">
          <TabsList>
            <TabsTrigger value="segments">Customer Segments</TabsTrigger>
            <TabsTrigger value="products">Product Recommendations</TabsTrigger>
            <TabsTrigger value="integration">POS Integration</TabsTrigger>
          </TabsList>
          
          <TabsContent value="segments" className="space-y-4">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Customer Segment Recommendations</CardTitle>
                <CardDescription>
                  AI-identified customer segments and their product affinities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Customer Segment</TableHead>
                        <TableHead>Recommended Product</TableHead>
                        <TableHead>Reasoning</TableHead>
                        <TableHead>Affinity</TableHead>
                        <TableHead>Conversion Rate</TableHead>
                        <TableHead>Projected Revenue</TableHead>
                        <TableHead>Action</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {recommendationData.map((item) => (
                        <TableRow key={item.id}>
                          <TableCell className="font-medium">{item.segment}</TableCell>
                          <TableCell>{item.product}</TableCell>
                          <TableCell className="max-w-xs">{item.reasoning}</TableCell>
                          <TableCell>{getAffinityBadge(item.affinity)}</TableCell>
                          <TableCell>{item.conversion}</TableCell>
                          <TableCell>{item.revenue}</TableCell>
                          <TableCell>
                            <Button size="sm">
                              <Check className="mr-1 h-3 w-3" />
                              Apply
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="products" className="space-y-4">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Product Recommendations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">View and manage product-specific recommendations.</p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="integration" className="space-y-4">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>POS & E-commerce Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Configure integration with your POS and e-commerce platforms.</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
  );
}
