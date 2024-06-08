import React from 'react'
import { useState } from 'react';

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handlePlanClick = (plan) => {
    setSelectedPlan(plan);
  };

  const plans = [
    {
      title: 'Developer',
      features: [
        'Azure AI Cloud (SaaS)',
        'Pricing: Pay-as-you-go',
        'Fine-tune LLMs',
        'Up to 70B parameters',
        'Access to 4,100 GPUs',
        'Inference',
        'Serverless inference: Token-based pricing for base model and fine-tuned models',
        'Dedicated deployments: Limited and multiple fine-tuned adapters',
        'Performance: 100 requests per second',
        'Concurrent training jobs: Limited to 20',
        'Customer support: Discord, chat, and email',
      ],
      buttonText: 'Get Started with $25 Free Credits',
      buttonUrl: '#',
    },
    {
      title: 'Enterprise',
      features: [
        'Azure AI Cloud (SaaS)',
        'Pricing: Discounted pay-as-you-go',
        'Fine-tune LLMs',
        'Up to 733B parameters',
        'Access to 5,100 GPUs',
        'Inference',
        'Serverless inference: Token-based pricing for base model and fine-tuned models',
        'Dedicated deployments: Limited to one 733B parameter base model with multiple fine-tuned adapters',
        'Performance: 100 requests per second',
        'Concurrent training jobs: Can be increased upon request',
        'Customer support: Discord, chat, and email',
      ],
      buttonText: 'Contact Sales',
      buttonUrl: '#',
    },
    {
      title: 'Virtual Private Cloud (VPC)',
      features: [
        'VPC on AWS, GCP, or Azure',
        'Pricing: Platform fees and compute costs',
        'Fine-tune LLMs',
        'Up to 70B parameters',
        'Use GPUs in your cloud',
        'Inference',
        'Dedicated deployments: Unlimited deployments for all model sizes',
        'Serve multiple fine-tuned variants on a single base model',
        'Performance: No rate limiting',
        'Concurrent training jobs: Unlimited',
        'Concurrent training jobs: Prodigy’s Customer Success program includes a dedicated support channel, onboarding, and priority support from our ML experts',
      ],
      buttonText: 'Contact Sales',
      buttonUrl: '#',
    },
  ];

  const [selectedModel, setSelectedModel] = useState(null);

  const models = [
    { size: 'Up to 7B', price: '$0.2' },
    { size: 'Up to 21B', price: '$0.25' },
    { size: 'Up to 70B', price: '$1.0' },
    { size: 'Mistral-6x7B', price: '$1.0' },
  ];

  const handleModelSelect = (model) => {
    setSelectedModel(model);
  };

  return (
    <>
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-bold mb-4 text-center">
        Prices based on the goals of each business
      </h2>
      <p className="text-gray-600 mb-8 text-center">
        Select from developer plans that are ready to use or bespoke enterprise
        plans. Start cutting costs and increasing performance right now.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`bg-white w-full flex flex-col   items-center shadow-md rounded-md p-6 ${
              selectedPlan === plan.title && 'border-blue-500 border-2'
            }`}
            onClick={() => handlePlanClick(plan.title)}
          >
            <h3 className="text-xl font-bold mb-2">{plan.title}</h3>
            <ul className="list-disc pl-6">
              {plan.features.map((feature, i) => (
                <li key={i} className="mb-1">
                  {feature}
                </li>
              ))}
            </ul>
            <a
              href={plan.buttonUrl}
              className="block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
            >
              {plan.buttonText}
            </a>
          </div>
        ))}
      </div>
    </div>
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Serverless Inference Endpoints</h1>

      <p className="text-gray-600 mb-6">
        Same price for both pre-trained and fine-tuned models
      </p>

      <p className="text-gray-600 mb-4">
        Asa AI supports state-of-the-art, efficient inference for both pre-trained and
        fine-tuned models at the same, flat per token price. It is enabled by Lola
        Exchange (LORAX), Asa AI's unique technology that allows us to have the
        most cost-effective fine-tuned model serving in the market.
      </p>

      <p className="text-gray-600 mb-4">
        For comparison, other companies charge more for inference on their fine-tuned
        models than the base model and most other LLMs. Infrastructure companies
        don't give you the option for bringing you to use an expensive $5/GPU-hour
        price model for fine-tuned models.
      </p>

      <h2 className="text-xl font-bold mb-2">Models supported include:</h2>

      <div className="grid grid-cols-2 gap-4 mb-8">
        <ul>
          <li>Lama-j-6B</li>
          <li>Mistral-7b-notr.ct-v0.1</li>
          <li>Gomma 2B not</li>
          <li>Lama-2-13b-da</li>
          <li>CodeLlama-2-13b-inst</li>
          <li>Zephy7-beta</li>
        </ul>
        <ul>
          <li>Lama-j-6B-min.st</li>
          <li>Mistral-7b-notr.ct-v0.2</li>
          <li>Gomma 7B</li>
          <li>Lama-2-7B</li>
          <li>Lama-2-7B-chat</li>
          <li>CodeLlama-2-13b-inst</li>
          <li>Mistral-6x7B-inst</li>
        </ul>
      </div>

      <p className="text-gray-600 mb-4">
        There are continually costly support for inference for fine-trained
        models.
      </p>

      <div className="bg-gray-100 p-4 rounded-md shadow-md">
        <h3 className="text-lg font-bold mb-2">
          Model size (Pre-trained and fine-tuned models)
        </h3>
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left py-2">Model Size</th>
              <th className="text-right py-2">Price per 1M tokens (input + output)</th>
            </tr>
          </thead>
          <tbody>
            {models.map((model) => (
              <tr
                key={model.size}
                className={
                  selectedModel === model ? 'bg-gray-200' : ''
                }
                onClick={() => handleModelSelect(model)}
              >
                <td className="text-left py-2">{model.size}</td>
                <td className="text-right py-2">{model.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </>
  )
}

export default Pricing