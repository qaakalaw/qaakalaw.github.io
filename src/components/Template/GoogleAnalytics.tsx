import { GoogleAnalytics as NextGoogleAnalytics } from '@next/third-parties/google';

const GoogleAnalytics: React.FC = () => {
  const gaId = process.env.NEXT_PUBLIC_GA_TRACKING_ID;

  if (!gaId) {
    return null; // Don't render GA if ID is missing
  }

  return <NextGoogleAnalytics gaId={gaId} />; // Automatically tracks pageviews
};

export default GoogleAnalytics;
