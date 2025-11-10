import { BookOpen, Download, ExternalLink } from 'lucide-react';

export default function BookPage() {
  return (
    <main className="flex-1 py-8 pb-24 min-h-screen bg-gradient-to-b from-background-light to-background-warm">
      <div className="max-w-md mx-auto px-4">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-brand-blue to-brand-orange rounded-full mb-4">
            <BookOpen className="text-white" size={32} />
          </div>
          <h2 className="text-3xl font-bold text-text-primary mb-2">
            The Simple Plan Book
          </h2>
          <p className="text-text-secondary">
            A design for sober living
          </p>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="aspect-[3/4] bg-gradient-to-br from-brand-orange to-brand-sand rounded-lg mb-6 flex items-center justify-center">
              <div className="text-center text-white p-8">
                <h3 className="font-display text-4xl lowercase mb-2">
                  the simple plan
                </h3>
                <p className="text-sm tracking-wider uppercase opacity-90">
                  A Design for Sober Living
                </p>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-text-primary mb-3">
              Get the Book
            </h3>
            <p className="text-text-secondary mb-6">
              The complete guide with all 16 character pairs, detailed practices, and guidance for building a sustainable sober life.
            </p>

            <div className="space-y-3">
              <div>
                <button className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-brand-orange to-brand-sand text-white py-3 rounded-lg font-medium hover:shadow-lg transition focus:outline-none focus:ring-4 focus:ring-focus-ring">
                  <Download size={20} />
                  Read Inside the App
                </button>
                <p className="text-center text-xs text-text-secondary mt-2">
                  Interactive flipbook experience
                </p>
              </div>

              <button className="w-full flex items-center justify-center gap-3 border-2 border-brand-orange text-brand-orange py-3 rounded-lg font-medium hover:bg-background-warm transition focus:outline-none focus:ring-4 focus:ring-focus-ring">
                <ExternalLink size={20} />
                Buy the Physical Book
              </button>
            </div>
          </div>

          <div className="bg-background-warm border-l-4 border-brand-blue p-4 rounded">
            <p className="text-sm text-text-secondary">
              The book includes expanded practices, journaling prompts, and guidance for daily living.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h4 className="font-semibold text-text-primary mb-3">
              What's Inside
            </h4>
            <ul className="space-y-2 text-text-secondary text-sm">
              <li className="flex items-start gap-2">
                <span className="text-brand-orange mt-1">•</span>
                <span>All 16 Character Defect and Spiritual Principle pairs</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-orange mt-1">•</span>
                <span>Detailed guidance for each practice</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-orange mt-1">•</span>
                <span>Daily reflection exercises</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-orange mt-1">•</span>
                <span>Space for personal journaling</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-orange mt-1">•</span>
                <span>Practical wisdom for sustainable Recovery</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
