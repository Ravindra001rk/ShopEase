import { useState } from "react";

export default function ProductTabs() {
  const [activeTab, setActiveTab] = useState("description");

  const tabs = [
    { id: "description", label: "Description" },
    { id: "reviews", label: "Reviews (122)" },
    { id: "specifications", label: "Specifications" },
    { id: "shipping", label: "Shipping & Returns" },
    { id: "faq", label: "FAQ" },
  ];

  const content = {
    description: (
      <div className="space-y-4">
        <p className="text-gray-700 leading-relaxed">
          An e-commerce website is an online platform that facilitates the
          buying and selling of products or services over the internet. It
          serves as a virtual marketplace where businesses and individuals can
          showcase their products, interact with customers, and conduct
          transactions without the need for a physical presence. E-commerce
          websites have gained immense popularity due to their convenience,
          accessibility, and the global reach they offer.
        </p>
        <p className="text-gray-700 leading-relaxed">
          E-commerce websites typically display products or services along with
          detailed descriptions, images, prices, and any available variations
          (e.g., sizes, colors). Each product usually has its own dedicated page
          with relevant information.
        </p>
      </div>
    ),
    reviews: (
      <div className="space-y-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="text-4xl font-bold">4.5</div>
          <div>
            <div className="flex gap-1 text-yellow-400 mb-1">
              {"★".repeat(4)}
              {"☆"}
            </div>
            <p className="text-sm text-gray-600">Based on 122 reviews</p>
          </div>
        </div>
        <div className="border-t pt-4">
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="font-semibold">John D.</span>
              <span className="text-yellow-400">★★★★★</span>
            </div>
            <p className="text-gray-700">
              Great product! Exactly what I was looking for. Fast shipping and
              excellent quality.
            </p>
          </div>
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="font-semibold">Sarah M.</span>
              <span className="text-yellow-400">★★★★☆</span>
            </div>
            <p className="text-gray-700">
              Good value for money. Works as described, though delivery took a
              bit longer than expected.
            </p>
          </div>
        </div>
      </div>
    ),
    specifications: (
      <div className="space-y-2">
        <div className="grid grid-cols-2 gap-4 py-3 border-b">
          <span className="font-semibold text-gray-700">Dimensions</span>
          <span className="text-gray-600">10" x 8" x 5"</span>
        </div>
        <div className="grid grid-cols-2 gap-4 py-3 border-b">
          <span className="font-semibold text-gray-700">Weight</span>
          <span className="text-gray-600">2.5 lbs</span>
        </div>
        <div className="grid grid-cols-2 gap-4 py-3 border-b">
          <span className="font-semibold text-gray-700">Material</span>
          <span className="text-gray-600">Premium Quality Cotton</span>
        </div>
        <div className="grid grid-cols-2 gap-4 py-3 border-b">
          <span className="font-semibold text-gray-700">Color Options</span>
          <span className="text-gray-600">Black, White, Navy, Gray</span>
        </div>
        <div className="grid grid-cols-2 gap-4 py-3">
          <span className="font-semibold text-gray-700">Warranty</span>
          <span className="text-gray-600">1 Year Manufacturer Warranty</span>
        </div>
      </div>
    ),
    shipping: (
      <div className="space-y-4">
        <div>
          <h3 className="font-semibold text-lg mb-2">Shipping Information</h3>
          <p className="text-gray-700 mb-2">
            We offer multiple shipping options to meet your needs:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li>Standard Shipping: 5-7 business days</li>
            <li>Express Shipping: 2-3 business days</li>
            <li>Next Day Delivery: Available in select areas</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-2">Returns Policy</h3>
          <p className="text-gray-700">
            We accept returns within 30 days of purchase. Items must be unused
            and in original packaging. Refunds will be processed within 5-7
            business days of receiving the returned item.
          </p>
        </div>
      </div>
    ),
    faq: (
      <div className="space-y-4">
        <div>
          <h3 className="font-semibold mb-2">How do I track my order?</h3>
          <p className="text-gray-700">
            Once your order ships, you'll receive a tracking number via email.
            You can use this to track your package on our website or the
            carrier's site.
          </p>
        </div>
        <div>
          <h3 className="font-semibold mb-2">
            What payment methods do you accept?
          </h3>
          <p className="text-gray-700">
            We accept all major credit cards, PayPal, Apple Pay, and Google Pay
            for your convenience.
          </p>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Do you ship internationally?</h3>
          <p className="text-gray-700">
            Yes, we ship to over 50 countries worldwide. International shipping
            times vary by location.
          </p>
        </div>
        <div>
          <h3 className="font-semibold mb-2">
            Is my payment information secure?
          </h3>
          <p className="text-gray-700">
            Absolutely. We use industry-standard SSL encryption to protect all
            transactions and never store your complete payment information.
          </p>
        </div>
      </div>
    ),
  };

  return (
    <div className="w-full  p-6">
      <div className="border-b mb-6">
        <div className="flex gap-2 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 font-medium whitespace-nowrap transition-colors ${
                activeTab === tab.id
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      <div className="py-4">{content[activeTab]}</div>
    </div>
  );
}
