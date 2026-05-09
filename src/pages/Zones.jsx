import React,{useEffect,useState} from 'react';
import {supabase} from '../lib/supabase.js';
import {requireAuth} from '../lib/auth.js';
import * as S from '../styles.js';
export default function Zones(){
  const [zones,setZones]=useState([]);
  useEffect(()=>{requireAuth(window.location.href);supabase.from('cdn_zones').select('*').then(({data})=>setZones(data||[]));  },[]);
  return React.createElement('div',{style:S.page},React.createElement('div',{style:{display:'flex',justifyContent:'space-between',marginBottom:'1.5rem'}},React.createElement('h1',{style:{...S.h1,marginBottom:0}},'CDN Zones'),React.createElement('button',{style:S.btn,onClick:()=>window.location.href='/zones/new'},'+ New Zone')),zones.length===0&&React.createElement('div',{style:S.card},React.createElement('p',{style:S.muted},'No CDN zones configured.')),...zones.map(z=>React.createElement('div',{key:z.id,style:{...S.card,cursor:'pointer'},onClick:()=>window.location.href='/zones/'+z.id},React.createElement('div',{style:{display:'flex',justifyContent:'space-between'}},React.createElement('h2',{style:S.h2},z.domain),React.createElement('span',{style:{color:z.status==='active'?'#22c55e':'#64748b',fontSize:'0.85rem'}},z.status)),React.createElement('p',{style:S.muted},z.region||'Global'))));
}