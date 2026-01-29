"use client";

import { FadeIn, StaggerContainer } from "@/components/ui/animations";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Clock, Search, Star, Filter, Code, Database, Globe, Layout, Smartphone } from "lucide-react";
import { useState } from "react";

// Mock Data
const categories = ["All", "Frontend", "Backend", "Full Stack", "DevOps", "Mobile"];
const courses = [
    {
        id: 1,
        title: "Advanced React Patterns",
        instructor: "Sarah Drasner",
        rating: 4.9,
        students: 1200,
        level: "Advanced",
        duration: "12h 30m",
        category: "Frontend",
        price: "$129",
        image: "bg-blue-500/10",
        icon: Code,
    },
    {
        id: 2,
        title: "Node.js Microservices",
        instructor: "Ryan Dahl",
        rating: 4.8,
        students: 850,
        level: "Intermediate",
        duration: "18h 15m",
        category: "Backend",
        price: "$149",
        image: "bg-green-500/10",
        icon: Database,
    },
    {
        id: 3,
        title: "Full Stack MERN Bootcamp",
        instructor: "Brad Traversy",
        rating: 5.0,
        students: 3500,
        level: "Beginner",
        duration: "45h 00m",
        category: "Full Stack",
        price: "$199",
        image: "bg-purple-500/10",
        icon: Globe,
    },
    {
        id: 4,
        title: "Docker & Kubernetes Mastery",
        instructor: "Bret Fisher",
        rating: 4.7,
        students: 600,
        level: "Advanced",
        duration: "10h 45m",
        category: "DevOps",
        price: "$159",
        image: "bg-cyan-500/10",
        icon: Layout,
    },
    {
        id: 5,
        title: "Flutter for Beginners",
        instructor: "Angela Yu",
        rating: 4.9,
        students: 2100,
        level: "Beginner",
        duration: "22h 30m",
        category: "Mobile",
        price: "$99",
        image: "bg-sky-500/10",
        icon: Smartphone,
    },
    {
        id: 6,
        title: "Next.js 14: The Complete Guide",
        instructor: "Maximilian Schwarzmüller",
        rating: 4.9,
        students: 1800,
        level: "Intermediate",
        duration: "16h 00m",
        category: "Frontend",
        price: "$139",
        image: "bg-gray-500/10",
        icon: Code,
    },
];

export default function CoursesPage() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredCourses = courses.filter((course) => {
        const matchesCategory = selectedCategory === "All" || course.category === selectedCategory;
        const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            course.instructor.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="min-h-screen bg-background relative overflow-hidden pb-24">
            {/* Background Effects */}
            <div className="absolute top-0 right-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-[-20%] left-[20%] w-[700px] h-[700px] bg-primary/5 rounded-full blur-[120px] opacity-40" />
            </div>

            {/* Header */}
            <div className="bg-background/50 backdrop-blur-sm border-b border-border/40 sticky top-16 z-10">
                <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
                    <FadeIn>
                        <h1 className="text-3xl font-bold tracking-tight mb-4">Explore Courses</h1>
                    </FadeIn>

                    <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                        {/* Search */}
                        <FadeIn delay={0.1} className="relative w-full md:w-96">
                            <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input
                                placeholder="Search courses, instructors..."
                                className="pl-10"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </FadeIn>

                        {/* Category Filters */}
                        <FadeIn delay={0.2} className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide">
                            {categories.map((category) => (
                                <Button
                                    key={category}
                                    variant={selectedCategory === category ? "default" : "outline"}
                                    size="sm"
                                    onClick={() => setSelectedCategory(category)}
                                    className="whitespace-nowrap rounded-full"
                                >
                                    {category}
                                </Button>
                            ))}
                        </FadeIn>
                    </div>
                </div>
            </div>

            {/* Course Grid */}
            <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredCourses.length > 0 ? (
                        filteredCourses.map((course) => (
                            <FadeIn key={course.id} className="group flex flex-col h-full rounded-2xl border border-border/50 bg-background/50 overflow-hidden hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                                {/* Course Thumbnail Placeholder */}
                                <div className={`aspect-video w-full ${course.image} flex items-center justify-center relative`}>
                                    <course.icon className="h-12 w-12 text-foreground/20 group-hover:scale-110 transition-transform duration-500" />
                                    <Badge className="absolute top-3 right-3 bg-background/80 backdrop-blur text-foreground hover:bg-background">
                                        {course.level}
                                    </Badge>
                                </div>

                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-xs font-medium text-primary uppercase tracking-wider">{course.category}</span>
                                        <div className="flex items-center text-amber-500 text-sm">
                                            <Star className="h-3 w-3 fill-current mr-1" />
                                            {course.rating}
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">{course.title}</h3>
                                    <p className="text-sm text-muted-foreground mb-4">by {course.instructor}</p>

                                    <div className="mt-auto flex items-center justify-between text-sm text-muted-foreground pt-4 border-t border-border/40">
                                        <div className="flex items-center">
                                            <Clock className="h-4 w-4 mr-1" />
                                            {course.duration}
                                        </div>
                                        <div className="flex items-center">
                                            <BookOpen className="h-4 w-4 mr-1" />
                                            {course.students} students
                                        </div>
                                    </div>

                                    <div className="mt-4 flex items-center justify-between">
                                        <span className="text-lg font-bold">{course.price}</span>
                                        <Button size="sm" variant="secondary" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                            Enroll Now
                                        </Button>
                                    </div>
                                </div>
                            </FadeIn>
                        ))
                    ) : (
                        <FadeIn className="col-span-full text-center py-24 text-muted-foreground">
                            <p className="text-lg">No courses found matching your criteria.</p>
                            <Button variant="link" onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }}>
                                Clear filters
                            </Button>
                        </FadeIn>
                    )}
                </StaggerContainer>
            </div>
        </div>
    );
}
