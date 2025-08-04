import type { Metadata } from 'next';
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Privacy Policy | Upteky AI Solutions",
  description: "Read Upteky's Privacy Policy to understand how we collect, use, disclose, and safeguard your personal information when you use our website and services.",
  openGraph: {
    title: "Privacy Policy | Upteky AI Solutions",
    description: "Upteky's commitment to your privacy.",
    images: [{ url: "/assets/og-image.png" }],
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="py-16 md:py-24 bg-background text-foreground">
      <FadeIn>
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-8">Privacy Policy</h1>
        <div className="prose prose-invert max-w-none text-muted-foreground space-y-6">
          <p><strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

          <p>
            Welcome to Upteky Solution Pvt. Ltd. ("Upteky", "we", "us", or "our"). We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website (the "Site") or use our services (the "Services"). Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site or use our services.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-8">1. Information We Collect</h2>
          <p>
            We may collect information about you in a variety of ways. The information we may collect on the Site includes:
          </p>
          <h3 className="text-xl font-semibold text-foreground/90">Personal Data</h3>
          <p>
            Personally identifiable information, such as your name, shipping address, email address, and telephone number, and demographic information, such as your age, gender, hometown, and interests, that you voluntarily give to us when you register with the Site or when you choose to participate in various activities related to the Site and our Services, such as online chat, message boards, or filling out contact or application forms.
          </p>
          <h3 className="text-xl font-semibold text-foreground/90">Derivative Data</h3>
          <p>
            Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.
          </p>
          <h3 className="text-xl font-semibold text-foreground/90">Data From Contact Forms & Applications</h3>
           <p>
             Information you provide when filling out contact forms, inquiry forms, or job applications. This may include your name, email address, phone number, company information, details about your inquiry, resume/CV, LinkedIn profile, and any other information you choose to provide.
           </p>
           <h3 className="text-xl font-semibold text-foreground/90">Financial Data</h3>
           <p>
             We currently do not collect financial information, such as data related to your payment method (e.g., valid credit card number, card brand, expiration date) when you purchase, order, return, or exchange services from the Site. All payment information would be stored by our payment processor. (Note: Adjust this section if you do collect financial data directly).
           </p>


          <h2 className="text-2xl font-semibold text-foreground mt-8">2. Use of Your Information</h2>
          <p>
            Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site or our Services to:
          </p>
           <ul>
              <li>Create and manage your account.</li>
              <li>Email you regarding your account or order.</li>
              <li>Respond to your inquiries, questions, and provide customer support.</li>
              <li>Process job applications and communicate with applicants.</li>
              <li>Send you a newsletter or other marketing communications (where permitted by law and with your consent).</li>
              <li>Request feedback and contact you about your use of the Site and Services.</li>
              <li>Resolve disputes and troubleshoot problems.</li>
              <li>Monitor and analyze usage and trends to improve your experience with the Site and Services.</li>
              <li>Notify you of updates to the Site and Services.</li>
              <li>Offer new products, services, and/or recommendations to you.</li>
              <li>Prevent fraudulent transactions, monitor against theft, and protect against criminal activity.</li>
              <li>Comply with legal and regulatory requirements.</li>
              <li>Perform other business activities as needed.</li>
           </ul>

          <h2 className="text-2xl font-semibold text-foreground mt-8">3. Disclosure of Your Information</h2>
          <p>
             We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
           </p>
           <h3 className="text-xl font-semibold text-foreground/90">By Law or to Protect Rights</h3>
           <p>
             If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation. This includes exchanging information with other entities for fraud protection and credit risk reduction.
           </p>
           <h3 className="text-xl font-semibold text-foreground/90">Third-Party Service Providers</h3>
           <p>
             We may share your information with third parties that perform services for us or on our behalf, including payment processing (if applicable), data analysis, email delivery, hosting services, customer service, and marketing assistance.
           </p>
           <h3 className="text-xl font-semibold text-foreground/90">Marketing Communications</h3>
           <p>
             With your consent, or with an opportunity for you to withdraw consent, we may share your information with third parties for marketing purposes, as permitted by law.
           </p>
           <h3 className="text-xl font-semibold text-foreground/90">Business Transfers</h3>
           <p>
             We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.
           </p>
           <h3 className="text-xl font-semibold text-foreground/90">Affiliates</h3>
           <p>
             We may share your information with our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include our parent company and any subsidiaries, joint venture partners or other companies that we control or that are under common control with us.
           </p>
           <h3 className="text-xl font-semibold text-foreground/90">Other Third Parties</h3>
           <p>
             We may share your information with advertisers and investors for the purpose of conducting general business analysis. We may also share your information with such third parties for marketing purposes, as permitted by law, with your consent.
           </p>


          <h2 className="text-2xl font-semibold text-foreground mt-8">4. Tracking Technologies</h2>
          <h3 className="text-xl font-semibold text-foreground/90">Cookies and Web Beacons</h3>
          <p>
            We may use cookies, web beacons, tracking pixels, and other tracking technologies on the Site to help customize the Site and improve your experience. When you access the Site, your personal information is not collected through the use of tracking technology. Most browsers are set to accept cookies by default. You can remove or reject cookies, but be aware that such action could affect the availability and functionality of the Site. You may not decline web beacons. However, they can be rendered ineffective by declining all cookies or by modifying your browser's settings to notify you each time a cookie is tendered, permitting you to accept or decline cookies on an individual basis.
          </p>
          <h3 className="text-xl font-semibold text-foreground/90">Analytics</h3>
          <p>
            We may partner with selected third-party vendors, such as Google Analytics, to allow tracking technologies and remarketing services on the Site through the use of first-party cookies and third-party cookies, to, among other things, analyze and track users' use of the Site, determine the popularity of certain content, and better understand online activity. By accessing the Site, you consent to the collection and use of your information by these third-party vendors. You are encouraged to review their privacy policy and contact them directly for responses to your questions. We do not transfer personal information to these third-party vendors.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-8">5. Third-Party Websites</h2>
          <p>
            The Site may contain links to third-party websites and applications of interest, including advertisements and external services, that are not affiliated with us. Once you have used these links to leave the Site, any information you provide to these third parties is not covered by this Privacy Policy, and we cannot guarantee the safety and privacy of your information. Before visiting and providing any information to any third-party websites, you should inform yourself of the privacy policies and practices (if any) of the third party responsible for that website, and should take those steps necessary to, in your discretion, protect the privacy of your information. We are not responsible for the content or privacy and security practices and policies of any third parties, including other sites, services or applications that may be linked to or from the Site.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-8">6. Security of Your Information</h2>
          <p>
            We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse. Any information disclosed online is vulnerable to interception and misuse by unauthorized parties. Therefore, we cannot guarantee complete security if you provide personal information.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-8">7. Policy for Children</h2>
          <p>
            We do not knowingly solicit information from or market to children under the age of 13. If you become aware of any data we have collected from children under age 13, please contact us using the contact information provided below.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-8">8. Controls for Do-Not-Track Features</h2>
          <p>
            Most web browsers and some mobile operating systems include a Do-Not-Track (“DNT”) feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. No uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this Privacy Policy.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-8">9. Your Privacy Rights</h2>
          <p>
            Depending on your location, you may have certain rights regarding your personal information. These may include the right to access, correct, delete, or restrict the processing of your personal data. To exercise these rights, please contact us using the details below. We will respond to your request in accordance with applicable laws.
          </p>
          <p>
            Residents of certain jurisdictions, such as the European Economic Area (EEA) or California, may have additional rights. For example, if you are an EEA resident, you may have the right to lodge a complaint with a supervisory authority.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-8">10. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. The updated version will be indicated by an updated "Last Updated" date and the updated version will be effective as soon as it is accessible. We encourage you to review this privacy policy frequently to be informed of how we are protecting your information.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-8">11. Contact Us</h2>
          <p>
            If you have questions or comments about this Privacy Policy, please contact us at:
          </p>
          <p>
            Upteky Solution Pvt. Ltd.<br />
            C-329 Siddhivinayak Tower, S.G. Highway, Ahmedabad, Gujarat - 380051<br />
            India<br />
            <a href="mailto:hello@upteky.com" className="text-accent hover:underline">hello@upteky.com</a>
          </p>
        </div>
      </div>
      </FadeIn>
    </div>
  );
}
