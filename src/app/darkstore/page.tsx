"use client";

import { useEffect, useState, useCallback } from "react";
import { Package, RefreshCw, CheckCircle2 } from "lucide-react";
import { portalFetch } from "@/lib/portalFetch";

type QueueItem = {
  id: string;
  status: "placed" | "accepted" | "picking" | "packed";
  total: number;
  delivery_address: string;
  created_at: string;
  quick_order_items?: { qty: number; products?: { name: string } }[];
};

// The next action per status → the endpoint that advances it.
const NEXT_ACTION: Record<QueueItem["status"], { label: string; action: string } | null> = {
  placed: { label: "Accept", action: "accept" },
  accepted: { label: "Start Picking", action: "picking" },
  picking: { label: "Mark Packed", action: "packed" },
  packed: null, // dispatched to a rider automatically
};

const STATUS_STYLE: Record<string, string> = {
  placed: "bg-amber-100 text-amber-800",
  accepted: "bg-blue-100 text-blue-800",
  picking: "bg-purple-100 text-purple-800",
  packed: "bg-green-100 text-green-800",
};

export default function DarkstoreOpsQueue() {
  const [orders, setOrders] = useState<QueueItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [busyId, setBusyId] = useState<string | null>(null);

  const load = useCallback(async () => {
    try {
      setError(null);
      const res = await portalFetch("/orders/queue");
      setOrders(res.orders || []);
    } catch (e: any) {
      setError(e.message || "Failed to load queue");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
    // Poll every 10s so new orders surface without a manual refresh.
    const t = setInterval(load, 10000);
    return () => clearInterval(t);
  }, [load]);

  const advance = async (order: QueueItem, action: string) => {
    setBusyId(order.id);
    try {
      await portalFetch(`/orders/${order.id}/${action}`, { method: "POST" });
      await load();
    } catch (e: any) {
      setError(e.message || "Action failed");
    } finally {
      setBusyId(null);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Fulfilment Queue</h1>
          <p className="text-gray-500">Accept, pick, and pack incoming Riksho Quick orders.</p>
        </div>
        <button
          onClick={load}
          className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 font-medium"
        >
          <RefreshCw size={16} /> Refresh
        </button>
      </div>

      {error && (
        <div className="mb-4 p-3 rounded-lg bg-red-50 text-red-700 text-sm border border-red-100">{error}</div>
      )}

      {loading ? (
        <p className="text-gray-500">Loading queue…</p>
      ) : orders.length === 0 ? (
        <div className="text-center py-20 text-gray-400">
          <CheckCircle2 size={40} className="mx-auto mb-3 text-green-400" />
          <p>No active orders. All caught up.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => {
            const next = NEXT_ACTION[order.status];
            return (
              <div key={order.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-9 h-9 rounded bg-indigo-50 text-indigo-600 flex items-center justify-center">
                      <Package size={18} />
                    </div>
                    <span className="font-mono text-sm text-gray-500">#{order.id.split("-")[0].toUpperCase()}</span>
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium capitalize ${STATUS_STYLE[order.status]}`}>
                      {order.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-700 mb-1">
                    {(order.quick_order_items || [])
                      .map((i) => `${i.qty}× ${i.products?.name ?? "item"}`)
                      .join(", ") || "—"}
                  </p>
                  <p className="text-xs text-gray-400">{order.delivery_address}</p>
                </div>
                <div className="text-right ml-4">
                  <p className="font-bold text-gray-900 mb-3">₹{order.total}</p>
                  {next ? (
                    <button
                      onClick={() => advance(order, next.action)}
                      disabled={busyId === order.id}
                      className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-medium text-sm disabled:opacity-50"
                    >
                      {busyId === order.id ? "…" : next.label}
                    </button>
                  ) : (
                    <span className="text-xs text-green-600 font-medium">Dispatched to rider</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
