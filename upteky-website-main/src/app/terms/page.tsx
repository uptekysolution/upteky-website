import type { Metadata } from 'next';
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Terms of Service | Upteky AI Solutions",
  description: "Review the Terms of Service for using Upteky's website, products, and AI solutions. Understand your rights and obligations.",
  openGraph: {
    title: "Terms of Service | Upteky AI Solutions",
    description: "Upteky's terms and conditions for service usage.",
    images: [{ url: "/assets/og-image.png" }],
  },
};

export default function TermsOfServicePage() {
  const lastUpdatedDate = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  const companyName = "Upteky Solution Pvt. Ltd.";
  const companyAddress = "C-329 Siddhivinayak Tower, S.G. Highway, Ahmedabad, Gujarat - 380051, India";
  const companyEmail = "legal@upteky.com";
  const websiteURL = "www.upteky.com"; // Replace with your actual website URL if different

  return (
    <div className="py-16 md:py-24 bg-background text-foreground">
      
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-8">Terms of Service</h1>
        <div className="max-w-none text-foreground/90 space-y-6">
           <p><strong>Last Updated:</strong> <span suppressHydrationWarning>{lastUpdatedDate}</span></p>

           <p>
             Welcome to {companyName} ("Upteky", "we", "us", or "our"). These Terms of Service ("Terms") govern your access to and use of our website {websiteURL} (the "Site") and any services, content, features, or applications offered by Upteky (collectively, the "Services").
           </p>
           <p>
             By accessing or using the Services, you agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms or the Privacy Policy, you may not access or use the Services.
           </p>

           <h2 className="text-2xl font-semibold text-foreground mt-8">1. Use of Services</h2>
           <h3 className="text-xl font-semibold text-foreground/90">Eligibility</h3>
           <p>You must be at least 18 years old to use our Services. By agreeing to these Terms, you represent and warrant to us that you are at least 18 years old.</p>
           
           <h3 className="text-xl font-semibold text-foreground/90">Permitted Use</h3>
           <p>
             You agree to use the Services only for lawful purposes and in accordance with these Terms. You are granted a non-exclusive, non-transferable, revocable license to access and use the Site strictly in accordance with these Terms.
           </p>

           <h3 className="text-xl font-semibold text-foreground/90">Prohibited Activities</h3>
           <p>You agree not to use the Services:</p>
           <ul>
             <li>In any way that violates any applicable federal, state, local, or international law or regulation (including, without limitation, any laws regarding the export of data or software to and from India or other countries).</li>
             <li>For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way by exposing them to inappropriate content, asking for personally identifiable information, or otherwise.</li>
             <li>To send, knowingly receive, upload, download, use, or re-use any material that does not comply with the Content Standards set out in these Terms.</li>
             <li>To transmit, or procure the sending of, any advertising or promotional material without our prior written consent, including any "junk mail," "chain letter," "spam," or any other similar solicitation.</li>
             <li>To impersonate or attempt to impersonate Upteky, an Upteky employee, another user, or any other person or entity (including, without limitation, by using email addresses or screen names associated with any of the foregoing).</li>
             <li>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Services, or which, as determined by us, may harm Upteky or users of the Services or expose them to liability.</li>
             <li>Use the Services in any manner that could disable, overburden, damage, or impair the site or interfere with any other party's use of the Services, including their ability to engage in real-time activities through the Services.</li>
             <li>Use any robot, spider, or other automatic device, process, or means to access the Services for any purpose, including monitoring or copying any of the material on the Services.</li>
           </ul>

          <h2 className="text-2xl font-semibold text-foreground mt-8">2. Intellectual Property Rights</h2>
          <p>
            The Services and their entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof) are owned by {companyName}, its licensors, or other providers of such material and are protected by Indian and international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
          </p>
          <p>
             These Terms permit you to use the Services for your personal, non-commercial use only, or for legitimate business purposes related to your role as a current or prospective customer, partner, or employee of Upteky. You must not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our Services, except as follows:
           </p>
            <ul>
                <li>Your computer may temporarily store copies of such materials in RAM incidental to your accessing and viewing those materials.</li>
                <li>You may store files that are automatically cached by your Web browser for display enhancement purposes.</li>
                <li>You may print or download one copy of a reasonable number of pages of the Site for your own personal, non-commercial use and not for further reproduction, publication, or distribution.</li>
            </ul>
           <p>If you print, copy, modify, download, or otherwise use or provide any other person with access to any part of the Services in breach of the Terms, your right to use the Services will stop immediately and you must, at our option, return or destroy any copies of the materials you have made.</p>


          <h2 className="text-2xl font-semibold text-foreground mt-8">3. User Contributions</h2>
           <p>
             The Services may contain message boards, chat rooms, personal web pages or profiles, forums, bulletin boards, and other interactive features (collectively, "Interactive Services") that allow users to post, submit, publish, display, or transmit to other users or other persons (hereinafter, "post") content or materials (collectively, "User Contributions") on or through the Services.
           </p>
           <p>All User Contributions must comply with the Content Standards set out in these Terms.</p>
           <p>
             Any User Contribution you post to the site will be considered non-confidential and non-proprietary. By providing any User Contribution on the Services, you grant us and our affiliates and service providers, and each of their and our respective licensees, successors, and assigns the right to use, reproduce, modify, perform, display, distribute, and otherwise disclose to third parties any such material for any purpose.
           </p>


          <h2 className="text-2xl font-semibold text-foreground mt-8">4. Disclaimer of Warranties</h2>
          <p>
             You understand that we cannot and do not guarantee or warrant that files available for downloading from the internet or the Services will be free of viruses or other destructive code. You are responsible for implementing sufficient procedures and checkpoints to satisfy your particular requirements for anti-virus protection and accuracy of data input and output, and for maintaining a means external to our site for any reconstruction of any lost data.
          </p>
          <p>
             TO THE FULLEST EXTENT PROVIDED BY LAW, WE WILL NOT BE LIABLE FOR ANY LOSS OR DAMAGE CAUSED BY A DISTRIBUTED DENIAL-OF-SERVICE_ATTACK, VIRUSES, OR OTHER TECHNOLOGICALLY HARMFUL MATERIAL THAT MAY INFECT YOUR COMPUTER EQUIPMENT, COMPUTER PROGRAMS, DATA, OR OTHER PROPRIETARY MATERIAL DUE TO YOUR USE OF THE SERVICES OR ANY SERVICES OR ITEMS OBTAINED THROUGH THE SERVICES OR TO YOUR DOWNLOADING OF ANY MATERIAL POSTED ON IT, OR ON ANY WEBSITE LINKED TO IT.
          </p>
          <p>
             YOUR USE OF THE SERVICES, ITS CONTENT, AND ANY SERVICES OR ITEMS OBTAINED THROUGH THE SERVICES IS AT YOUR OWN RISK. THE SERVICES, ITS CONTENT, AND ANY SERVICES OR ITEMS OBTAINED THROUGH THE SERVICES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. NEITHER {companyName} NOR ANY PERSON ASSOCIATED WITH {companyName} MAKES ANY WARRANTY OR REPRESENTATION WITH RESPECT TO THE COMPLETENESS, SECURITY, RELIABILITY, QUALITY, ACCURACY, OR AVAILABILITY OF THE SERVICES.
          </p>
          <p>
            WITHOUT LIMITING THE FOREGOING, NEITHER {companyName} NOR ANYONE ASSOCIATED WITH {companyName} REPRESENTS OR WARRANTS THAT THE SERVICES, ITS CONTENT, OR ANY SERVICES OR ITEMS OBTAINED THROUGH THE SERVICES WILL BE ACCURATE, RELIABLE, ERROR-FREE, OR UNINTERRUPTED, THAT DEFECTS WILL BE CORRECTED, THAT OUR SITE OR THE SERVER THAT MAKES IT AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS, OR THAT THE SERVICES OR ANY SERVICES OR ITEMS OBTAINED THROUGH THE SERVICES WILL OTHERWISE MEET YOUR NEEDS OR EXPECTATIONS.
          </p>
          <p>
            TO THE FULLEST EXTENT PROVIDED BY LAW, {companyName} HEREBY DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF MERCHANTABILITY, NON-INFRINGEMENT, AND FITNESS FOR PARTICULAR PURPOSE.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-8">5. Limitation on Liability</h2>
          <p>
             TO THE FULLEST EXTENT PROVIDED BY LAW, IN NO EVENT WILL {companyName}, ITS AFFILIATES, OR THEIR LICENSORS, SERVICE PROVIDERS, EMPLOYEES, AGENTS, OFFICERS, OR DIRECTORS BE LIABLE FOR DAMAGES OF ANY KIND, UNDER ANY LEGAL THEORY, ARISING OUT OF OR IN CONNECTION WITH YOUR USE, OR INABILITY TO USE, THE SERVICES, ANY WEBSITES LINKED TO IT, ANY CONTENT ON THE SERVICES OR SUCH OTHER WEBSITES, INCLUDING ANY DIRECT, INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO, PERSONAL INJURY, PAIN AND SUFFERING, EMOTIONAL DISTRESS, LOSS OF REVENUE, LOSS OF PROFITS, LOSS OF BUSINESS OR ANTICIPATED SAVINGS, LOSS OF USE, LOSS OF GOODWILL, LOSS OF DATA, AND WHETHER CAUSED BY TORT (INCLUDING NEGLIGENCE), BREACH OF CONTRACT, OR OTHERWISE, EVEN IF FORESEEABLE.
          </p>
           <p>THE FOREGOING DOES NOT AFFECT ANY LIABILITY THAT CANNOT BE EXCLUDED OR LIMITED UNDER APPLICABLE LAW.</p>

          <h2 className="text-2xl font-semibold text-foreground mt-8">6. Indemnification</h2>
           <p>
             You agree to defend, indemnify, and hold harmless {companyName}, its affiliates, licensors, and service providers, and its and their respective officers, directors, employees, contractors, agents, licensors, suppliers, successors, and assigns from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your violation of these Terms or your use of the Services, including, but not limited to, your User Contributions, any use of the Services' content, services, and products other than as expressly authorized in these Terms or your use of any information obtained from the Services.
           </p>

          <h2 className="text-2xl font-semibold text-foreground mt-8">7. Governing Law and Jurisdiction</h2>
          <p>
             All matters relating to the Services and these Terms and any dispute or claim arising therefrom or related thereto (in each case, including non-contractual disputes or claims), shall be governed by and construed in accordance with the laws of India, with specific jurisdiction in Ahmedabad, Gujarat, without giving effect to any choice or conflict of law provision or rule.
           </p>
           <p>
            Any legal suit, action, or proceeding arising out of, or related to, these Terms or the Services shall be instituted exclusively in the courts of Ahmedabad, Gujarat, India, although we retain the right to bring any suit, action, or proceeding against you for breach of these Terms in your country of residence or any other relevant country. You waive any and all objections to the exercise of jurisdiction over you by such courts and to venue in such courts.
           </p>

          <h2 className="text-2xl font-semibold text-foreground mt-8">8. Changes to Terms of Service</h2>
          <p>
             We may revise and update these Terms from time to time in our sole discretion. All changes are effective immediately when we post them and apply to all access to and use of the Services thereafter.
           </p>
           <p>
             Your continued use of the Services following the posting of revised Terms means that you accept and agree to the changes. You are expected to check this page frequently so you are aware of any changes, as they are binding on you.
           </p>

          <h2 className="text-2xl font-semibold text-foreground mt-8">9. Entire Agreement</h2>
           <p>
             The Terms of Service and our Privacy Policy constitute the sole and entire agreement between you and {companyName} regarding the Services and supersede all prior and contemporaneous understandings, agreements, representations, and warranties, both written and oral, regarding the Services.
           </p>


          <h2 className="text-2xl font-semibold text-foreground mt-8">10. Contact Information</h2>
          <p>
             To ask questions or comment about these Terms of Service, contact us at:
           </p>
           <p>
            {companyName}<br />
            {companyAddress}<br />
            <a href={`mailto:${companyEmail}`} className="text-accent hover:underline">{companyEmail}</a>
          </p>
        </div>
      </div>
      
    </div>
  );
}
