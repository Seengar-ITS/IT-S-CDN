import React,{useEffect,useState} from 'react';
import {supabase} from '../lib/supabase.js';
import {requireAuth} from '../lib/auth.js';
import * as S from '../styles.js';
export default function Home(){
  const [stats,setStats]=useState({zones:0,requests:0,bandwidth:0});
  useEffect(()=>{requireAuth(window.location.href);supabase.from('cdn_zones').select('id',{count:'exact',head:true}).then(({count})=>setStats(s=>({...s,zones:count||0})));supabase.from('cdn_analytics').select('requests,bandwidth').then(({data})=>{if(data?.length)setStats(s=>({...s,requests:data.reduce((a,b)=>a+(b.requests||0),0),bandwidth:data.reduce((a,b)=>a+(b.bandwidth||0),0)}));});},[]);
  const fmt=b=>b>1e9?(b/1e9).toFixed(1)+'GB':b>1e6?(b/1e6).toFixed(1)+'MB':b+'B';
  return React.createElement('div',{style:S.page},React.createElement('h1',{style:S.h1},'IT-S CDN'),React.createElement('div',{style:{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(180px,1fr))',gap:'1rem'}},[['Active Zones',stats.zones,''],['Total Requests',stats.requests,''],['Bandwidth',fmt(stats.bandwidth),'']].map(([k,v])=>React.createElement('div',{key:k,style:S.card},React.createElement('p',{style:S.muted},k),React.createElement('h2',{style:{...S.h2,fontSize:'2rem'}},v)))));
}