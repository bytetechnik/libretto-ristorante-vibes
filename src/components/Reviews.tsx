import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Reviews = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  // Sample reviews based on typical Google reviews for cafes
  const reviews = [
    {
      name: "Maria S.",
      rating: 5,
      text: "Absolutely wonderful café! The atmosphere is so cozy and the coffee is exceptional. Their kaiserschmarrn is a must-try. Perfect spot for a relaxing afternoon.",
      date: "2 weeks ago"
    },
    {
      name: "Thomas M.",
      rating: 5,
      text: "Best coffee in Frankfurt's old town! The location near the library is perfect, and the service is always friendly. Love coming here for my morning espresso.",
      date: "1 month ago"
    },
    {
      name: "Anna K.",
      rating: 4,
      text: "Great value for money and excellent torte selection. The terrace is lovely in summer. Staff is very attentive and the atmosphere is authentic.",
      date: "3 weeks ago"
    },
    {
      name: "Michael R.",
      rating: 5,
      text: "Hidden gem in Frankfurt! The interior design is beautiful and the ice cream is fantastic. Perfect place to unwind after visiting the nearby sights.",
      date: "1 week ago"
    },
    {
      name: "Sophie L.",
      rating: 4,
      text: "Lovely café with great atmosphere. The breakfast options are varied and delicious. Service could be a bit faster during peak hours, but overall excellent experience.",
      date: "2 months ago"
    },
    {
      name: "David H.",
      rating: 5,
      text: "Outstanding quality! From the fresh pastries to the perfectly brewed coffee, everything is top-notch. The location in the old town adds to the charm.",
      date: "3 weeks ago"
    }
  ];

  const averageRating = 4.4;
  const totalReviews = 538;

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-cream/50 to-white">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-coffee mb-6">
            What Our Guests
            <span className="bg-gradient-gold bg-clip-text text-transparent ml-3">
              Say
            </span>
          </h2>
          
          {/* Rating Summary */}
          <div className="flex items-center justify-center space-x-6 mb-6">
            <div className="flex items-center space-x-2">
              <span className="text-3xl font-bold text-coffee">{averageRating}</span>
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-6 h-6 ${
                      i < Math.floor(averageRating) 
                        ? 'fill-italian-gold text-italian-gold' 
                        : i < averageRating 
                        ? 'fill-italian-gold/50 text-italian-gold/50' 
                        : 'text-cappuccino/30'
                    }`} 
                  />
                ))}
              </div>
            </div>
            <div className="h-8 w-px bg-cappuccino/30"></div>
            <span className="text-coffee/70 font-inter">
              {totalReviews} Google Reviews
            </span>
          </div>
          
          <p className="font-crimson text-xl text-coffee/80 italic max-w-3xl mx-auto">
            Stories from our libretto of memorable experiences
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <Card 
              key={index}
              className={`group bg-white/80 backdrop-blur-sm border-cappuccino/20 shadow-elegant hover:shadow-2xl transition-all duration-700 transform hover:scale-105 ${
                index % 2 === 0 ? 'hover:rotate-1' : 'hover:-rotate-1'
              } ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-20 opacity-0'
              }`}
              style={{ 
                transitionDelay: `${index * 150}ms` 
              }}
            >
              <CardContent className="p-6 relative">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                  <Quote className="w-8 h-8 text-italian-gold" />
                </div>
                
                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-4 h-4 ${
                        i < review.rating 
                          ? 'fill-italian-gold text-italian-gold' 
                          : 'text-cappuccino/30'
                      }`} 
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="font-crimson text-coffee/90 text-sm leading-relaxed mb-4 line-clamp-4">
                  "{review.text}"
                </p>

                {/* Reviewer Info */}
                <div className="flex items-center justify-between border-t border-cappuccino/20 pt-4">
                  <div>
                    <h4 className="font-inter font-semibold text-coffee text-sm">
                      {review.name}
                    </h4>
                    <p className="font-inter text-coffee/60 text-xs">
                      {review.date}
                    </p>
                  </div>
                  
                  {/* Google Badge */}
                  <div className="text-xs text-coffee/50 font-inter">
                    Google
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute bottom-2 left-2 w-1 h-1 bg-italian-gold rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100"></div>
                <div className="absolute top-2 left-2 w-1 h-1 bg-warm-gold rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 delay-200"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-12 transition-all duration-1000 delay-500 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <Card className="inline-block bg-gradient-to-r from-italian-gold/10 to-warm-gold/10 border-cappuccino/20 shadow-elegant">
            <CardContent className="p-6">
              <h3 className="font-playfair text-xl font-bold text-coffee mb-2">
                Share Your Story
              </h3>
              <p className="font-crimson text-coffee/80 mb-4">
                Help us write new pages in our libretto of experiences
              </p>
              <a 
                href="https://www.google.com/maps/place/Caf%C3%A9+Libretto/@50.1133164,8.6818361,17z/data=!4m8!3m7!1s0x47bd0ea5b1608a9b:0x2debb2591f7a58d2!8m2!3d50.113313!4d8.684411!9m1!1b1!16s%2Fg%2F1tp2zhlf?entry=ttu&g_ep=EgoyMDI1MDcwNy4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center font-inter font-medium text-italian-gold hover:text-warm-gold transition-colors duration-300"
              >
                Leave a Google Review
                <Star className="w-4 h-4 ml-2" />
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Reviews;