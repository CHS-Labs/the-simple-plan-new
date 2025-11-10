import { Handshake, Heart, Mail, Coffee } from 'lucide-react';

export default function SupportPage() {
  const handleShare = async () => {
    const shareData = {
      title: 'The Simple Plan',
      text: 'A tool that helped me choose differently:',
      url: window.location.origin
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        // User cancelled the share - do nothing
      }
    } else {
      // Fallback for browsers that don't support Web Share API
      try {
        await navigator.clipboard.writeText(window.location.origin);
        alert('Link copied to clipboard!');
      } catch (err) {
        alert('Unable to share. Please copy this link manually: ' + window.location.origin);
      }
    }
  };

  return (
    <main className="flex-1 py-8 pb-24 min-h-screen bg-gradient-to-b from-background-light to-background-warm">
      <div className="max-w-md mx-auto px-4">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-brand-orange to-primary-gold rounded-full mb-4">
            <Handshake className="text-white" size={32} />
          </div>
          <h2 className="text-3xl font-bold text-text-primary mb-2">
            Support
          </h2>
          <p className="text-text-secondary">
            Help keep this tool free and accessible
          </p>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-start gap-4 mb-6">
              <Heart className="text-brand-orange flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                  This Tool is Free
                </h3>
                <p className="text-text-secondary text-sm">
                  The Simple Plan will always be free to use. No ads, no paywalls, no tracking. Just a simple tool for choosing differently.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-text-primary mb-4">
              Ways to Support
            </h3>

            <p className="text-text-secondary text-sm mb-4">
              Someone helped you today. Your $3 keeps this app free for someone who needs it most.
            </p>

            <div className="space-y-4">
              <div>
                <button className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-brand-orange to-brand-sand text-white py-3 px-4 rounded-lg font-medium hover:shadow-lg transition focus:outline-none focus:ring-4 focus:ring-focus-ring">
                  <Heart size={20} />
                  <span>Pass It Forward ($3)</span>
                </button>
                <p className="text-center text-xs text-text-secondary mt-2">
                  Your donation sponsors access for those in recovery who can't afford it.
                </p>
              </div>

              <button className="w-full flex items-center gap-3 border-2 border-brand-blue text-brand-blue py-3 px-4 rounded-lg font-medium hover:bg-background-warm transition focus:outline-none focus:ring-4 focus:ring-focus-ring">
                <Heart size={20} />
                <span>Become a supporter</span>
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-text-primary mb-4">
              Share The Simple Plan
            </h3>
            <p className="text-text-secondary mb-4 text-sm">
              The best way to support this tool is to share it with someone who needs it. Send them a link, tell them about it, or just let them know there's help available.
            </p>
            <button
              onClick={handleShare}
              className="w-full flex items-center justify-center gap-3 bg-background-warm border-2 border-brand-orange text-brand-orange py-3 rounded-lg font-medium hover:bg-brand-orange hover:text-white transition focus:outline-none focus:ring-4 focus:ring-focus-ring"
            >
              Share with others
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-text-primary mb-4">
              Get in Touch
            </h3>
            <p className="text-text-secondary mb-4 text-sm">
              Have feedback, suggestions, or just want to share your story? We'd love to hear from you.
            </p>
            <button className="w-full flex items-center justify-center gap-3 border-2 border-text-secondary text-text-secondary py-3 rounded-lg font-medium hover:border-text-primary hover:text-text-primary transition focus:outline-none focus:ring-4 focus:ring-focus-ring">
              <Mail size={20} />
              Contact us
            </button>
          </div>

          <div className="bg-background-warm border-l-4 border-primary-gold p-4 rounded">
            <p className="text-sm text-text-secondary">
              Your support helps keep The Simple Plan free and accessible to everyone who needs it.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
