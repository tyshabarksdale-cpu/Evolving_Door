
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from 'next/image';
import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExpandableList } from "@/components/shared/expandable-list";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services',
};

const servicesHeroImage = PlaceHolderImages.find(img => img.id === 'contact');

const leadershipPackages = [
    {
        id: "elevate",
        title: "ELEVATE",
        subtitle: "Executive/Leadership Presence & Strategic Impact",
        duration: "3-Month Foundational Engagement",
        idealFor: "Ideal for leaders seeking to enhance their leadership presence, strategic thinking, and decision-making capabilities in complex environments.",
        whatsIncluded: [
            "6 1:1 coaching sessions (60 minutes each, twice a month)",
            "Personalized leadership assessment and goal-setting session",
            "COACH framework integration for sustainable progress",
            "Customized action plans between sessions",
            "Email and text support between sessions",
            "Mid-point progress review",
            "Final integration session with forward momentum plan",
        ],
        clientOutcomes: [
           "Enhanced executive presence and authentic leadership style",
           "Improved strategic decision-making capabilities",
           "Greater clarity in communication with stakeholders at all levels",
           "Actionable strategies for immediate implementation",
        ],
    },
    {
        id: "transform",
        title: "TRANSFORM",
        subtitle: "Comprehensive Leadership Development",
        duration: "6-Month Signature Program",
        idealFor: "Ideal for leaders navigating significant organizational changes, stepping into new roles, or committed to deep leadership transformation.",
        whatsIncluded: [
            "12 1:1 coaching sessions (60 minutes each, twice a month)",
            "Comprehensive leadership and emotional intelligence assessment",
            "COACH and ACHIEVE framework integration",
            "Customized leadership development roadmap",
            "Quarterly stakeholder feedback integration (360-degree insights)",
            "Email and text support throughout engagement",
            "Monthly progress reviews and goal recalibration",
            "Access to curated leadership resources and tools",
            "Final capstone session with 12-month sustainability plan",
        ],
        clientOutcomes: [
            "Transformational shift in leadership effectiveness and confidence",
            "Measurable improvements in team performance and engagement",
            "Enhanced emotional intelligence and relationship management",
            "Sustainable well-being practices integrated into leadership approach",
            "Alignment between personal values and professional practice",
        ],
    },
];

const careerPackages = [
    {
        id: "clarity",
        title: "CLARITY",
        subtitle: "Career Direction & Strategy",
        duration: "2-Month Intensive Program",
        idealFor: "Ideal for professionals seeking clarity on their next career move, whether within their organization or exploring new opportunities.",
        whatsIncluded: [
            "8 1:1 coaching sessions (60 minutes each, weekly)",
            "Career assessment and values clarification exercises",
            "Personal brand and unique value proposition development",
            "Career vision and goal-setting session",
            "Action planning with accountability checkpoints",
            "Email and text support throughout the program",
            "Resources for career exploration and decision-making",
        ],
        clientOutcomes: [
            "Clear vision for career direction aligned with values and purpose",
            "Confidence in career decision-making",
            "Strategic action plan for next career steps",
            "Enhanced understanding of personal brand and marketability",
        ],
    },
    {
        id: "transition",
        title: "TRANSITION",
        subtitle: "Career Change Navigation",
        duration: "4-Month Comprehensive Program",
        idealFor: "Ideal for those making significant career transitions, new roles, new organizations, retirement planning, or career pivots requiring strategic navigation.",
        whatsIncluded: [
            "16 1:1 coaching sessions (60 minutes each, weekly)",
            "Career transition assessment and transition plan development",
            "Personal brand positioning and narrative development",
            "Strategic networking and relationship-building coaching",
            "Interview preparation and negotiation strategies (as applicable)",
            "Onboarding success planning for new roles",
            "Resilience building and change management support",
            "Email and text support throughout transition",
            "30-day post-transition check-in session",
        ],
        clientOutcomes: [
            "Successful navigation of career transition with confidence",
            "Strong personal brand and compelling career narrative",
            "Expanded professional network and relationships",
            "Strategic approach to new role integration or career pivot",
            "Reduced stress and enhanced well-being during transition",
        ],
    },
];

