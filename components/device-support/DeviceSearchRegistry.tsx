'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';

// Hardcoded exact lists based on the image style
const iosDevices = [
  'iPad 8th Gen (WiFi+Cellular)',
  'iPad 10th Gen',
  'iPad Pro 11-inch (M4)',
  'iPad Pro 11-inch 4th Gen (WiFi+Cellular)',
  'iPad Pro 11-inch 4th Gen',
  'iPad Pro 11-inch 3rd Gen (WiFi+Cellular)',
  'iPad Pro 11-inch 3rd Gen',
  'iPad mini 5th Gen',
  'iPad mini (6th Gen)',
  'iPad Air 5th Gen (WiFi+Cellular)',
  'iPad Air 3rd Gen',
  'iPad Air 13-inch (M2)',
  'iPad 10th Gen',
  'iPad 8th Gen (WiFi+Cellular)',
  'iPad mini 5th Gen',
  'iPad mini 5th Gen',
  'iPad mini 5th Gen',
  'iPad mini 5th Gen',
  'iPad mini 5th Gen',
];

const androidDevices = [
  'Samsung Galaxy S24 Ultra',
  'Samsung Galaxy S23',
  'Google Pixel 9 Pro',
  'Google Pixel 8',
  'Xiaomi 14 Pro',
  'Oppo Find X5',
];

export function DeviceSearchRegistry() {
  const [activeTab, setActiveTab] = useState<'iOS' | 'Android'>('iOS');
  const [searchQuery, setSearchQuery] = useState('');

  // Select the list based on state
  const currentDevices = activeTab === 'iOS' ? iosDevices : androidDevices;

  // Optional: Filter devices by what the user types
  const filteredDevices = currentDevices.filter((device) =>
    device.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="mx-auto mt-16 max-w-[1140px] px-4">
      {/* Top Header Labels */}
      <div className="mx-auto max-w-2xl text-center mb-8">
        <div className="flex items-center justify-center gap-2 mb-2">
          <div className="h-[1px] w-6 bg-[#9A42E4]" />
          <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#9A42E4]">
            Our Devices
          </span>
          <div className="h-[1px] w-6 bg-[#9A42E4]" />
        </div>
        
        <h2 className="text-3xl font-bold tracking-tight text-[#1A0B2E] sm:text-[36px]">
          Popular Supported Devices
        </h2>
        
        <p className="mt-3 text-sm leading-relaxed text-[#756685] max-w-xl mx-auto">
          You can use our list to see if the device you want to use is eSIM-compatible. Note, some regional models may not support eSIMs.
        </p>
        
        <div className="mx-auto mt-4 h-[3px] w-14 rounded-full bg-gradient-to-r from-[#9A42E4] to-[#FF4D80]" />
      </div>

      {/* Main Container Card */}
      <div className="mx-auto max-w-[940px] rounded-[36px] bg-[#FAF6FF]/60 border border-[#F4EDFD] p-6 sm:p-10 shadow-[0_20px_50px_rgba(154,66,228,0.03)] backdrop-blur-sm">
        
        {/* Animated Segmented Switch Control Toggle */}
        <div className="mx-auto mb-8 flex w-max rounded-full bg-[#EFE5FA] p-1.5 min-w-[240px]">
          <button 
            onClick={() => setActiveTab('iOS')}
            className={`flex-1 rounded-full py-2.5 text-xs font-bold transition-all duration-200 px-8 ${
              activeTab === 'iOS' 
                ? 'bg-[#3E1066] text-white shadow-md' 
                : 'text-[#6D5E80] hover:text-[#3E1066]'
            }`}
          >
            iOS
          </button>
          <button 
            onClick={() => setActiveTab('Android')}
            className={`flex-1 rounded-full py-2.5 text-xs font-bold transition-all duration-200 px-8 ${
              activeTab === 'Android' 
                ? 'bg-[#3E1066] text-white shadow-md' 
                : 'text-[#6D5E80] hover:text-[#3E1066]'
            }`}
          >
            Android
          </button>
        </div>

        {/* Search Field Input */}
        <div className="flex min-h-12 items-center gap-3 rounded-full border border-[#DCD0EC] bg-white px-5 focus-within:border-[#9A42E4] focus-within:ring-2 focus-within:ring-[#9A42E4]/10 transition-all">
          <Search size={16} className="text-[#9C8EB2]" />
          <input 
            type="text"
            placeholder="Search on your device..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-transparent text-xs font-medium text-[#1A0B2E] outline-none placeholder-[#9C8EB2]"
          />
        </div>

        {/* Dynamic Interactive Tag Badges */}
        <div className="mt-8 flex flex-wrap justify-center gap-2.5 max-w-4xl mx-auto">
          {filteredDevices.length > 0 ? (
            filteredDevices.map((device, idx) => (
              <span 
                className="rounded-full bg-[#F3EBFC] border border-[#EBE0F9] px-4 py-2 text-[11px] font-semibold text-[#4F3D66] shadow-sm hover:bg-[#9A42E4] hover:text-white hover:border-[#9A42E4] transition-all cursor-default duration-150" 
                key={`${device}-${idx}`}
              >
                {device}
              </span>
            ))
          ) : (
            <p className="text-xs text-[#756685] mt-4">No matching devices found.</p>
          )}
        </div>
      </div>
    </section>
  );
}