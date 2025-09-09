'use client';
import { useMemo, useState } from 'react';
import type { Project } from '@/lib/projects';

type Props = {
  projects: Project[];
  onFiltered: (filtered: Project[]) => void;
}

export default function Filters({ projects, onFiltered }: Props) {
  const [q, setQ] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [year, setYear] = useState<string>('all');

  const allTags = useMemo(() => {
    return Array.from(new Set(projects.flatMap(p => p.tags))).sort();
  }, [projects]);
  const years = useMemo(() => {
    return Array.from(new Set(projects.map(p => p.year))).sort((a,b)=>b-a);
  }, [projects]);

  const filtered = useMemo(() => {
    return projects.filter(p => {
      const matchesQ = !q || p.title.toLowerCase().includes(q.toLowerCase()) || p.description.toLowerCase().includes(q.toLowerCase());
      const matchesTags = tags.length===0 || tags.every(t => p.tags.includes(t));
      const matchesYear = year === 'all' || String(p.year) === year;
      return matchesQ && matchesTags && matchesYear;
    });
  }, [projects, q, tags, year]);

  // push filtered up
  useMemo(() => onFiltered(filtered), [filtered, onFiltered]);

  return (
    <div className="card p-4 space-y-4">
      <div>
        <input
          placeholder="Search projects, e.g. Retail, RAG, KNN"
          value={q}
          onChange={e=>setQ(e.target.value)}
          className="w-full border border-ink-200 rounded-xl px-3 py-2"
        />
      </div>
      <div className="flex flex-wrap gap-2">
        {allTags.map(t=>{
          const active = tags.includes(t);
          return (
            <button key={t} onClick={()=>setTags(s=>active? s.filter(x=>x!==t): [...s,t])}
              className={`badge ${active? 'bg-ink-900 text-white border-ink-900' : ''}`}>
              {t}
            </button>
          );
        })}
      </div>
      <div className="flex items-center gap-2 text-sm">
        <span className="text-ink-600">Year</span>
        <select value={year} onChange={e=>setYear(e.target.value)} className="border rounded-md px-2 py-1">
          <option value="all">All</option>
          {years.map(y=>(<option key={y} value={String(y)}>{y}</option>))}
        </select>
      </div>
    </div>
  );
}
