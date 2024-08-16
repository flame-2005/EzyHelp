import React from 'react';

const ShippingPolicy = () => {
  return (
    <div className="p-6 bg-white text-black border border-gray-800 rounded-md">
      <h2 className="text-2xl font-bold mb-4">Shipping Policy</h2>
      <p className="mb-4">
        At ezyhelp.in, we are dedicated to ensuring timely and reliable delivery of services to our customers.
      </p>
      <h3 className="text-xl font-semibold mb-2">1. Service Delivery</h3>
      <p className="mb-4">
        Since ezyhelp.in provides blue-collar services, there is no physical shipping involved. However, our team ensures that the services are delivered to the agreed-upon location at the scheduled time.
      </p>
      <h3 className="text-xl font-semibold mb-2">2. Delivery Timeline</h3>
      <p className="mb-4">
        Our services are typically scheduled within 24-48 hours of placing a request. The exact timeline may vary depending on service availability and customer requirements.
      </p>
      <h3 className="text-xl font-semibold mb-2">3. Minimum and Maximum Timelines</h3>
      <p className="mb-4">
        <strong>Minimum Timeline:</strong> Services may commence within 24 hours of request confirmation.<br />
        <strong>Maximum Timeline:</strong> In rare cases, service delivery may take up to 7 business days, depending on location and availability.
      </p>
      <h3 className="text-xl font-semibold mb-2">4. Cancellations and Refunds</h3>
      <p className="mb-4">
        If you need to cancel or reschedule a service, please contact us at least 24 hours before the scheduled time. Refunds for canceled services will be processed as per our refund policy.
      </p>
      <h3 className="text-xl font-semibold mb-2">5. Contact Information</h3>
      <p>
        For any questions regarding service delivery, please contact us at <strong>96328 79746</strong> or email us at <strong>your-email@example.com</strong>.
      </p>
    </div>
  );
};

export default ShippingPolicy;
