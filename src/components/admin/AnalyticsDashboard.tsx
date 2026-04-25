'use client';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import { format, parseISO } from 'date-fns';
import { es } from 'date-fns/locale';
import { MetricCard } from './MetricCard';

interface Data {
  totalViews: number;
  viewsLast30Days: number;
  uniqueVisitors: number;
  totalLeads: number;
  conversionRate: number;
  topPaths: Array<{ path: string; count: number }>;
  topReferrers: Array<{ referrer: string; count: number }>;
  topUtmSources: Array<{ source: string; count: number }>;
  devices: Array<{ device: string; count: number }>;
  dailyViews: Array<{ date: string; count: number }>;
}

const COLORS = ['#ff4d1a', '#ff7a3d', '#ffa574', '#ffc7a8'];

function cleanReferrer(ref: string): string {
  try {
    const url = new URL(ref);
    return url.hostname.replace(/^www\./, '');
  } catch {
    return ref.slice(0, 40);
  }
}

export function AnalyticsDashboard({ data }: { data: Data }) {
  const formattedDailyViews = data.dailyViews.map((d) => ({
    ...d,
    label: format(parseISO(d.date), 'd MMM', { locale: es }),
  }));

  return (
    <div>
      <div className="admin-page-header">
        <h1>Analítica</h1>
        <p className="admin-page-subtitle">Últimos 30 días</p>
      </div>

      <div className="admin-metrics-grid">
        <MetricCard
          label="Páginas vistas"
          value={data.viewsLast30Days}
          trend="últimos 30 días"
        />
        <MetricCard
          label="Visitantes únicos"
          value={data.uniqueVisitors}
          trend="sesiones distintas"
        />
        <MetricCard label="Leads generados" value={data.totalLeads} trend="demos + llamadas" />
        <MetricCard
          label="Conversión"
          value={`${data.conversionRate.toFixed(2)}%`}
          trend="visitante → lead"
          highlight={data.conversionRate > 2}
        />
      </div>

      <div className="admin-card" style={{ marginBottom: 16 }}>
        <div className="admin-card-header">
          <h2>Visitas por día</h2>
        </div>
        <div style={{ padding: 20, height: 300 }}>
          {formattedDailyViews.length === 0 ? (
            <div className="admin-empty-state-small">Sin datos para mostrar aún</div>
          ) : (
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={formattedDailyViews}>
                <XAxis dataKey="label" tick={{ fontSize: 11 }} stroke="#737373" />
                <YAxis tick={{ fontSize: 11 }} stroke="#737373" allowDecimals={false} />
                <Tooltip
                  contentStyle={{
                    background: 'white',
                    border: '1px solid rgba(15,23,42,0.08)',
                    borderRadius: 8,
                    fontSize: 12,
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="count"
                  stroke="#ff4d1a"
                  strokeWidth={2}
                  dot={{ r: 3 }}
                />
              </LineChart>
            </ResponsiveContainer>
          )}
        </div>
      </div>

      <div className="admin-analytics-grid">
        <div className="admin-card">
          <div className="admin-card-header">
            <h2>Top páginas</h2>
          </div>
          <BarList items={data.topPaths.map((p) => ({ label: p.path, value: p.count }))} />
        </div>

        <div className="admin-card">
          <div className="admin-card-header">
            <h2>Referrers</h2>
          </div>
          <BarList
            items={data.topReferrers.map((r) => ({
              label: cleanReferrer(r.referrer),
              value: r.count,
            }))}
          />
        </div>

        <div className="admin-card">
          <div className="admin-card-header">
            <h2>UTM Sources</h2>
          </div>
          <BarList
            items={data.topUtmSources.map((s) => ({ label: s.source, value: s.count }))}
          />
        </div>

        <div className="admin-card">
          <div className="admin-card-header">
            <h2>Dispositivos</h2>
          </div>
          <div style={{ padding: 20, height: 220 }}>
            {data.devices.length === 0 ? (
              <div className="admin-empty-state-small">Sin datos aún</div>
            ) : (
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={data.devices}
                    dataKey="count"
                    nameKey="device"
                    cx="50%"
                    cy="50%"
                    outerRadius={75}
                    label={(props) => {
                      const p = props as unknown as { device?: string; count?: number };
                      return `${p.device ?? ''}: ${p.count ?? 0}`;
                    }}
                  >
                    {data.devices.map((_, i) => (
                      <Cell key={i} fill={COLORS[i % COLORS.length]} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function BarList({ items }: { items: Array<{ label: string; value: number }> }) {
  if (items.length === 0) {
    return <div className="admin-empty-state-small">Sin datos aún</div>;
  }
  const max = Math.max(...items.map((i) => i.value));

  return (
    <ul className="admin-bar-list">
      {items.map((item, i) => (
        <li key={i}>
          <div className="admin-bar-label" title={item.label}>
            {item.label}
          </div>
          <div className="admin-bar-track">
            <div
              className="admin-bar-fill"
              style={{ width: `${(item.value / max) * 100}%` }}
            />
          </div>
          <div className="admin-bar-value">{item.value}</div>
        </li>
      ))}
    </ul>
  );
}
