import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Edit, Trash, Filter, FileDown, FileUp, PlusCircle } from "lucide-react";

// Sample inventory data
const inventory = [
  {
    id: "INV001",
    name: "Blue Cotton T-Shirt",
    sku: "APPL-1234",
    stock: 245,
    demand: "High",
    price: 29.99,
    supplier: "Cotton Co.",
    status: "healthy",
  },
  {
    id: "INV002",
    name: "Running Shoes - Sport X",
    sku: "NIKE-8765",
    stock: 58,
    demand: "High",
    price: 89.99,
    supplier: "Nike Inc.",
    status: "moderate",
  },
  {
    id: "INV003",
    name: "Wireless Headphones",
    sku: "SONY-4321",
    stock: 12,
    demand: "High",
    price: 149.99,
    supplier: "Sony Electronics",
    status: "urgent",
  },
  {
    id: "INV004",
    name: "Smartwatch Pro",
    sku: "APPL-7890",
    stock: 34,
    demand: "Medium",
    price: 299.99,
    supplier: "Apple Inc.",
    status: "moderate",
  },
  {
    id: "INV005",
    name: "Laptop Sleeve Case",
    sku: "CASE-2468",
    stock: 162,
    demand: "Low",
    price: 24.99,
    supplier: "Case Makers",
    status: "healthy",
  },
  {
    id: "INV006",
    name: "Coffee Mug - Classic",
    sku: "HOME-1357",
    stock: 5,
    demand: "Medium",
    price: 12.99,
    supplier: "Home Goods Co.",
    status: "urgent",
  },
];

export default function InventoryPage() {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "urgent":
        return <Badge variant="destructive">Low Stock</Badge>;
      case "moderate":
        return <Badge variant="default" className="bg-amber-500">Moderate</Badge>;
      case "healthy":
        return <Badge variant="default" className="bg-green-500">Healthy</Badge>;
      default:
        return <Badge>Unknown</Badge>;
    }
  };

  return (
    <div className="p-6 space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight">Inventory Management</h1>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
          <Button variant="outline" size="sm">
            <FileDown className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Button variant="outline" size="sm">
            <FileUp className="mr-2 h-4 w-4" />
            Import
          </Button>
          <Button size="sm">
            <PlusCircle className="mr-2 h-4 w-4" />
            Add Product
          </Button>
        </div>
      </div>

      <div className="rounded-md border glass-morph">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Product Name</TableHead>
              <TableHead>SKU</TableHead>
              <TableHead>Current Stock</TableHead>
              <TableHead>Demand</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Supplier</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {inventory.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">{item.name}</TableCell>
                <TableCell>{item.sku}</TableCell>
                <TableCell>{item.stock}</TableCell>
                <TableCell>{item.demand}</TableCell>
                <TableCell>${item.price.toFixed(2)}</TableCell>
                <TableCell>{item.supplier}</TableCell>
                <TableCell>{getStatusBadge(item.status)}</TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="icon">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="text-destructive">
                      <Trash className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
