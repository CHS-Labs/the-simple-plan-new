import { Info } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="flex-1 py-8 pb-24 min-h-screen bg-gradient-to-b from-background-light to-background-warm">
      <div className="max-w-md mx-auto px-4">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-brand-blue to-brand-orange rounded-full mb-4">
            <Info className="text-white" size={32} />
          </div>
          <h2 className="text-3xl font-bold text-text-primary mb-2">
            About The Simple Plan
          </h2>
          <p className="text-text-secondary">
            A design for sober living
          </p>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <video
              className="w-full rounded-lg"
              controls
              preload="metadata"
            >
              <source src="/Glen - test.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-text-primary mb-4">
              What is The Simple Plan?
            </h3>
            <div className="space-y-4 text-text-secondary">
              <p>
                The Simple Plan is a design for sober living based on spiritual principles found in the traditions of Recovery.
              </p>
              <p>
                It's built on a simple premise: when you notice a Character Defect, you can choose a Spiritual Principle instead.
              </p>
              <p>
                This isn't magic. It's practice. Each moment is an opportunity to choose differently.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-text-primary mb-4">
              How to Use It
            </h3>
            <div className="space-y-3">
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-brand-orange text-white rounded-full flex items-center justify-center font-bold text-sm">
                  1
                </div>
                <div>
                  <h4 className="font-medium text-text-primary mb-1">Notice</h4>
                  <p className="text-sm text-text-secondary">
                    When you feel a Character Defect arising, pause.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-brand-orange text-white rounded-full flex items-center justify-center font-bold text-sm">
                  2
                </div>
                <div>
                  <h4 className="font-medium text-text-primary mb-1">Choose</h4>
                  <p className="text-sm text-text-secondary">
                    Select the corresponding Spiritual Principle.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-brand-orange text-white rounded-full flex items-center justify-center font-bold text-sm">
                  3
                </div>
                <div>
                  <h4 className="font-medium text-text-primary mb-1">Practice</h4>
                  <p className="text-sm text-text-secondary">
                    Follow the 30-second practice. Breathe. Stay present.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-brand-orange text-white rounded-full flex items-center justify-center font-bold text-sm">
                  4
                </div>
                <div>
                  <h4 className="font-medium text-text-primary mb-1">Repeat</h4>
                  <p className="text-sm text-text-secondary">
                    Do it again. One moment at a time.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-background-warm border-l-4 border-brand-blue p-4 rounded">
            <p className="text-sm text-text-secondary">
              This is not a cure. This is not a replacement for your program. This is a tool to help you choose differently, one moment at a time.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
