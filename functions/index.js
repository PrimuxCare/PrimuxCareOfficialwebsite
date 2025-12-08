const { setGlobalOptions } = require("firebase-functions");
const { onDocumentCreated } = require("firebase-functions/v2/firestore");
const logger = require("firebase-functions/logger");
const admin = require("firebase-admin");

// Initialize Firebase Admin SDK
admin.initializeApp();

// Limit concurrent function containers
setGlobalOptions({ maxInstances: 10 });

// Trigger when a new inquiry is added to Firestore
exports.newSalesInquiry = onDocumentCreated(
  "primuxcare_sales_inquiries/{docId}",
  (event) => {
    const newInquiry = event.data;
    logger.info("New sales inquiry received:", newInquiry);

    // Example: here you can add email notifications or other actions
    // e.g., send email using nodemailer or call a webhook

    return null; // Function must return a value
  }
);
