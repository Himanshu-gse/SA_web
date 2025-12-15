import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is the duration of the courses?",
    answer: "Our courses range from 1 month to 2 months depending on the program. We offer Basic 2D (1 month), Full Course 2D+3D (2 months), Interior CAD (1.5 months), and Architecture/Civil CAD (2 months)."
  },
  {
    question: "Do students get practice files?",
    answer: "Yes! All students receive comprehensive practice files, project templates, and reference materials to practice at home and build their portfolio."
  },
  {
    question: "Is certification provided?",
    answer: "Absolutely. Upon successful completion of the course, students receive an industry-recognized certificate that validates their AutoCAD skills."
  },
  {
    question: "Can beginners join without any experience?",
    answer: "Yes, our courses are designed for beginners. We start from the basics and gradually build up to advanced concepts. No prior CAD experience is required."
  },
  {
    question: "Are job opportunities discussed?",
    answer: "Yes, we provide career guidance and discuss various job opportunities in the CAD field including architectural firms, interior design companies, and civil engineering consultancies."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground text-lg">
            Got questions? We've got answers.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className="border border-border rounded-xl overflow-hidden bg-card hover:shadow-md transition-all"
            >
              <button
                className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-muted/30 transition-colors"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="font-semibold text-foreground text-lg">{faq.question}</span>
                <ChevronDown 
                  className={`text-primary flex-shrink-0 transition-transform ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                  size={20}
                />
              </button>
              
              {openIndex === i && (
                <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
