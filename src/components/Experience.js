import React from 'react';

const Experience = () => {
  const logs = [
    { year: '2025', task: 'Web Portfolio', status: 'COMPLETE' },
    { year: '2026', task: 'Website Project', status: 'IN_PROGRESS' },
  ];

  return (
    <div>
      <h2 className="text-xl mb-4 bg-[#33ff33] text-black px-2 inline-block">SYSTEM_LOGS</h2>
      <div className="space-y-2">
        {logs.map((log, i) => (
          <div key={i} className="flex flex-col md:flex-row md:gap-4 border-b border-[#33ff33]/20 pb-2">
            <span className="text-white">[{log.year}]</span>
            <span className="flex-1 text-[#33ff33] opacity-90">{log.task}</span>
            <span className="text-xs font-bold">[ {log.status} ]</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;