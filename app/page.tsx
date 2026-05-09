 import { Button } from "@/components/ui/button"
 import { ArrowRight, BrainCircuit, Globe, Zap } from "lucide-react"
 
 export default function LandingPage() {
   return (
     <div className="relative min-h-screen overflow-hidden">
       {/* Background Decoration */}
       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
         <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px]" />
         <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[120px]" />
       </div>
 
       <section className="max-w-7xl mx-auto px-6 pt-20 pb-32 text-center">
         <div className="inline-flex items-center gap-2 bg-muted px-4 py-1.5 rounded-full text-sm font-medium mb-8">
           <Zap className="w-4 h-4 text-primary fill-primary" />
           <span>Revolutionizing Hackathon Workflows</span>
         </div>
         
         <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
           Meet <span className="text-primary">SAATHI</span>. <br />
           Your Intelligence Partner.
         </h1>
         
         <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-10">
           Built for the next generation of creators. Saathi leverages Google Gemini to transform your ideas into reality faster than ever.
         </p>
 
         <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
           <Button size="lg" className="h-14 px-8 text-lg rounded-2xl hover-glow">
             Start Building Now <ArrowRight className="ml-2 w-5 h-5" />
           </Button>
           <Button variant="outline" size="lg" className="h-14 px-8 text-lg rounded-2xl">
             View Demo
           </Button>
         </div>
 
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-32 text-left">
           <FeatureCard icon={<BrainCircuit className="w-6 h-6" />} title="Smart Logic" description="Context-aware AI that understands your project needs instantly." />
           <FeatureCard icon={<Globe className="w-6 h-6" />} title="Global Sync" description="Seamlessly connect your tools and data sources in one place." />
           <FeatureCard icon={<Zap className="w-6 h-6" />} title="Ultra Fast" description="Optimized for speed with Next.js 16 and Turbopack support." />
         </div>
       </section>
     </div>
   )
 }
 
 function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
   return (
     <div className="p-8 rounded-3xl border bg-card/50 hover:bg-card transition-colors group">
       <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
         {icon}
       </div>
       <h3 className="text-xl font-bold mb-3">{title}</h3>
       <p className="text-muted-foreground leading-relaxed">{description}</p>
     </div>
   )
 }