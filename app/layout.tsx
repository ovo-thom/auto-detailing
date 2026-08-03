import type {Metadata} from 'next'; import './globals.css'; import Header from '@/components/layout/Header'; import Footer from '@/components/layout/Footer';
export const metadata:Metadata={title:{default:'Atelier Nacre — Detailing intérieur',template:'%s | Atelier Nacre'},description:'Detailing intérieur automobile premium à Bruxelles et alentours.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="fr"><body className="font-sans antialiased"><Header/><main>{children}</main><Footer/></body></html>}
