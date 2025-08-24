import React from 'react';
import Icon from '../../../components/AppIcon';

const CategoryGrid = () => {
  const categories = [
    {
      id: 1,
      name: "Fiber Optic Cables",
      itemCount: 487,
      totalValue: "$342,500",
      lowStockCount: 8,
      icon: "Cable",
      color: "bg-blue-500",
      description: "Single-mode and multi-mode fiber cables"
    },
    {
      id: 2,
      name: "Copper Infrastructure",
      itemCount: 623,
      totalValue: "$189,200",
      lowStockCount: 5,
      icon: "Zap",
      color: "bg-orange-500",
      description: "Cat5e, Cat6, and coaxial cables"
    },
    {
      id: 3,
      name: "Connectors & Adapters",
      itemCount: 1247,
      totalValue: "$78,900",
      lowStockCount: 12,
      icon: "Plug",
      color: "bg-green-500",
      description: "LC, SC, ST, and RJ45 connectors"
    },
    {
      id: 4,
      name: "Testing Equipment",
      itemCount: 89,
      totalValue: "$456,800",
      lowStockCount: 2,
      icon: "Activity",
      color: "bg-purple-500",
      description: "OTDR, power meters, and analyzers"
    },
    {
      id: 5,
      name: "Safety Equipment",
      itemCount: 234,
      totalValue: "$45,600",
      lowStockCount: 7,
      icon: "Shield",
      color: "bg-yellow-500",
      description: "Hard hats, safety vests, and harnesses"
    },
    {
      id: 6,
      name: "Civil Works Materials",
      itemCount: 167,
      totalValue: "$123,400",
      lowStockCount: 3,
      icon: "Hammer",
      color: "bg-red-500",
      description: "Conduits, manholes, and excavation tools"
    }
  ];

  return (
    <div className="bg-card border border-border rounded-lg p-6 brand-shadow">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-foreground">Inventory Categories</h2>
        <button className="flex items-center space-x-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 brand-transition">
          <Icon name="Plus" size={16} />
          <span className="font-medium">Add Category</span>
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories?.map((category) => (
          <div key={category?.id} className="bg-muted/30 border border-border rounded-lg p-5 hover:bg-muted/50 brand-transition cursor-pointer">
            <div className="flex items-center justify-between mb-4">
              <div className={`flex items-center justify-center w-12 h-12 ${category?.color} rounded-lg`}>
                <Icon name={category?.icon} size={24} color="white" />
              </div>
              {category?.lowStockCount > 0 && (
                <div className="flex items-center space-x-1 px-2 py-1 bg-warning/10 text-warning rounded-full">
                  <Icon name="AlertTriangle" size={12} />
                  <span className="text-xs font-medium">{category?.lowStockCount}</span>
                </div>
              )}
            </div>

            <div className="space-y-2">
              <h3 className="font-bold text-foreground">{category?.name}</h3>
              <p className="text-sm text-muted-foreground">{category?.description}</p>
              
              <div className="flex items-center justify-between pt-3 border-t border-border">
                <div className="text-center">
                  <div className="text-lg font-bold text-foreground">{category?.itemCount}</div>
                  <div className="text-xs text-muted-foreground">Items</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-success">{category?.totalValue}</div>
                  <div className="text-xs text-muted-foreground">Value</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryGrid;