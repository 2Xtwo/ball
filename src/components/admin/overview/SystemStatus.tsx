interface SystemMetric {
  name: string;
  status: 'healthy' | 'warning' | 'error';
  value: string;
}

export default function SystemStatus() {
  const metrics: SystemMetric[] = [
    { name: 'Server Status', status: 'healthy', value: '99.9% uptime' },
    { name: 'Database', status: 'healthy', value: '45ms response' },
    { name: 'Storage', status: 'warning', value: '85% used' },
  ];

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold">System Status</h2>
      </div>
      <div className="divide-y divide-gray-200">
        {metrics.map((metric) => (
          <div key={metric.name} className="p-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium text-gray-900">{metric.name}</p>
                <p className="text-sm text-gray-500">{metric.value}</p>
              </div>
              <span
                className={`px-2 py-1 rounded-full text-xs font-medium ${
                  metric.status === 'healthy'
                    ? 'bg-green-100 text-green-800'
                    : metric.status === 'warning'
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'bg-red-100 text-red-800'
                }`}
              >
                {metric.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}