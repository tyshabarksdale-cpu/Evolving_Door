
'use client';
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Brain, Zap, Target, PlayCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const heroImage = PlaceHolderImages.find(img => img.id === 'hero');
const aboutImageHome = PlaceHolderImages.find(img => img.id === 'about-home');

const philosophyPoints = [
    {
        icon: <Heart className="w-8 h-8 text-secondary" />,
        title: 'Empowerment',
        description: 'I believe in empowering you with the tools and insights to create lasting change from within.'
    },
    {
        icon: <Brain className="w-8 h-8 text-secondary" />,
        title: 'Holistic Approach',
        description: 'We look at all areas of your life to create a balanced and fulfilling path forward.'
    },
    {
        icon: <Zap className="w-8 h-8 text-secondary" />,
        title: 'Action-Oriented',
        description: 'Coaching is about momentum. We focus on actionable steps to move you toward your goals.'
    },
    {
        icon: <Target className="w-8 h-8 text-secondary" />,
        title: 'Authenticity',
        description: 'Our partnership is built on a foundation of trust, honesty, and genuine support.'
    }
];

export function HomePageContent() {
    return (
        <>

            <div className="flex flex-col min-h-dvh">
                <main className="flex-1">
                    <section id="home" className="relative w-full h-[600px] flex items-center justify-center text-center text-white overflow-hidden bg-blue-100">
                        <Header />
                        <Image
                            src={heroImage!.imageUrl}
                            alt={heroImage!.description}
                            fill
                            className="object-cover"
                            priority
                            sizes="100vw"
                            data-ai-hint={heroImage!.imageHint}
                        />
                        <div className="absolute inset-0 bg-black/40 md:bg-black/60" />
                        <div className="relative z-10 p-4 max-w-4xl mx-auto flex flex-col items-center">

                            <h1 className="text-3xl md:text-5xl font-headline font-bold tracking-normal text-shadow-lg mt-8 leading-snug md:leading-relaxed px-4">
                                "What <span className="italic text-secondary">possibilities</span> would open up if you lead as the person God created you to be<br className="hidden md:inline" /> — rather than the <span className="italic text-secondary">expectations</span> others have placed on you?"
                            </h1>

                            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Button asChild size="lg" variant="outline" className="font-bold border-white text-white bg-transparent hover:bg-white/10 hover:text-white tracking-wider">
                                    <Link href="/services">
                                        Learn More <ArrowRight className="ml-2 h-5 w-5" />
                                    </Link>
                                </Button>
                                <Button asChild size="lg" variant="outline" className="font-bold border-white text-white bg-transparent hover:bg-white/10 hover:text-white">
                                    <a href="https://cal.com/janice-brown-taylor-x55xle/30min" target="_blank" rel="noopener noreferrer">Book A Consultation</a>
                                </Button>
                            </div>
                        </div>
                    </section>

                    <section id="about-intro" className="pt-16 md:pt-20 pb-8 md:pb-12 bg-background">
                        <div className="container mx-auto px-4 md:px-6">
                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                <div className="flex justify-center">
                                    {aboutImageHome && (
                                        <div className="relative w-full max-w-[320px] aspect-[4/5] rounded-lg overflow-hidden shadow-lg border border-secondary">
                                            <Image
                                                src={aboutImageHome.imageUrl}
                                                alt={aboutImageHome.description}
                                                fill
                                                className="object-cover object-[center_30%]"
                                                sizes="(max-width: 768px) 80vw, 320px"
                                                data-ai-hint={aboutImageHome.imageHint}
                                            />
                                        </div>
                                    )}
                                </div>
                                <div className="text-center md:text-left">
                                    <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary animate-glide-up">A Guide for Your <span className="text-secondary italic">Journey</span></h2>
                                    <p className="mt-4 text-lg text-muted-foreground animate-glide-up">
                                        I'm Janice Brown-Taylor, a certified leadership coach dedicated to helping you find clarity, purpose, and reach your full potential as an authentic, resilient leader.
                                    </p>
                                    <p className="mt-4 text-lg text-muted-foreground animate-glide-up">
                                        My mission is to provide a safe, supportive environment where you can break free from your limiting beliefs, overcome obstacles and design a life that truly resonates with you.
                                    </p>
                                    <Button asChild variant="link" className="mt-4 text-primary font-bold text-lg p-0 animate-glide-up">
                                        <Link href="/about">
                                            Learn More About Me <ArrowRight className="ml-2 h-5 w-5" />
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="philosophy" className="py-8 md:py-12 bg-background">
                        <div className="container mx-auto px-4">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary animate-glide-up">My Coaching Philosophy</h2>
                                <p className="mt-4 text-lg max-w-3xl mx-auto text-muted-foreground animate-glide-up">
                                    I believe coaching is a collaborative partnership built on trust and authenticity. My approach is not to give you the answers, but to empower you to find your own. Together, we'll uncover your strengths, clarify your values, and design an actionable roadmap to achieve your goals.
                                </p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                {philosophyPoints.map((point, index) => (
                                    <Card key={point.title} className="bg-muted border-none shadow-lg text-center animate-glide-up">
                                        <CardHeader className="items-center">
                                            {point.icon}
                                            <CardTitle className="mt-4 font-headline text-2xl text-primary">{point.title}</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-muted-foreground">{point.description}</p>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section id="logo-section" className="py-4 bg-background">
                        <div className="container mx-auto px-4 flex justify-center animate-glide-up">
                            <Image
                                src="https://firebasestorage.googleapis.com/v0/b/studio-7158004547-ae16d.firebasestorage.app/o/TYL-FinalLogo%20(1).PNG?alt=media&token=1a0c4dff-d545-4d90-bcf4-46de8b4d0ef1"
                                alt="Taylor Your Leadership Coaching Logo"
                                width={500}
                                height={200}
                                className="max-w-[500px]"
                                style={{ height: 'auto', width: 'auto' }}
                            />
                        </div>
                    </section>

                    <section id="quote" className="py-8 md:py-12 bg-muted animate-glide-up">
                        <div className="container mx-auto px-4">
                            <div className="max-w-3xl mx-auto text-center">
                                <blockquote className="text-2xl md:text-3xl font-headline font-medium text-primary">
                                    "Progress is not achieved by luck or accident, but by working on yourself daily."
                                </blockquote>
                                <p className="mt-4 text-lg text-secondary font-semibold italic">~ Epictetus</p>
                            </div>
                        </div>
                    </section>

                    <section id="video-feature" className="py-8 md:py-12 bg-background animate-glide-up">
                        <div className="container mx-auto px-4">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">A Glimpse Into Coaching</h2>
                                <p className="mt-4 text-lg max-w-3xl mx-auto text-muted-foreground">
                                    Watch this short video to understand my approach and how we can work together to achieve your goals.
                                </p>
                            </div>
                            <div className="max-w-4xl mx-auto">
                                <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl bg-black">
                                    <video
                                        className="w-full h-full"
                                        controls
                                        preload="metadata"
                                        playsInline
                                    >
                                        <source src="/videos/coaching-sales-letter-final.mp4" type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
                <Footer />
            </div>
        </>
    );
}
