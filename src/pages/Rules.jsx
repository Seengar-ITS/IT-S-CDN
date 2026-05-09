import React,{useEffect,useState} from 'react';
import {supabase} from '../lib/supabase.js';
import {requireAuth} from '../lib/auth.js';
import * as S from '../styles.js';
export default function Rules(){
  const [rules,setRules]=useState([]);
  useEffect(()=>{requireAuth(window.location.href);supabase.from('cdn_rules').select('*').then(({data})=>setRules(data||[]));  },[]);
  return React.createElement('div',{style:S.page},React.createElement('h1',{style:S.h1},'Cache Rules'),rules.length===0&&React.createElement('div',{style:S.card},React.createElement('p',{style:S.muted},'No cache rules configured.')),...rules.map(r=>React.createElement('div',{key:r.id,style:S.card},React.createElement('p',null,r.rule_type+': ',React.createElement('strong',null,r.pattern),' → '+r.action))));
}