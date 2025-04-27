import React from 'react';
import { X, Check } from 'lucide-react';

const SUBSCRIPTION_PLANS = [
  {
    id: 'daily',
    name: 'Daily Pass',
    price: 0.99,
    duration: 1,
    durationUnit: 'day',
    features: ['Ad-free experience', 'Daily bonus hints', 'Basic support']
  },
  {
    id: 'monthly',
    name: 'Monthly Premium',
    price: 4.99,
    duration: 1,
    durationUnit: 'month',
    features: ['Ad-free experience', 'Unlimited hints', 'Priority support', 'Exclusive themes']
  },
  {
    id: 'quarterly',
    name: 'Quarterly Pro',
    price: 12.99,
    duration: 3,
    durationUnit: 'month',
    features: ['Ad-free experience', 'Unlimited hints', 'Priority support', 'Exclusive themes', '10% discount']
  },
  {
    id: 'biannual',
    name: '6-Month Elite',
    price: 24.99,
    duration: 6,
    durationUnit: 'month',
    features: ['Ad-free experience', 'Unlimited hints', 'Priority support', 'Exclusive themes', '15% discount']
  },
  {
    id: 'annual',
    name: 'Annual Ultimate',
    price: 39.99,
    duration: 1,
    durationUnit: 'year',
    features: ['Ad-free experience', 'Unlimited hints', 'Priority support', 'Exclusive themes', '25% discount', 'Early access']
  }
];

const SubscriptionModal = ({ onClose, onSubscribe }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Choose Your Subscription Plan
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              aria-label="Close"
            >
              <X size={24} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SUBSCRIPTION_PLANS.map((plan) => (
              <div
                key={plan.id}
                className="border dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                    ${plan.price}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400 ml-2">
                    /{plan.durationUnit}
                  </span>
                </div>
                <ul className="mb-6 space-y-2">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600 dark:text-gray-300">
                      <Check size={16} className="text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => onSubscribe(plan)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded
                    transition-colors duration-200"
                >
                  Subscribe Now
                </button>
              </div>
            ))}
          </div>

          <p className="mt-6 text-sm text-gray-500 dark:text-gray-400 text-center">
            All plans include a 7-day money-back guarantee. Cancel anytime.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionModal;