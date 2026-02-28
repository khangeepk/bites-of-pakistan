"use client";

import { Star, CheckCircle, Image as ImageIcon, Send } from "lucide-react";
import { useState } from "react";

interface Review {
    id: string;
    author: string;
    rating: number;
    comment: string;
    date: string;
    isVerified: boolean;
    photos?: string[];
}

const MOCK_REVIEWS: Review[] = [
    {
        id: "r1",
        author: "Ali Raza",
        rating: 5,
        comment: "Absolutely the best Nihari in town! The meat was tender and the spice level was perfect. Highly recommend ordering early before it runs out.",
        date: "2 days ago",
        isVerified: true,
        photos: ["https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=600&auto=format&fit=crop"]
    },
    {
        id: "r2",
        author: "Sara Ahmed",
        rating: 4,
        comment: "Great taste, but the delivery took a bit longer than expected. Will order again though.",
        date: "1 week ago",
        isVerified: true,
    },
    {
        id: "r3",
        author: "Usman K.",
        rating: 5,
        comment: "Amazing experience. The packaging was top-notch and the food was piping hot.",
        date: "2 weeks ago",
        isVerified: false,
    }
];

export function ReviewsSection({ restaurantId }: { restaurantId: string }) {
    const [rating, setRating] = useState(5);
    const [comment, setComment] = useState("");
    const [reviews, setReviews] = useState<Review[]>(MOCK_REVIEWS);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!comment.trim()) return;

        setIsSubmitting(true);

        // Mock API Call
        setTimeout(() => {
            const newReview: Review = {
                id: `r${Date.now()}`,
                author: "You (Guest)",
                rating,
                comment,
                date: "Just now",
                isVerified: false // Needs real order verification in production
            };

            setReviews([newReview, ...reviews]);
            setComment("");
            setRating(5);
            setIsSubmitting(false);
        }, 800);
    };

    return (
        <div className="mt-16 pt-12 border-t border-border">
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-4xl font-extrabold tracking-tight">Customer Reviews</h2>
                <div className="flex items-center bg-primary/10 text-primary px-4 py-2 rounded-xl font-bold text-lg">
                    <Star className="w-5 h-5 fill-current mr-2" />
                    4.9 <span className="text-primary/70 font-medium ml-2">({reviews.length} Reviews)</span>
                </div>
            </div>

            {/* Write a Review Form */}
            <div className="bg-card p-6 md:p-8 rounded-3xl border border-border shadow-sm mb-12">
                <h3 className="text-xl font-bold mb-4">Write a Review</h3>
                <form onSubmit={handleSubmit}>
                    <div className="flex items-center gap-2 mb-4">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <button
                                key={star}
                                type="button"
                                onClick={() => setRating(star)}
                                className="focus:outline-none transition-transform hover:scale-110"
                            >
                                <Star className={`w-8 h-8 ${star <= rating ? 'fill-yellow-500 text-yellow-500' : 'text-muted-foreground'}`} />
                            </button>
                        ))}
                    </div>

                    <textarea
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        placeholder="Share your experience (taste, delivery, packaging)..."
                        className="w-full bg-muted/50 border border-border rounded-xl px-4 py-3 outline-none focus:border-primary focus:bg-background transition-colors min-h-[120px] mb-4 text-foreground resize-none"
                    />

                    <div className="flex items-center justify-between">
                        <button
                            type="button"
                            className="flex items-center text-muted-foreground hover:text-primary transition-colors font-medium text-sm"
                        >
                            <ImageIcon className="w-5 h-5 mr-2" /> Add Photos
                        </button>

                        <button
                            type="submit"
                            disabled={isSubmitting || !comment.trim()}
                            className="bg-primary hover:bg-primary/90 disabled:opacity-50 text-primary-foreground px-6 py-2.5 rounded-xl font-bold transition-all shadow-md flex items-center gap-2"
                        >
                            {isSubmitting ? "Posting..." : <><Send className="w-4 h-4" /> Post Review</>}
                        </button>
                    </div>
                </form>
            </div>

            {/* Reviews List */}
            <div className="space-y-6">
                {reviews.map((review) => (
                    <div key={review.id} className="bg-background p-6 rounded-2xl border border-border">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <div className="flex items-center gap-3 mb-1">
                                    <h4 className="font-bold text-lg">{review.author}</h4>
                                    {review.isVerified && (
                                        <span className="flex items-center text-xs font-bold text-green-600 bg-green-100 dark:bg-green-900/30 dark:text-green-500 px-2.5 py-1 rounded-full border border-green-200 dark:border-green-800">
                                            <CheckCircle className="w-3.5 h-3.5 mr-1" /> Verified Visit
                                        </span>
                                    )}
                                </div>
                                <span className="text-sm text-muted-foreground">{review.date}</span>
                            </div>
                            <div className="flex items-center gap-1 bg-muted px-2.5 py-1 rounded-lg border border-border">
                                <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                                <span className="font-bold text-sm">{review.rating}</span>
                            </div>
                        </div>

                        <p className="text-foreground leading-relaxed text-[15px]">{review.comment}</p>

                        {review.photos && review.photos.length > 0 && (
                            <div className="mt-4 flex gap-3 overflow-x-auto pb-2 hide-scrollbar">
                                {review.photos.map((photo, index) => (
                                    <div
                                        key={index}
                                        className="w-24 h-24 rounded-lg bg-cover bg-center shrink-0 border border-border cursor-pointer hover:opacity-90 transition-opacity"
                                        style={{ backgroundImage: `url(${photo})` }}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
