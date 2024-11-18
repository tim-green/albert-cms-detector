import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faSpinner, faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { detectCMS } from './utils/detector';
import type { CMSResult } from './utils/detector';
import Header from './components/Header';
import Footer from './components/Footer';
import DetectionResults from './components/DetectionResults';

import Clarity from '@microsoft/clarity';

const projectId = "p09ghfp1px"
Clarity.init(projectId);

function App() {
  const [url, setUrl] = useState('');
  const [result, setResult] = useState<CMSResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const formatUrl = (input: string) => {
    // Remove any existing protocol
    let cleanUrl = input.replace(/^(https?:\/\/)/, '');
    // Remove any trailing slashes
    cleanUrl = cleanUrl.replace(/\/+$/, '');
    // Remove www. if present
    cleanUrl = cleanUrl.replace(/^www\./, '');
    return cleanUrl;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const formattedUrl = formatUrl(url);
      const detection = await detectCMS(formattedUrl);
      setResult(detection);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to analyse website');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Header />
        
        <div className="mt-12">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Enter website (e.g., example.com)"
                className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                required
              />
              <FontAwesomeIcon icon={faMagnifyingGlass} className="absolute left-4 top-3.5 text-gray-400 h-5 w-5" />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <FontAwesomeIcon icon={faSpinner} className="h-5 w-5 animate-spin" />
                  Albert is currently analysing...
                </>
              ) : (
                'Detect CMS'
              )}
            </button>
          </form>

          {error && (
            <div className="mt-6 p-4 bg-red-50 rounded-lg border border-red-200 flex items-start gap-3">
              <FontAwesomeIcon icon={faCircleCheck} className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
              <p className="text-red-700">{error}</p>
            </div>
          )}

          {result && <DetectionResults result={result} />}
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;