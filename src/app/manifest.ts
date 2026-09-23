import type { MetadataRoute } from 'next';
export default function manifest():MetadataRoute.Manifest{return {name:'Jupyter Medicina Estética',short_name:'Jupyter',start_url:'/',display:'browser',background_color:'#f8f7f3',theme_color:'#43554f',icons:[{src:'/icon.svg',sizes:'any',type:'image/svg+xml'}]};}
