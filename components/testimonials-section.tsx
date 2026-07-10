'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { testimonials } from '@/lib/site-data';

function makeFadeVariants(reduce: boolean | null) {
  const off = reduce === true;
  return {
    hidden: { opacity: off ? 1 : 0, y: off ? 0 : 24 },
    show: { opacity: 1, y: 0 },
  };
}

export function TestimonialsSection({ limit }: { limit?: number }) {
  const reduce = useReducedMotion();
  const fadeUp = makeFadeVariants(reduce);
  const items = limit ? testimonials.slice(0, limit) : testimonials;

  return (
    <div className="testimonialsGrid" role="list" aria-label="What professionals say about Selara">
      {items.map((item, index) => (
        <motion.blockquote
          key={`${item.role}-${index}`}
          role="listitem"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: reduce ? 0 : 0.5, delay: reduce ? 0 : index * 0.07 }}
          className="testimonialCard"
          whileHover={reduce ? undefined : { y: -3 }}
        >
          <p className="testimonialQuote">&ldquo;{item.quote}&rdquo;</p>
          <footer className="testimonialMeta">
            <cite className="testimonialRole">{item.role}</cite>
            <span className="testimonialContext">{item.context}</span>
          </footer>
        </motion.blockquote>
      ))}
    </div>
  );
}
