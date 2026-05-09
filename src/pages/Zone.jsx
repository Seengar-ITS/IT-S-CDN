import React,{useEffect,useState} from 'react';
import {supabase} from '../lib/supabase.js';
import {requireAuth} from '../lib/auth.js';
import * as S from '../styles.js';
export default function Zone(){
  const id=window.location.pathname.split('/')[2];
  const [zone,setZone]=useState(null);const [origins,setOrigins]=useState([]);
  useEffect(()=>{requireAuth(window.location.href);supabase.from('cdn_zones').select('*').eq('id',id).single().then(({data})=>setZone(data));supabase.from('cdn_origins').select('*').eq('zone_id',id).then(({data})=>setOrigins(data||[]));  },[id]);
  if(!zone)return React.createElement('div',{style:S.page},React.createElement('p',{style:S.muted},'Loading...'));
  return React.createElement('div',{style:S.page},React.createElement('h1',{style:S.h1},zone.domain),React.createElement('h2',{style:S.h2},'Origins'),origins.length===0&&React.createElement('p',{style:S.muted},'No origins configured.'),...origins.map(o=>React.createElement('div',{key:o.id,style:S.card},React.createElement('p',null,o.origin_url),React.createElement('p',{style:S.muted},o.status))));
}