const addOnServices = [
    {
        title: "Workshop Facilitation",
        description: "Custom half-day or full-day workshops on leadership topics, organizational well-being, change management, or team effectiveness."
    },
    {
        title: "Speaking Engagements",
        description: "Keynote presentations or breakout sessions for conferences, retreats, or organizational events."
    },
    {
        title: "Leadership Assessment Debriefs",
        description: "In-depth review and coaching around 360-degree feedback or other leadership assessments."
    },
    {
        title: "Emergency Coaching Session",
        description: "Single 60-minute session for urgent leadership challenges (available to current and former clients)."
    }
]

export default function ServicesPage() {
    return (
        <>
            <Header />
            <main className="flex-1">
                <section className="w-full pt-28 md:pt-36 pb-12 md:pb-16 lg:pb-20 bg-muted animate-glide-up">
                    <div className="container px-4 md:px-6">
                        <Tabs defaultValue="leadership" className="w-full">
                            <div className="text-center mb-10">
                                <h2 className="text-3xl sm:text-4xl font-headline font-bold text-primary">Core Coaching Packages</h2>
                                <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">Focused programs to help you achieve your leadership and career goals.</p>
                                <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mt-6 h-auto p-0 bg-transparent gap-2">
                                    <TabsTrigger value="leadership" className="py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=inactive]:bg-background data-[state=inactive]:border data-[state=inactive]:border-border">Leadership Coaching</TabsTrigger>
                                    <TabsTrigger value="career" className="py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=inactive]:bg-background data-[state=inactive]:border data-[state=inactive]:border-border">Career Coaching</TabsTrigger>
                                </TabsList>
                            </div>

                            <TabsContent value="leadership">
                                <div className="grid md:grid-cols-2 gap-8">
                                    {leadershipPackages.map((pkg) => (
                                        <Card key={pkg.id} className="flex flex-col">
                                            <CardHeader className="text-center">
                                                <CardTitle className="text-primary font-headline text-2xl">{pkg.title}</CardTitle>
                                                <CardDescription className="font-semibold text-secondary">{pkg.subtitle}</CardDescription>
                                                <p className="text-sm text-muted-foreground pt-2">{pkg.duration}</p>
                                            </CardHeader>
                                            <CardContent className="flex-grow space-y-4">
                                                <p className="text-sm italic text-center">{pkg.idealFor}</p>
                                                <div>
                                                    <h4 className="font-bold text-primary mb-2">What's Included:</h4>
                                                    <ExpandableList items={pkg.whatsIncluded} truncateAt={4} />
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-primary mb-2 mt-4">Client Outcomes:</h4>
                                                    <ul className="space-y-2">
                                                        {pkg.clientOutcomes.map((item, i) => (
                                                            <li key={i} className="flex items-start">
                                                                <CheckCircle2 className="h-4 w-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                                                                <span className="text-sm text-muted-foreground">{item}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </CardContent>
                                            <CardFooter>
                                                <Button asChild className="w-full">
                                                    <Link href="/contact">Inquire About {pkg.title}</Link>
                                                </Button>
                                            </CardFooter>
                                        </Card>
                                    ))}
                                </div>
                            </TabsContent>

                             <TabsContent value="career">
                                <div className="grid md:grid-cols-2 gap-8">
                                    {careerPackages.map((pkg) => (
                                        <Card key={pkg.id} className="flex flex-col">
                                            <CardHeader className="text-center">
                                                <CardTitle className="text-primary font-headline text-2xl">{pkg.title}</CardTitle>
                                                <CardDescription className="font-semibold text-secondary">{pkg.subtitle}</CardDescription>
                                                <p className="text-sm text-muted-foreground pt-2">{pkg.duration}</p>
                                            </CardHeader>
                                            <CardContent className="flex-grow space-y-4">
                                                <p className="text-sm italic text-center">{pkg.idealFor}</p>
                                                <div>
                                                    <h4 className="font-bold text-primary mb-2">What's Included:</h4>
                                                    <ExpandableList items={pkg.whatsIncluded} truncateAt={4} />
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-primary mb-2 mt-4">Client Outcomes:</h4>
                                                    <ul className="space-y-2">
                                                        {pkg.clientOutcomes.map((item, i) => (
                                                            <li key={i} className="flex items-start">
                                                                <CheckCircle2 className="h-4 w-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                                                                <span className="text-sm text-muted-foreground">{item}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </CardContent>
                                            <CardFooter>
                                                <Button asChild className="w-full">
                                                    <Link href="/contact">Inquire About {pkg.title}</Link>
                                                </Button>
                                            </CardFooter>
                                        </Card>
                                    ))}
                                </div>
                            </TabsContent>
                        </Tabs>
                    </div>
                </section>
                
                <section className="w-full py-12 md:py-16 lg:py-20 bg-background animate-glide-up">
                    <div className="container px-4 md:px-6">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="text-center md:text-left">
                                <h2 className="text-3xl font-headline font-bold text-primary mb-4">Leadership Development Programs</h2>
                                <h3 className="text-xl font-bold text-secondary mb-2">Custom Group Coaching Cohorts</h3>
                                <p className="text-muted-foreground mb-4">Ideal for organizations seeking to develop leadership capabilities across multiple leaders simultaneously through cohort-based learning and peer support.</p>
                                <p className="font-semibold text-primary mb-2">Components include:</p>
                                <ul className="space-y-2 mb-4">
                                    {["Needs assessment and program design", "Monthly group coaching sessions (90-120 minutes)", "Individual coaching sessions for each participant", "Leadership curriculum aligned with organizational goals", "Peer learning and accountability partnerships", "Progress tracking and measurable outcomes", "Integration with organizational well-being initiatives"].map((item, i) => (
                                        <li key={i} className="flex items-start">
                                            <CheckCircle2 className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                                            <span className="text-sm text-muted-foreground">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {addOnServices.map((service, index) => (
                                    <Card key={service.title} className="text-center animate-glide-up">
                                        <CardHeader>
                                            <CardTitle className="text-xl font-headline text-primary">{service.title}</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-sm text-muted-foreground">{service.description}</p>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-12 md:py-20 bg-muted animate-glide-up">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl sm:text-4xl font-headline font-bold text-primary">Getting Started</h2>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            <Card className="text-center animate-glide-up">
                                <CardHeader>
                                    <CardTitle className="font-headline text-primary">Discovery Call</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">All potential clients begin with a complimentary 30-minute discovery call to explore fit, discuss goals, and determine the best coaching package for your needs. All coaching packages can be tailored.</p>
                                </CardContent>
                            </Card>
                             <Card className="text-center animate-glide-up">
                                <CardHeader>
                                    <CardTitle className="font-headline text-primary">Flexible Formats</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">All coaching packages available in virtual or hybrid format to accommodate your schedule and preferences.</p>
                                </CardContent>
                            </Card>
                             <Card className="text-center md:col-span-2 lg:col-span-1 animate-glide-up">
                                <CardHeader>
                                    <CardTitle className="font-headline text-primary">Satisfaction Commitment</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">If after two sessions you feel the coaching isn't the right fit, receive a full refund minus the completed sessions.</p>
                                </CardContent>
                            </Card>
                        </div>
                        <div className="text-center mt-12">
                            <p className="text-muted-foreground mb-4">Monthly payment plans and organizational sponsorship are available.</p>
                            <Button asChild size="lg">
                                <a href="https://cal.com/janice-brown-taylor-x55xle/30min" target="_blank" rel="noopener noreferrer">
                                    Book Your Free Discovery Call <ArrowRight className="ml-2 h-5 w-5" />
                                </a>
                            </Button>
                        </div>
                    </div>
                </section>

                 <section className="py-12 md:py-20 bg-background animate-glide-up">
                    <div className="container mx-auto px-4">
                        <div className="max-w-3xl mx-auto text-center">
                            <blockquote className="text-2xl md:text-3xl font-headline font-medium text-primary">
                            "Owning our story and loving ourselves through the process is the bravest thing that we’ll ever do."
                            </blockquote>
                            <p className="mt-4 text-lg text-secondary font-semibold italic">~ Brené Brown</p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

    
