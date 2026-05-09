import React from 'react';
export default function Nav() {
  return React.createElement('nav',{style:{display:'flex',alignItems:'center',gap:'1.5rem',padding:'1rem 2rem',borderBottom:'1px solid #1e293b',background:'#0d1117'}},
    React.createElement('a',{href:'/',style:{fontWeight:700,fontSize:'1.1rem',color:'#7c3aed',textDecoration:'none'}},'IT-S CDN'),
    React.createElement('a',{href:'/',style:{color:'#94a3b8',textDecoration:'none',fontSize:'0.9rem'}},'Dashboard'),React.createElement('a',{href:'/zones',style:{color:'#94a3b8',textDecoration:'none',fontSize:'0.9rem'}},'Zones'),React.createElement('a',{href:'/analytics',style:{color:'#94a3b8',textDecoration:'none',fontSize:'0.9rem'}},'Analytics'),React.createElement('a',{href:'/rules',style:{color:'#94a3b8',textDecoration:'none',fontSize:'0.9rem'}},'Rules'),React.createElement('a',{href:'/settings',style:{color:'#94a3b8',textDecoration:'none',fontSize:'0.9rem'}},'Settings'),React.createElement('a',{href:'/billing',style:{color:'#94a3b8',textDecoration:'none',fontSize:'0.9rem'}},'Billing')
  );
}
