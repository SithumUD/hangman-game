import React from 'react';

const PrivacyPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md mt-8 mb-8">
      <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-8">
        Privacy Policy
      </h1>

      <div className="prose dark:prose-invert max-w-none">
        <p>
          Welcome to our Privacy Policy page! Your privacy is critically important to us.
        </p>

        <h2>1. Information We Collect</h2>
        <p>
          We collect limited information to provide and improve our game experience. This includes:
        </p>
        <ul>
          <li>Non-personal data such as game statistics and user preferences</li>
          <li>Device type and basic system information (e.g., browser type, operating system)</li>
        </ul>
        <p>
          No personally identifiable information (like name, email, or address) is collected without your explicit consent.
        </p>

        <h2>2. How We Use Information</h2>
        <p>
          We use the collected information to:
        </p>
        <ul>
          <li>Maintain and improve gameplay experience</li>
          <li>Analyze gameplay patterns to enhance user satisfaction</li>
          <li>Ensure secure and personalized access to features</li>
        </ul>
        <p>
          We do not sell, rent, or share your personal data with third parties.
        </p>

        <h2>3. Cookies and Local Storage</h2>
        <p>
          Our game may use cookies and local storage technologies to:
        </p>
        <ul>
          <li>Store game progress and settings locally on your device</li>
          <li>Enhance loading speed and responsiveness</li>
        </ul>
        <p>
          You can control or disable cookies through your browser settings, although this may affect gameplay functionality.
        </p>

        <h2>4. Data Security</h2>
        <p>
          We implement reasonable technical and administrative safeguards to protect your data.
          However, please note that no method of transmission over the Internet or method of electronic storage is 100% secure.
        </p>

        <h2>5. Third-Party Links</h2>
        <p>
          Our game or website may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites. We encourage you to read the privacy policies of any external websites you visit.
        </p>

        <h2>6. Children's Privacy</h2>
        <p>
          Our game is not intended for children under the age of 13. We do not knowingly collect personal information from children.
          If you believe we have inadvertently collected such information, please contact us immediately so that we can take appropriate steps to delete it.
        </p>

        <h2>7. Changes to This Privacy Policy</h2>
        <p>
          We may update our Privacy Policy from time to time. Any changes will be effective immediately upon posting on this page.
          Your continued use of the Game following the posting of changes constitutes your acceptance of those changes.
        </p>

        <h2>8. Contact Us</h2>
        <p>
          If you have any questions or concerns about this Privacy Policy or our data practices, please feel free to contact us at:
        </p>
        <ul>
          <li>Email: sithumudayangaofficial@gmail.com</li>
        </ul>

        <p className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default PrivacyPage;
