
import { Mail, Phone, MapPin } from 'lucide-react';
import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { ContactForm } from "./contact-form";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
};

const contactAvatar = PlaceHolderImages.find(img => img.id === 'contact-avatar');

export default function ContactPage() {
    return (
        <>
            <Header />
            <main className="flex-1">
                <section className="w-full pt-28 md:pt-36 pb-12 md:pb-20 bg-muted">
                    <div className="container mx-auto px-4">
                       <div className="text-center mb-12 flex flex-col items-center">
                            <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">Get In Touch</h1>
                            {contactAvatar && (
                                <div className="relative w-48 h-56 rounded-lg overflow-hidden my-6 shadow-lg bg-white border border-primary">
                                    <Image
                                        src={contactAvatar.imageUrl}
                                        alt={contactAvatar.description}
                                        fill
                                        className="object-cover"
                                        sizes="192px"
                                        data-ai-hint={contactAvatar.imageHint}
                                        priority
                                    />
                                </div>
                            )}
                            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto animate-glide-up">
                                I'm excited to hear from you. Whether you have a question, want to book a session, or just want to say hello, please feel free to reach out.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start">
                            <Card className="shadow-lg animate-glide-up">
                                <CardHeader className="text-center">
                                    <CardTitle className="text-3xl font-headline text-primary">Send a Message</CardTitle>
                                    <CardDescription>Fill out the form below and I'll get back to you as soon as possible.</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ContactForm />
                                </CardContent>
                            </Card>

                            <div className="space-y-8 pt-4 animate-glide-up">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 bg-primary text-primary-foreground p-3 rounded-full">
                                        <Mail className="h-6 w-6" />
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-bold text-primary">Email</h4>
                                        <p className="text-muted-foreground">The best way to reach me for any inquiry.</p>
                                        <a href="mailto:TaylorLeadershipCoach@gmail.com" className="text-secondary hover:underline font-semibold break-all">
                                            TaylorLeadershipCoach@gmail.com
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 bg-primary text-primary-foreground p-3 rounded-full">
                                        <Phone className="h-6 w-6" />
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-bold text-primary">Phone</h4>
                                        <p className="text-muted-foreground">Available Mon-Fri, 9am-5pm EST.</p>
                                        <a href="tel:+17035085476" className="text-secondary hover:underline font-semibold">
                                            +1 (703) 508-5476
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 bg-primary text-primary-foreground p-3 rounded-full">
                                        <MapPin className="h-6 w-6" />
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-bold text-primary">Location</h4>
                                        <p className="text-muted-foreground">Offering virtual sessions to clients worldwide.</p>
                                        <p className="font-semibold text-secondary">Remote / Online</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="cta-contact" className="w-full py-16 flex items-center justify-center text-center bg-primary text-primary-foreground animate-glide-up">
                    <div className="z-10 p-4 md:px-6">
                        <h2 className="text-3xl md:text-4xl font-headline font-bold tracking-tight italic">
                            Ready to Start Now?
                        </h2>
                        <p className="mt-4 text-lg max-w-2xl mx-auto">
                            The simplest way to begin is by booking a <span className="font-bold text-secondary">complimentary</span> discovery call.
                        </p>
                        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button asChild size="lg" variant="outline" className="font-bold border-primary-foreground text-primary-foreground bg-transparent hover:bg-white/10 hover:text-white">
                                <a href="https://cal.com/janice-brown-taylor-x55xle/30min" target="_blank" rel="noopener noreferrer">Let's Talk</a>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="font-bold border-primary-foreground text-primary-foreground bg-transparent hover:bg-white/10 hover:text-white">
                                <Link href="/services">Learn More</Link>
                            </Button>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
