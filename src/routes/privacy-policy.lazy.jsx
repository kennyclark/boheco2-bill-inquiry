import { createLazyFileRoute, Link } from "@tanstack/react-router";
import Markdown from "react-markdown";

export const Route = createLazyFileRoute("/privacy-policy")({
  component: RouteComponent,
});

const privacyPolicy = `
# **Privacy Policy**

**Last Updated:** 04-11-2025

### **1. Introduction**

Welcome to **BOHECO II: Online Bill Inquiry** ("*we,*" "*us,*" or "*our*"). This Privacy Policy explains how we handle your personal information when you use our web application to access your electricity billing details.

By using our service, you agree to the collection and use of information in accordance with this policy.

### **2. Information We Collect**

To fetch your electricity billing details, we collect the following:

- **Name:** Your first name and last name (for verification with BOHECO II's API).
- **Account Number:** Your BOHECO II account number.
- **Billing Month:** The month for which you request billing details.

**We do not store any of this information.** The data is transmitted directly to BOHECO II's API, and we only display the response to you.

### **3. How We Use Your Information**

The information you provide is used solely to:

- Retrieve and display your electricity billing details from your BOHECO II's API.
- Facilitate a seamless user experience.

We do **not** share, sell, or retain your data beyond the immediate API transaction.

### **4. Data Security**

We implement industry-standard security measures (e.g., HTTPS encryption) to protect your information during transmission. However, since we rely on third-party APIs (BOHECO II), we cannot guarantee the security of data handled by those providers.

### **5. Third-Party Services**

Our web app interacts with BOHECO II's API. We are not responsible for their data practices. Please review your electric company's privacy policy for details.

### **6. Changes to This Privacy Policy**

We may update this policy occasionally. Changes will be posted here, and your continued use of the service constitutes acceptance.

### **7. Contact Us**

For questions about this Privacy Policy, contact us at:
<contact@knydev.uk>
`;

function RouteComponent() {
  return (
    <div className="prose prose-stone px-8 py-5">
      <div className="text-right">
        <Link to="/" className="text-amber-400">
          ⬅ Home
        </Link>
      </div>
      <Markdown>{privacyPolicy}</Markdown>
    </div>
  );
}
