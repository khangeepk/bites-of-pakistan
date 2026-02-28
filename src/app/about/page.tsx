export default function AboutPage() {
    return (
        <div className="min-h-[70vh] py-24 bg-background">
            <div className="container mx-auto px-4 max-w-4xl prose dark:prose-invert prose-orange lg:prose-lg">
                <h1>About BitesPK</h1>

                <p className="lead text-2xl font-medium text-muted-foreground mb-8">
                    We are on a mission to map the legendary tastes of Pakistan.
                </p>

                <h2>Our Story</h2>
                <p>BitesPK was founded to bridge the gap between incredible local street food (Dhabas) and hungry foodies looking for reliable recommendations. Whether it's a hidden Nihari spot in the walled city of Lahore or the best fast food chain in Islamabad, we bring it all to your fingertips.</p>

                <h2>Trust & Transparency</h2>
                <p>We pride ourselves on authentic user reviews. Look for the "Verified Visit" badge on reviews to know exactly what to expect. We also partner with local chefs to recommend the best cooking gear via our Affiliate recommendations, helping you recreate these magical dishes at home.</p>
            </div>
        </div>
    );
}
