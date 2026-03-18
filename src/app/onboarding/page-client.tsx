"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/utils/supabase/client';
import { User } from '@supabase/supabase-js';

const BUILDER_STATUSES = [
  "Founder",
  "Prospective Founder",
  "Developer",
  "Designer",
  "Product Lead",
  "Go-To-Market",
  "Venture",
  "Operator",
  "Researchers"
];

const GOALS = [
  "Actively Building My Own Project",
  "Exploring New Ideas",
  "Learning",
  "Looking to Join Startup",
  "Looking for Cofounder",
  "Looking for Employees",
  "Advising"
];

// Note: In a production version we'd pull these statically from `seed_tags.ts` to keep them perfectly in sync.
// Hardcoding the arrays for the client form here so the prototype is snappy.
const SECTORS = ['AI', 'Education', 'Security', 'Community', 'Media', 'Housing', 'Governance', 'Biotech', 'Healthcare', 'Longevity', 'Energy', 'Climate', 'Food', 'Cities', 'Finance'];
const OUTCOMES = ['Human Flourishing', 'Social Trust', 'Ender Prevention', 'Existential Risk Reduction', 'Abundance', 'Resilience', 'Scientific Acceleration', 'Societal Cohesion', 'Community Renewal', 'Better Governance', 'Differentially Defensive', 'Freedom', 'Longevity', 'Alignment', 'Biodiversity', 'Air Quality', 'Climate'];
const TECH = ['Large Language Models', 'Voice AI', 'Vision AI', 'Spatial Computing', 'Augmented Reality', 'Autonomous Agents', 'Knowledge Graphs', 'Social Graph', 'Simulations', 'Wearables', 'Synthetic Biology'];

const PREDEFINED_SKILLS = [
  "Frontend", "Backend", "Full Stack", "AI/ML", "Design", "Product", "Go-To-Market", "Sales", "Marketing", "Community", "Operations", "Hardware", "Bio"
];

