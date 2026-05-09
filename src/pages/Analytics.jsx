import React,{useEffect,useState} from 'react';
import {supabase} from '../lib/supabase.js';
import {requireAuth} from '../lib/auth.js';
import * as S from '../styles.js';
export default function Analytics(){
  const [rows,setRows]=useState([]);
  useEffect(()=>{requireAuth(window.location.href);supabase.from('cdn_analytics').select('*').order('date',{ascending:false}).limit(30).then(({data})=>setRows(data||[]));  },[]);
  return React.createElement('div',{style:S.page},React.createElement('h1',{style:S.h1},'CDN Analytics'),rows.length===0&&React.createElement('div',{style:S.card},React.createElement('p',{style:S.muted},'No analytics data yet.')),...rows.map(r=>React.createElement('div',{key:r.id,style:S.card},React.createElement('div',{style:{display:'flex',gap:'1.5rem'}},React.createElement('span',null,'Requests: ',React.createElement('strong',null,r.requests)),React.createElement('span',null,'Cache Hit: ',React.createElement('strong',null,r.cache_hit_rate+'%')),React.createElement('span',{style:S.muted},r.date)))));
}