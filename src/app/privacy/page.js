import React from "react";

export const metadata = {
  title: "Privacy Policy | DailySmartSaving",
  description:
    "Learn how Daily Penny Guide collects, uses, and protects your personal information. Read our Privacy Policy for full details.",
};

const page = () => {
  return (
    <main className="bg-white text-gray-800">
      <div className="max-w-5xl mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold mb-2 text-center">Privacy Policy</h1>
        <p className="text-md text-gray-500 mb-6">
          Last Updated: <span className="italic">01-20-2026</span>
        </p>

        <p className="mb-4">
          Daily Penny Guide is committed to respecting your privacy and
          protecting your personal data. This Privacy Policy explains how Daily
          Smart Saving (“we”, “us”, or “our”) collects and uses information of our
          users when they visit our website,
          <strong> www.dailysmartsaving.com</strong>.
        </p>

        <p className="mb-6">
          By visiting the website or accessing any items of this website, you
          agree to accept the terms and conditions stated in this Privacy Policy.
          If you do not accept these terms, please do not use our website.
        </p>

        {/* 1. What Information We Collect */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            1. What Information We Collect
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <strong>Personal Information:</strong> Email address, name,
              address, phone number, and other details when you register or
              contact us.
            </li>
            <li>
              <strong>Technical Information:</strong> IP address, browser type
              and version, location, and operating system.
            </li>
          </ul>
        </section>

        {/* 2. How We Collect It */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">2. How We Collect It</h2>
          <p className="mb-2">We collect your information when you:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Register or log into our website</li>
            <li>Subscribe to our newsletter</li>
            <li>Open our emails</li>
            <li>Submit forms on our site</li>
            <li>Interact with us through social media</li>
          </ul>
        </section>

        {/* 3. Why We Collect It */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">3. Why We Collect It</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>To provide a better user experience</li>
            <li>To improve our website</li>
            <li>For personalized marketing and direct offers</li>
            <li>To respond to queries and support requests</li>
            <li>For website analytics</li>
            <li>For legal obligations and dispute resolution</li>
          </ul>
        </section>

        {/* 4. Disclosing the Information */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            4. Disclosing the Information
          </h2>
          <p className="mb-2">
            We share your information only when necessary:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>With staff and partners to deliver requested services</li>
            <li>With legal authorities when required by law</li>
            <li>To prevent, investigate, or defend against fraud or cyber incidents</li>
          </ul>
        </section>

        {/* 5. Who Do We Share Information With */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            5. Who Do We Share Information With
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Partners and vendors</li>
            <li>Affiliates for relevant offers and information</li>
            <li>Authorities when legally required</li>
          </ul>
        </section>

        {/* 6. Information Security */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">6. Information Security</h2>
          <p>
            We use secure servers and industry-standard encryption to protect
            your data. However, no online system is completely secure, and we
            cannot guarantee absolute security.
          </p>
        </section>

        {/* 7. Third-Party Advertising */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            7. Third-Party Advertising
          </h2>
          <p>
            We may display third-party advertisements that use cookies or
            tracking technologies to show relevant content based on browsing
            behavior.
          </p>
        </section>

        {/* 8. Links to Other Websites */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            8. Links to Other Websites
          </h2>
          <p>
            Our website may contain links to third-party websites. We are not
            responsible for the privacy practices or content of those websites.
          </p>
        </section>

        {/* 9. Limitation of Liability */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            9. Limitation of Liability
          </h2>
          <p>
            Daily Penny Guide shall not be liable for any damages, losses, or
            misuse of information due to third-party activities, hacking, or
            force majeure events.
          </p>
        </section>

        {/* 10. No Warranties */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">10. No Warranties</h2>
          <p>
            We make no warranties regarding accuracy, suitability, availability,
            or error-free operation of the website or its content.
          </p>
        </section>

        {/* 11. Spam and Sale of Information */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            11. Spam and Sale of Information
          </h2>
          <p>
            We do not spam users and never sell personal information to third
            parties.
          </p>
        </section>

        {/* 12. Indemnification */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">12. Indemnification</h2>
          <p>
            You agree to indemnify and hold Daily Penny Guide harmless from any
            claims, losses, damages, or legal expenses arising from misuse of the
            website or its services.
          </p>
        </section>

        {/* 13. Modification */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">13. Modification</h2>
          <p>
            We reserve the right to modify this Privacy Policy at any time. The
            updated version will always be available on this page.
          </p>
        </section>

        {/* 14. Disclaimer */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">14. Disclaimer</h2>
          <p>
            All information on this website is provided “as is.” Any reliance on
            the content is at your own risk. We may change or discontinue any
            part of the website at any time without notice.
          </p>
        </section>

        {/* 15. Changes to This Privacy Policy */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            15. Changes to This Privacy Policy
          </h2>
          <p>
            We may update this Privacy Policy at any time. Continued use of the
            website constitutes acceptance of the revised policy.
          </p>
        </section>

        {/* 16. Contact Us */}
        <section>
          <h2 className="text-xl font-semibold mb-2">16. Contact Us</h2>
          <p>
            If you have any questions regarding this Privacy Policy, contact us
            at{" "}
            <a
              href="mailto:contact@dailysmartsaving.com"
              className="text-blue-600 underline"
            >
              contact@gmail.com
            </a>
          </p>
        </section>
      </div>
    </main>
  );
};

export default page;
