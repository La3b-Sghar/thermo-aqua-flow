
import { useState } from 'react';

// Mock data for Stirling motors
const mockMotors = [
  { id: 'SM001', name: 'Motor A1', status: 'active', efficiency: '92%' },
  { id: 'SM002', name: 'Motor B3', status: 'active', efficiency: '89%' },
  { id: 'SM003', name: 'Motor C7', status: 'maintenance', efficiency: '0%' },
  { id: 'SM004', name: 'Motor D2', status: 'active', efficiency: '94%' },
  { id: 'SM005', name: 'Motor E5', status: 'active', efficiency: '87%' }
];

// Mock data for sensor readings
const mockSensorReadings = [
  { id: 1, name: 'Flow Rate', value: '65.3', unit: 'L/min' },
  { id: 2, name: 'Input Temperature', value: '68.2', unit: '°C' },
  { id: 3, name: 'Output Temperature', value: '43.7', unit: '°C' },
  { id: 4, name: 'pH Level', value: '7.2', unit: 'pH' },
  { id: 5, name: 'Pressure', value: '2.3', unit: 'bar' },
  { id: 6, name: 'Conductivity', value: '450', unit: 'µS/cm' }
];

const DashboardSidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const scrollToElement = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div 
      className={`${
        collapsed ? 'w-16' : 'w-64'
      } bg-sidebar flex flex-col h-screen fixed top-0 left-0 transition-all duration-300 ease-in-out z-40`}
    >
      {/* Toggle Button */}
      <button 
        className="absolute -right-3 top-20 bg-sidebar text-white h-6 w-6 rounded-full flex items-center justify-center"
        onClick={() => setCollapsed(!collapsed)}
      >
        {collapsed ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
          </svg>
        )}
      </button>
      
      {/* Logo */}
      <div className="p-4 flex items-center justify-center border-b border-sidebar-border">
        <div className="flex items-center space-x-2">
          <div className="bg-primary h-8 w-8 rounded-md flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
            </svg>
          </div>
          {!collapsed && <span className="text-white font-semibold">ThermoAquaFlow</span>}
        </div>
      </div>
      
      {/* Motors Section */}
      <div className="flex-1 overflow-y-auto p-4">
        <div className="mb-6">
          {!collapsed && <h3 className="text-sidebar-foreground text-xs uppercase font-semibold mb-3">Stirling Motors</h3>}
          <div className="space-y-2">
            {mockMotors.map(motor => (
              <button 
                key={motor.id} 
                onClick={() => scrollToElement('stirling-motors-chart')}
                className={`${
                  collapsed ? 'justify-center' : 'justify-between'
                } w-full flex items-center p-2 rounded-md ${
                  motor.status === 'active' ? 'bg-sidebar-accent/20' : 'bg-gray-700/20'
                } hover:bg-sidebar-accent/40 transition-colors cursor-pointer`}
              >
                <div className="flex items-center">
                  <div 
                    className={`h-2 w-2 rounded-full ${
                      motor.status === 'active' ? 'bg-green-500' : 'bg-amber-500'
                    } mr-2`}
                  />
                  {!collapsed && (
                    <span className="text-sidebar-foreground text-sm">
                      {motor.name}
                    </span>
                  )}
                </div>
                {!collapsed && (
                  <span 
                    className={`text-xs font-medium ${
                      motor.status === 'active' ? 'text-green-400' : 'text-amber-400'
                    }`}
                  >
                    {motor.efficiency}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
        
        {/* Sensor Readings Section */}
        <div>
          {!collapsed && <h3 className="text-sidebar-foreground text-xs uppercase font-semibold mb-3">Sensor Readings</h3>}
          <div className="space-y-2">
            {mockSensorReadings.map(sensor => (
              <button 
                key={sensor.id} 
                onClick={() => scrollToElement(`sensor-${sensor.name.toLowerCase().replace(' ', '-')}`)}
                className={`${
                  collapsed ? 'justify-center' : 'justify-between'
                } w-full flex items-center p-2 rounded-md bg-sidebar-accent/10 hover:bg-sidebar-accent/30 transition-colors cursor-pointer`}
              >
                {collapsed ? (
                  <div className="h-2 w-2 rounded-full bg-blue-500"/>
                ) : (
                  <>
                    <span className="text-sidebar-foreground text-sm">
                      {sensor.name}
                    </span>
                    <span className="text-sidebar-primary text-sm font-medium">
                      {sensor.value} <span className="text-xs text-sidebar-foreground/70">{sensor.unit}</span>
                    </span>
                  </>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      {/* User Section */}
      <div className="p-4 border-t border-sidebar-border">
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-full bg-sidebar-accent flex items-center justify-center text-sidebar-accent-foreground">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          {!collapsed && (
            <div className="flex-1 min-w-0">
              <div className="text-sidebar-foreground text-sm font-medium truncate">Admin User</div>
              <div className="text-sidebar-foreground/70 text-xs truncate">Factory #1234</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardSidebar;
