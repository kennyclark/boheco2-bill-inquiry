import { createLazyFileRoute, Link } from "@tanstack/react-router";
import Markdown from "react-markdown";

export const Route = createLazyFileRoute("/terms-of-service")({
  component: RouteComponent,
});

const termsOfService = `
# **Terms of Service**

**Last Updated:** 04-11-2025

### **1. Acceptance of Terms**

By using **BOHECO II: Online Bill Inquiry** ("*the Service*"), you agree to comply with these Terms of Service ("*Terms*"). If you do not agree, please do not use the Service.

### **2. Description of Service**

Our web application allows you to:

- View your electricity billing details (consumption, billed amount, payment status) for a specific month.
- Access this information via BOHECO II's API.

**We do not store your name, account number, or billing month.**

### **3. User Responsibilities**

You agree to:

- Provide **accurate** first name, last name, account number, and billing month (as registered with BOHECO II).
- Use the Service only for **your own account** (no unauthorized access).
- Not misuse the Service for fraudulent purposes.

### **4. Disclaimer of Warranties**

The Service is provided "*as is.*" We do not guarantee:

- Accuracy of data fetched from third-party APIs.
- Availability or uninterrupted service.

### **5. Limitation of Liability**

We are not liable for:

- Errors in billing data provided by BOHECO II.
- Any damages arising from the use or inability to use the Service.

### **6. Termination**

We may suspend or terminate access if you violate these Terms.

### **7. Changes to Terms**

We may modify these Terms at any time. Continued use constitutes acceptance.

### **8. Governing Law**

These Terms are governed by the laws of the Republic of the Philippines.

### **9. Contact Us**

For questions about this Terms of Service, contact us at:
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
      <Markdown>{termsOfService}</Markdown>
    </div>
  );
}
