"use client";

import { useEffect, useState } from "react";
import { Key, Copy, Plus, RefreshCw, Trash2, Globe } from "lucide-react";
import { portalFetch } from "@/lib/portalFetch";

export default function ApiKeysPage() {
  const [keys, setKeys] = useState<any[]>([]);
  const [webhooks, setWebhooks] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // For now, we simulate fetching since there isn't a dedicated API keys endpoint 
  // in the business routes yet, but we remove the hardcoded dummy values.
  useEffect(() => {
    // In a real app, this would be: portalFetch("/business/portal/api-keys")
    setTimeout(() => {
      setKeys([]);
      setWebhooks([]);
      setLoading(false);
    }, 500);
  }, []);

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-display font-bold text-gray-900 mb-2">API & Webhooks</h1>
          <p className="text-gray-500">Manage programmatic access to your Fleet account.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: API Keys */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-6 border-b border-gray-200 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center">
                  <Key size={20} />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">Active API Keys</h2>
                  <p className="text-sm text-gray-500">Use these keys to authenticate with the Riksho Business API.</p>
                </div>
              </div>
              <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-medium transition-colors text-sm">
                <Plus size={16} />
                Generate Key
              </button>
            </div>

            <div className="p-6 space-y-4">
              {loading ? (
                <p className="text-gray-500 text-sm">Loading keys...</p>
              ) : keys.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-gray-500 text-sm mb-2">You haven't generated any API keys yet.</p>
                  <button className="text-indigo-600 font-medium text-sm hover:underline">Create your first key</button>
                </div>
              ) : (
                keys.map((k, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-gray-50 border border-gray-100 rounded-xl">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium text-gray-900">{k.name}</span>
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-green-100 text-green-700 uppercase tracking-wide">Active</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <code className="text-sm font-mono text-gray-600 bg-gray-200 px-2 py-1 rounded">{k.masked_key}</code>
                        <button className="text-gray-400 hover:text-indigo-600 transition-colors">
                          <Copy size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-6 border-b border-gray-200 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center">
                  <Globe size={20} />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">Webhook Endpoints</h2>
                  <p className="text-sm text-gray-500">Receive real-time push events for shipment status changes.</p>
                </div>
              </div>
              <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 font-medium transition-colors text-sm">
                <Plus size={16} />
                Add Endpoint
              </button>
            </div>

            <div className="p-6">
              {loading ? (
                <p className="text-gray-500 text-sm">Loading webhooks...</p>
              ) : webhooks.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-gray-500 text-sm mb-2">No webhook endpoints configured.</p>
                </div>
              ) : (
                webhooks.map((w, i) => (
                  <div key={i} className="p-4 bg-gray-50 border border-gray-100 rounded-xl">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-gray-900">{w.name}</span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-green-100 text-green-700 uppercase tracking-wide">Active</span>
                    </div>
                    <p className="text-sm font-mono text-gray-600 mb-3 break-all">{w.url}</p>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Right Column: Docs snippet */}
        <div className="space-y-6">
          <div className="bg-gray-900 rounded-2xl shadow-sm border border-gray-800 p-6 text-white">
            <h3 className="font-semibold text-lg mb-2">Quick Start</h3>
            <p className="text-gray-400 text-sm mb-4">Create a shipment using your API key.</p>
            
            <div className="bg-black rounded-lg p-4 font-mono text-xs overflow-x-auto">
              <span className="text-pink-400">curl</span> -X POST https://api.riksho.com/v1/shipments \<br/>
              &nbsp;&nbsp;-H <span className="text-green-300">"Authorization: Bearer rk_prod_..."</span> \<br/>
              &nbsp;&nbsp;-H <span className="text-green-300">"Content-Type: application/json"</span> \<br/>
              &nbsp;&nbsp;-d <span className="text-yellow-300">'{'{'}"origin_lat": 28.53, "dest_lat": 28.61 ...{'}'}'</span>
            </div>

            <button className="mt-6 w-full py-2 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition-colors text-sm">
              Read API Documentation
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
