import React from 'react';

const TermsPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md mt-8 mb-8">
      <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-8">
        Terms & Conditions
      </h1>

      <div className="prose dark:prose-invert max-w-none">
        <p>
          Please read these Terms and Conditions ("Terms", "Terms and Conditions") carefully before using our Hangman Game ("the Game").
          Your access to and use of the Game is conditioned on your acceptance of and compliance with these Terms.
        </p>

        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing or using the Game, you agree to be bound by these Terms. 
          If you disagree with any part of the terms, then you may not access or use the Game.
        </p>

        <h2>2. Eligibility</h2>
        <p>
          You must be at least 13 years old to access and use the Game. By using the Game, you represent and warrant that you meet the eligibility requirements.
        </p>

        <h2>3. Game Usage</h2>
        <p>
          The Game is provided solely for your personal, non-commercial enjoyment.
          You agree not to:
        </p>
        <ul>
          <li>Copy, modify, distribute, sell, or lease any part of the Game without our prior written consent</li>
          <li>Reverse engineer or attempt to extract the source code of the Game</li>
          <li>Use the Game in any way that is unlawful or harms us or other users</li>
        </ul>

        <h2>4. User Conduct</h2>
        <p>
          You agree to use the Game only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit others' use of the Game.
          You may not upload viruses or malicious code, or engage in activities that could disable, overburden, or impair the proper functioning of the Game.
        </p>

        <h2>5. Intellectual Property</h2>
        <p>
          All intellectual property rights in the Game and its content (including but not limited to text, graphics, logos, and software) are owned by or licensed to us.
          Unauthorized use may violate copyright, trademark, and other laws.
        </p>

        <h2>6. Disclaimer of Warranties</h2>
        <p>
          The Game is provided "as is" and "as available" without warranties of any kind, whether express or implied.
          We disclaim all warranties, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
        </p>

        <h2>7. Limitation of Liability</h2>
        <p>
          In no event shall we be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues,
          whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from:
        </p>
        <ul>
          <li>Your use of or inability to use the Game</li>
          <li>Any unauthorized access to or use of our servers and/or any personal information stored therein</li>
          <li>Any bugs, viruses, or similar issues transmitted through the Game</li>
        </ul>

        <h2>8. Termination</h2>
        <p>
          We may suspend or terminate your access to the Game immediately, without prior notice or liability, for any reason, including if you breach these Terms.
          Upon termination, your right to use the Game will immediately cease.
        </p>

        <h2>9. Changes to Terms</h2>
        <p>
          We reserve the right, at our sole discretion, to modify or replace these Terms at any time.
          It is your responsibility to review these Terms periodically. Your continued use of the Game after any changes constitutes acceptance of the new Terms.
        </p>

        <h2>10. Governing Law</h2>
        <p>
          These Terms shall be governed and construed in accordance with the laws of [Your Country/State], without regard to its conflict of law provisions.
        </p>

        <h2>11. Contact Us</h2>
        <p>
          If you have any questions about these Terms, please contact us at:
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

export default TermsPage;
