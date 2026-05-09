import React,{useState,useEffect} from 'react';
import {supabase} from '../lib/supabase.js';
import {requireAuth,getUser} from '../lib/auth.js';
import * as S from '../styles.js';
export default function NewZone(){
  const [domain,setDomain]=useState('');const [region,setRegion]=useState('global');const [saving,setSaving]=useState(false);
  useEffect(()=>requireAuth(window.location.href),[]);
  const create=async()=>{setSaving(true);const u=getUser();if(!u)return;const {data}=await supabase.from('cdn_zones').insert({user_id:u.sub,domain,region,status:'inactive'}).select().single();if(data)window.location.href='/zones/'+data.id;setSaving(false);};
  return React.createElement('div',{style:S.page},React.createElement('h1',{style:S.h1},'New CDN Zone'),React.createElement('div',{style:S.card},React.createElement('div',{style:{marginBottom:'1rem'}},React.createElement('label',{style:S.muted},'Domain'),React.createElement('input',{style:{...S.input,marginTop:'0.3rem'},value:domain,onChange:e=>setDomain(e.target.value),placeholder:'example.com'})),React.createElement('div',{style:{marginBottom:'1.5rem'}},React.createElement('label',{style:S.muted},'Region'),React.createElement('input',{style:{...S.input,marginTop:'0.3rem'},value:region,onChange:e=>setRegion(e.target.value),placeholder:'global'})),React.createElement('button',{style:S.btn,onClick:create,disabled:!domain||saving},saving?'Creating...':'Create Zone')));
}