export default function OnboardingClientPage({ defaultValues, user, isUpdate = false }: { defaultValues: any, user: User, isUpdate?: boolean }) {
  const supabase = createClient();
  const router = useRouter();
  
  const [formData, setFormData] = useState(defaultValues);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [customSkill, setCustomSkill] = useState('');

  const toggleArrayItem = (key: string, value: string) => {
    setFormData((prev: any) => {
      const arr = prev[key] || [];
      if (arr.includes(value)) {
        return { ...prev, [key]: arr.filter((x: string) => x !== value) };
      } else {
        if (key === 'outcomes' && arr.length >= 10) return prev; // Limit to 10
        return { ...prev, [key]: [...arr, value] };
      }
    });
  };

  const addCustomSkill = () => {
    if (customSkill.trim() && !formData.top_skills?.includes(customSkill.trim())) {
       setFormData((prev: any) => ({ ...prev, top_skills: [...(prev.top_skills || []), customSkill.trim()] }));
       setCustomSkill('');
    }
  };

  const handleTechLevel = (tech: string, level: string) => {
    setFormData((prev: any) => ({
      ...prev,
      frontier_tech_familiarity: {
        ...(prev.frontier_tech_familiarity || {}),
        [tech]: level
      }
    }));
  };
  
  const removeTechLevel = (tech: string) => {
      setFormData((prev: any) => {
          const newFam = { ...prev.frontier_tech_familiarity };
          delete newFam[tech];
          return { ...prev, frontier_tech_familiarity: newFam };
      });
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    // Require handle and basic role/goal
    if (!formData.handle || !formData.name) {
       setErrorMsg("Handle and Name are required.");
       setLoading(false);
       return;
    }

    // Convert handle to lowercase slug
    const cleanHandle = formData.handle.toLowerCase().replace(/[^a-z0-9_-]/g, '');

    const { error } = await supabase.from('profiles').upsert({
      id: user.id,
      handle: cleanHandle,
      name: formData.name,
      avatar_url: formData.avatar_url,
      headline: formData.headline,
      thesis: formData.thesis,
      builder_status: formData.builder_status,
      goals: formData.goals,
      sectors: formData.sectors,
      outcomes: formData.outcomes,
      frontier_tech_familiarity: formData.frontier_tech_familiarity,
      top_skills: formData.top_skills,
      open_to: formData.open_to,
      provider_links: formData.provider_links || {},
      updated_at: new Date().toISOString()
    });

    if (error) {
      if (error.code === '23505') { // Unique constraint
        setErrorMsg(`The handle @${cleanHandle} is already taken.`);
      } else {
        setErrorMsg('Error saving profile. Please try again.');
        console.error(error);
      }
      setLoading(false);
    } else {
      // Force a full page reload to ensure the root layout's AuthHeader correctly picks up the new profile 
      // instead of using router.push which might use a cached layout state.
      window.location.href = `/builder/${cleanHandle}`;
    }
  };

  return (
    <div className="min-h-screen bg-[#06090c] text-white">
      <div className="absolute top-0 inset-x-0 h-[40vh] bg-gradient-to-b from-[#10b981]/10 to-transparent pointer-events-none" />
      
      <main className="container mx-auto px-6 py-20 max-w-3xl relative z-10">
        <h1 className="text-4xl font-serif mb-2">Build Your Profile</h1>
        <p className="text-white/60 font-light mb-12">Set up your public builder identity. You can always update this later.</p>

        {errorMsg && (
          <div className="mb-8 p-4 bg-red-500/10 border border-red-500/20 text-red-400 rounded-xl text-sm font-mono tracking-wide">
            {errorMsg}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-12">
          
          {/* Section 1: Identity */}
          <section className="glass-panel p-8 rounded-2xl border border-white/5 space-y-6">
            <h2 className="text-[var(--secondary)] font-mono text-sm tracking-widest uppercase mb-4" style={{ '--secondary': '#10b981' } as any}>1. Identity</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs uppercase tracking-widest text-white/50 mb-2">Display Name</label>
                <input 
                  type="text" 
                  value={formData.name} 
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-[#10b981] outline-none transition-colors"
                  placeholder="Jane Doe"
                  required
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-white/50 mb-2">Public Handle</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30 font-mono">@</span>
                  <input 
                    type="text" 
                    value={formData.handle} 
                    onChange={e => setFormData({...formData, handle: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-lg p-3 pl-8 text-white focus:border-[#10b981] outline-none transition-colors font-mono"
                    placeholder="janedoe"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs uppercase tracking-widest text-white/50 mb-2">Avatar URL (Optional)</label>
                <input 
                  type="url" 
                  value={formData.avatar_url || ''} 
                  onChange={e => setFormData({...formData, avatar_url: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-[#10b981] outline-none transition-colors"
                  placeholder="https://example.com/photo.jpg"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-white/50 mb-2">Headline (Short)</label>
                <input 
                  type="text" 
                  value={formData.headline || ''} 
                  onChange={e => setFormData({...formData, headline: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-[#10b981] outline-none transition-colors"
                  placeholder="Product Designer exploring the intersection of AI and biology"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest text-white/50 mb-2">Builder Thesis / What I want to help build</label>
              <textarea 
                value={formData.thesis} 
                onChange={e => setFormData({...formData, thesis: e.target.value})}
                className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-[#10b981] outline-none transition-colors min-h-[100px]"
                placeholder="I believe humanity needs highly legible, open-source models for governance and voting, supported by local community networks..."
              />
            </div>
          </section>

          {/* Section 2: Role & Goals */}
          <section className="glass-panel p-8 rounded-2xl border border-white/5 space-y-6">
            <h2 className="text-[var(--secondary)] font-mono text-sm tracking-widest uppercase mb-4" style={{ '--secondary': '#10b981' } as any}>2. Role & Intent</h2>
            
            <div>
              <label className="block text-xs uppercase tracking-widest text-white/50 mb-4">Builder Status (Select all that apply)</label>
              <div className="flex flex-wrap gap-2">
                {BUILDER_STATUSES.map(status => (
                  <button
                    key={status}
                    type="button"
                    onClick={() => toggleArrayItem('builder_status', status)}
                    className={`px-3 py-1.5 rounded-full border text-xs tracking-wide transition-all ${
                      formData.builder_status?.includes(status) 
                        ? 'border-[#10b981] bg-[#10b981]/10 text-[#10b981]' 
                        : 'border-white/10 bg-white/5 text-white/70 hover:border-white/30'
                    }`}
                  >
                    {status}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest text-white/50 mb-4">Current Goals</label>
              <div className="flex flex-wrap gap-2">
                {GOALS.map(goal => (
                  <button
                    key={goal}
                    type="button"
                    onClick={() => toggleArrayItem('goals', goal)}
                    className={`px-3 py-1.5 rounded-full border text-xs tracking-wide transition-all ${
                      formData.goals?.includes(goal) 
                        ? 'border-[#10b981] bg-[#10b981]/10 text-[#10b981]' 
                        : 'border-white/10 bg-white/5 text-white/70 hover:border-white/30'
                    }`}
                  >
                    {goal}
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* Section 3: Interests */}
          <section className="glass-panel p-8 rounded-2xl border border-white/5 space-y-8">
            <h2 className="text-[var(--secondary)] font-mono text-sm tracking-widest uppercase mb-4" style={{ '--secondary': '#10b981' } as any}>3. Interests & Familiarity</h2>
            
            <div>
              <label className="block text-xs uppercase tracking-widest text-white/50 mb-4">Top Skills</label>
              <div className="flex flex-wrap gap-2 mb-4">
                {PREDEFINED_SKILLS.map(skill => (
                  <button
                    key={skill}
                    type="button"
                    onClick={() => toggleArrayItem('top_skills', skill)}
                    className={`px-3 py-1.5 rounded-full border text-xs tracking-wide transition-all ${
                      formData.top_skills?.includes(skill) 
                        ? 'border-amber-400 bg-amber-400/10 text-amber-400' 
                        : 'border-white/10 bg-white/5 text-white/70 hover:border-white/30'
                    }`}
                  >
                    {skill}
                  </button>
                ))}
                {formData.top_skills?.filter((s: string) => !PREDEFINED_SKILLS.includes(s)).map((skill: string) => (
                   <button
                    key={skill}
                    type="button"
                    onClick={() => toggleArrayItem('top_skills', skill)}
                    className="px-3 py-1.5 rounded-full border border-amber-400 bg-amber-400/10 text-amber-400 text-xs tracking-wide transition-all"
                  >
                    {skill} ✕
                  </button>
                ))}
              </div>
              <div className="flex gap-2 max-w-sm">
                <input 
                  type="text" 
                  value={customSkill} 
                  onChange={e => setCustomSkill(e.target.value)}
                  onKeyDown={e => { if (e.key === 'Enter') { e.preventDefault(); addCustomSkill(); } }}
                  placeholder="Type a custom skill..."
                  className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:border-amber-400 outline-none"
                />
                <button type="button" onClick={addCustomSkill} className="px-4 py-2 border border-white/10 rounded-lg text-white/70 hover:text-white bg-white/5 text-xs font-mono uppercase transition-colors">Add</button>
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest text-white/50 mb-4">Sectors of Interest</label>
              <div className="flex flex-wrap gap-2">
                {SECTORS.map(sector => (
                  <button
                    key={sector}
                    type="button"
                    onClick={() => toggleArrayItem('sectors', sector)}
                    className={`px-3 py-1.5 rounded-full border text-xs font-mono transition-all ${
                      formData.sectors?.includes(sector) 
                        ? 'border-blue-400 bg-blue-400/10 text-blue-400' 
                        : 'border-white/10 bg-white/5 text-white/70 hover:border-white/30'
                    }`}
                  >
                    {sector}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest text-white/50 mb-1">Civilizational Outcomes Targeted (Up to 10)</label>
              <p className="text-[10px] text-white/30 mb-4 font-mono uppercase tracking-widest">Select in sequence to rank your priorities</p>
              <div className="flex flex-wrap gap-2">
                {OUTCOMES.map(outcome => {
                  const rank = formData.outcomes?.indexOf(outcome) ?? -1;
                  return (
                  <button
                    key={outcome}
                    type="button"
                    onClick={() => toggleArrayItem('outcomes', outcome)}
                    className={`px-3 py-1.5 rounded-full border text-xs font-mono transition-all flex items-center gap-2 ${
                      rank !== -1 
                        ? 'border-purple-400 bg-purple-400/10 text-purple-400' 
                        : 'border-white/10 bg-white/5 text-white/70 hover:border-white/30'
                    }`}
                  >
                    {rank !== -1 && <span className="w-4 h-4 rounded-full bg-purple-400/20 text-[10px] flex items-center justify-center -ml-1 text-purple-300">{rank + 1}</span>}
                    {outcome}
                  </button>
                  );
                })}
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest text-white/50 mb-4">Frontier Tech Familiarity</label>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                {TECH.map(tech => {
                  const level = formData.frontier_tech_familiarity?.[tech];
                  return (
                    <div key={tech} className="bg-black/20 border border-white/5 rounded-lg p-3 flex flex-col justify-between">
                      <span className="text-sm font-mono text-white/90 mb-3">{tech}</span>
                      <div className="flex gap-1">
                        {['Novice', 'Proficient', 'Expert'].map(l => (
                          <button
                            key={l}
                            type="button"
                            onClick={() => {
                                if (level === l) removeTechLevel(tech);
                                else handleTechLevel(tech, l);
                            }}
                            className={`flex-1 text-[10px] py-1 border rounded transition-colors ${
                              level === l 
                                ? 'bg-amber-500/20 border-amber-500 text-amber-500'
                                : 'bg-white/5 border-white/10 text-white/40 hover:bg-white/10'
                            }`}
                          >
                            {l}
                          </button>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Section 4: Links & Socials (Optional) */}
          <section className="glass-panel p-8 rounded-2xl border border-white/5 space-y-6">
            <h2 className="text-[var(--secondary)] font-mono text-sm tracking-widest uppercase mb-4" style={{ '--secondary': '#10b981' } as any}>4. Links & Socials (Optional)</h2>
            <p className="text-white/50 text-sm font-light mb-6">Add as many or as few as you like. These will appear on your public profile.</p>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { key: 'email', label: 'Public Contact Email', placeholder: 'hello@example.com', type: 'email' },
                { key: 'x', label: 'X (Twitter) Handle', placeholder: 'elonmusk', type: 'text' },
                { key: 'github', label: 'GitHub Handle', placeholder: 'torvalds', type: 'text' },
                { key: 'linkedin', label: 'LinkedIn URL', placeholder: 'https://linkedin.com/in/...', type: 'url' },
                { key: 'website', label: 'Personal Website', placeholder: 'https://yourdomain.com', type: 'url' },
                { key: 'portfolio', label: 'Portfolio / Demo', placeholder: 'https://...', type: 'url' },
                { key: 'substack', label: 'Substack / Blog', placeholder: 'https://...', type: 'url' },
                { key: 'huggingface', label: 'HuggingFace Handle', placeholder: 'username', type: 'text' },
              ].map(field => (
                <div key={field.key}>
                  <label className="block text-xs uppercase tracking-widest text-white/50 mb-2">{field.label}</label>
                  <input 
                    type={field.type} 
                    value={formData.provider_links?.[field.key] || ''} 
                    onChange={e => setFormData({
                      ...formData, 
                      provider_links: {
                        ...(formData.provider_links || {}),
                        [field.key]: e.target.value
                      }
                    })}
                    className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-[#10b981] outline-none transition-colors font-mono text-sm"
                    placeholder={field.placeholder}
                  />
                </div>
              ))}
            </div>
          </section>

          <div className="flex justify-end pt-6">
            <button
              type="submit"
              disabled={loading}
              className="bg-[#10b981] hover:bg-[#059669] text-white px-8 py-3 rounded-full font-mono text-sm uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Saving...' : (isUpdate ? 'Update Profile' : 'Create Public Profile')}
            </button>
          </div>

        </form>
      </main>
    </div>
  );
}
