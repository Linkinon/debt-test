import React from "react";

export const metadata = {
  title: "Terms of Use | DailySmartSaving",
  description:
    "Read the Terms of Use for dailysmartsaving.com. Learn about eligibility, affiliate disclosure, user responsibilities, and limitations of liability.",
};

const page = () => {
  return (
    <main className="bg-white text-gray-800">
      <div className="max-w-5xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-2">Terms of Use</h1>
        <p className="text-sm text-gray-500 mb-6">
          Last Updated: <span className="italic">01-20-2026</span>
        </p>

        <p className="mb-4">
          Welcome to <strong>dailysmartsaving.com</strong> (“Website”). The Website
          is owned and operated by <strong>Linkinon Inc.</strong>, located at
          1007 N Orange St. 4th Floor Ste 1382, Wilmington, Delaware 19801,
          United States.
        </p>

        <p className="mb-6">
          By accessing or using this Website, you acknowledge that you have read,
          understood, and agree to be bound by these Terms of Use and our Privacy
          Policy. If you do not agree, please stop using the Website immediately.
        </p>

        {/* 1. Eligibility */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">1. Eligibility</h2>
          <p>
            Access to this Website is strictly limited to individuals 18 years of
            age or older. By using this Website, you confirm that you meet this
            requirement.
          </p>
        </section>

        {/* 2. Scope of Service */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">2. Scope of Service</h2>
          <p className="mb-2">
            dailysmartsaving.com is an information and referral website. We:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Do not provide financial, insurance, legal, or professional advice.</li>
            <li>Do not offer or sell products directly.</li>
            <li>
              May refer users to third-party providers, advertisers, or service
              partners.
            </li>
            <li>
              All information on this site is general and should not be taken as
              personal advice.
            </li>
          </ul>
        </section>

        {/* 3. Affiliate Disclosure */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">3. Affiliate Disclosure</h2>
          <p className="mb-2">
            This Website participates in affiliate partnerships. This means:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              We may receive compensation when users click links or complete
              actions on partner websites.
            </li>
            <li>We do not represent all providers in any category.</li>
            <li>
              We do not guarantee availability, suitability, or results from any
              third-party service.
            </li>
          </ul>
          <p className="mt-2 font-medium">
            This Website is a paid advertisement / referral website, not a news
            article, consumer report, or advisory publication.
          </p>
        </section>

        {/* 4. User Responsibilities */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">4. User Responsibilities</h2>
          <p className="mb-2">You agree not to:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Use the Website for unlawful purposes</li>
            <li>Copy, reuse, or distribute any content without written permission</li>
            <li>Attempt to interfere with the Website’s functionality</li>
            <li>Use automated tools (bots, scrapers, crawlers) without authorization</li>
          </ul>
        </section>

        {/* 5. Intellectual Property */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">5. Intellectual Property</h2>
          <p>
            All content on this Website, including but not limited to text,
            layout, logos, graphics, and design, is the property of Linkinon Inc.
            or licensed partners. Unauthorized copying, distribution, or
            commercial use is strictly prohibited. Violation of our intellectual
            property rights may result in legal action and financial penalties
            (liquidated damages).
          </p>
        </section>

        {/* 6. Third-Party Links */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">6. Third-Party Links</h2>
          <p className="mb-2">
            The Website contains links to third-party websites. We:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Do not control these external pages</li>
            <li>Are not responsible for their content, policies, or practices</li>
            <li>Encourage you to review their terms</li>
          </ul>
          <p className="mt-2">
            Your interactions with third-party websites are solely between you
            and the provider.
          </p>
        </section>

        {/* 7. Changes to the Terms */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">7. Changes to the Terms</h2>
          <p>
            Linkinon Inc. reserves the right to update or modify these Terms at
            any time without prior notice. Continued use of the Website
            constitutes acceptance of the updated Terms.
          </p>
        </section>

        {/* 8. Limitation of Liability */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">8. Limitation of Liability</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>The Website is provided “as is” without warranties of any kind</li>
            <li>
              We are not liable for direct, indirect, incidental, or consequential
              damages
            </li>
            <li>We do not guarantee uninterrupted or error-free operation</li>
          </ul>
        </section>

        {/* 9. Contact Information */}
        <section>
          <h2 className="text-xl font-semibold mb-2">9. Contact Information</h2>
          <p className="mb-1">
            For questions about these Terms of Use:
          </p>
          <p>Email: <a href="mailto:adops@linkinon.com" className="text-blue-600 underline">adops@linkinon.com</a></p>
          <p>
            Address: 1007 N Orange St. 4th Floor Ste 1382, Wilmington, Delaware
            19801, United States.
          </p>
        </section>
      </div>
    </main>
  );
};

export default page;
