export function Icon({ name = 'face', className = '' }: { name?: string; className?: string }) {
 return <svg className={className} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
 {name === 'whatsapp' ? <><path d="M52 31a20 20 0 0 1-29 18L12 52l3-11a20 20 0 1 1 37-10Z"/><path d="m24 21 5 7-3 4c3 5 5 7 10 9l4-4 7 4c-1 6-7 7-12 4-10-5-16-12-17-18 0-4 2-6 6-6Z"/></> : name === 'syringe' ? <><path d="m17 45 27-27 8 8-27 27-8-8Zm-7 12 10-10M41 12l15 15M47 8l13 13M49 10l-5 5m12 2-5 5M32 30l5 5m-12 2 5 5m-11 2 4 4"/></> : name === 'lotus' ? <><path d="M32 53C16 43 21 26 32 13c11 13 16 30 0 40Z"/><path d="M21 28c-5-4-10-6-15-6 0 19 8 33 26 31 18 2 26-12 26-31-5 0-10 2-15 6M17 38 7 36m40 2 10-2"/></> : <><path d="M15 32C10 5 52 4 49 32M18 29c1 17 8 27 14 27s14-10 15-27M18 30c1-10 17-6 16-20m0 8c2 7 11 6 13 12M16 30c-8-2-4 14 3 14m29-14c7-2 4 13-3 14"/>{name === 'sparkles' && <><path d="m54 35 2-5 2 5 4 2-4 2-2 5-2-5-4-2 4-2ZM23 35q3 3 6 0m7 0q3 3 6 0"/></>}</>}
 </svg>;
}
export function Arrow() { return <span aria-hidden="true">↗</span>; }
