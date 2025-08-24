import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const InventoryTable = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const inventoryItems = [
    {
      id: "FO-SM-001",
      name: "Single-Mode Fiber Cable 12-Core",
      category: "Fiber Optic",
      supplier: "Corning Inc.",
      currentStock: 2500,
      minThreshold: 500,
      maxThreshold: 5000,
      unitPrice: 12.50,
      location: "Warehouse A-1",
      lastUpdated: "2025-01-20",
      status: "in-stock"
    },
    {
      id: "CO-CAT6-002",
      name: "Cat6 UTP Cable 305m Reel",
      category: "Copper",
      supplier: "Panduit Corp",
      currentStock: 180,
      minThreshold: 200,
      maxThreshold: 800,
      unitPrice: 89.99,
      location: "Warehouse B-2",
      lastUpdated: "2025-01-19",
      status: "low-stock"
    },
    {
      id: "CN-LC-003",
      name: "LC Duplex Connector - Blue",
      category: "Connectors",
      supplier: "CommScope",
      currentStock: 0,
      minThreshold: 100,
      maxThreshold: 1000,
      unitPrice: 2.75,
      location: "Warehouse A-3",
      lastUpdated: "2025-01-18",
      status: "out-of-stock"
    },
    {
      id: "TE-OTDR-004",
      name: "OTDR Tester 1310/1550nm",
      category: "Testing",
      supplier: "EXFO Inc.",
      currentStock: 8,
      minThreshold: 5,
      maxThreshold: 15,
      unitPrice: 12500.00,
      location: "Equipment Room",
      lastUpdated: "2025-01-21",
      status: "in-stock"
    },
    {
      id: "SF-VEST-005",
      name: "High-Vis Safety Vest - Large",
      category: "Safety",
      supplier: "3M Safety",
      currentStock: 45,
      minThreshold: 50,
      maxThreshold: 200,
      unitPrice: 24.99,
      location: "Safety Storage",
      lastUpdated: "2025-01-20",
      status: "low-stock"
    },
    {
      id: "CW-COND-006",
      name: "HDPE Conduit 100mm x 6m",
      category: "Civil Works",
      supplier: "Holcim Australia",
      currentStock: 320,
      minThreshold: 100,
      maxThreshold: 500,
      unitPrice: 45.80,
      location: "Yard Storage",
      lastUpdated: "2025-01-19",
      status: "in-stock"
    }
  ];

  const getStatusBadge = (status) => {
    const statusConfig = {
      'in-stock': { color: 'bg-success/10 text-success', label: 'In Stock' },
      'low-stock': { color: 'bg-warning/10 text-warning', label: 'Low Stock' },
      'out-of-stock': { color: 'bg-error/10 text-error', label: 'Out of Stock' }
    };
    
    const config = statusConfig?.[status] || statusConfig?.['in-stock'];
    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${config?.color}`}>
        {config?.label}
      </span>
    );
  };

  const filteredItems = inventoryItems?.filter(item => {
    const matchesSearch = item?.name?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
                         item?.id?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
                         item?.supplier?.toLowerCase()?.includes(searchTerm?.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item?.category?.toLowerCase()?.includes(selectedCategory?.toLowerCase());
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-card border border-border rounded-lg brand-shadow">
      <div className="p-6 border-b border-border">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
          <h2 className="text-xl font-bold text-foreground">Inventory Items</h2>
          
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
            <Input
              type="search"
              placeholder="Search items, part numbers, suppliers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e?.target?.value)}
              className="sm:w-80"
            />
            
            <select 
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e?.target?.value)}
              className="px-3 py-2 border border-border rounded-lg bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            >
              <option value="all">All Categories</option>
              <option value="fiber">Fiber Optic</option>
              <option value="copper">Copper</option>
              <option value="connectors">Connectors</option>
              <option value="testing">Testing</option>
              <option value="safety">Safety</option>
              <option value="civil">Civil Works</option>
            </select>
            
            <Button variant="default" iconName="Plus" iconPosition="left">
              Add Item
            </Button>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-muted/30">
            <tr>
              <th className="text-left p-4 font-semibold text-foreground">Item Details</th>
              <th className="text-left p-4 font-semibold text-foreground">Category</th>
              <th className="text-left p-4 font-semibold text-foreground">Stock Level</th>
              <th className="text-left p-4 font-semibold text-foreground">Value</th>
              <th className="text-left p-4 font-semibold text-foreground">Location</th>
              <th className="text-left p-4 font-semibold text-foreground">Status</th>
              <th className="text-left p-4 font-semibold text-foreground">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredItems?.map((item) => (
              <tr key={item?.id} className="border-b border-border hover:bg-muted/20 brand-transition">
                <td className="p-4">
                  <div className="space-y-1">
                    <div className="font-medium text-foreground">{item?.name}</div>
                    <div className="text-sm text-muted-foreground">ID: {item?.id}</div>
                    <div className="text-sm text-muted-foreground">Supplier: {item?.supplier}</div>
                  </div>
                </td>
                <td className="p-4">
                  <span className="px-2 py-1 bg-secondary/10 text-secondary rounded text-sm font-medium">
                    {item?.category}
                  </span>
                </td>
                <td className="p-4">
                  <div className="space-y-1">
                    <div className="font-medium text-foreground">{item?.currentStock?.toLocaleString()}</div>
                    <div className="text-xs text-muted-foreground">
                      Min: {item?.minThreshold} | Max: {item?.maxThreshold}
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${
                          item?.currentStock <= item?.minThreshold ? 'bg-error' :
                          item?.currentStock <= item?.minThreshold * 1.5 ? 'bg-warning' : 'bg-success'
                        }`}
                        style={{ 
                          width: `${Math.min((item?.currentStock / item?.maxThreshold) * 100, 100)}%` 
                        }}
                      ></div>
                    </div>
                  </div>
                </td>
                <td className="p-4">
                  <div className="space-y-1">
                    <div className="font-medium text-foreground">
                      ${(item?.currentStock * item?.unitPrice)?.toLocaleString()}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      ${item?.unitPrice} per unit
                    </div>
                  </div>
                </td>
                <td className="p-4">
                  <div className="space-y-1">
                    <div className="font-medium text-foreground">{item?.location}</div>
                    <div className="text-sm text-muted-foreground">
                      Updated: {new Date(item.lastUpdated)?.toLocaleDateString()}
                    </div>
                  </div>
                </td>
                <td className="p-4">
                  {getStatusBadge(item?.status)}
                </td>
                <td className="p-4">
                  <div className="flex items-center space-x-2">
                    <button className="p-2 hover:bg-muted rounded-lg brand-transition">
                      <Icon name="Edit" size={16} className="text-muted-foreground hover:text-foreground" />
                    </button>
                    <button className="p-2 hover:bg-muted rounded-lg brand-transition">
                      <Icon name="BarChart3" size={16} className="text-muted-foreground hover:text-foreground" />
                    </button>
                    <button className="p-2 hover:bg-muted rounded-lg brand-transition">
                      <Icon name="MoreVertical" size={16} className="text-muted-foreground hover:text-foreground" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {filteredItems?.length === 0 && (
        <div className="p-12 text-center">
          <Icon name="Package" size={48} className="text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-medium text-foreground mb-2">No items found</h3>
          <p className="text-muted-foreground">Try adjusting your search criteria or add new inventory items.</p>
        </div>
      )}
    </div>
  );
};

export default InventoryTable;