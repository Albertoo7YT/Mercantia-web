interface MetricCardProps {
  label: string;
  value: number | string;
  trend?: string;
  highlight?: boolean;
}

export function MetricCard({ label, value, trend, highlight }: MetricCardProps) {
  return (
    <div className={`admin-metric-card ${highlight ? 'admin-metric-highlight' : ''}`}>
      <div className="admin-metric-label">{label}</div>
      <div className="admin-metric-value">{value}</div>
      {trend && <div className="admin-metric-trend">{trend}</div>}
    </div>
  );
}
