import React from 'react'
import { useState } from 'react';

const Pricing = () => {

  const [modelSize, setModelSize] = useState('Up to 7b');
  const [dataset, setDataset] = useState(0);
  const [epochs, setEpochs] = useState(0);
  const [estimatedCost, setEstimatedCost] = useState(0);

  const handleModelSizeChange = (event) => {
    setModelSize(event.target.value);
    calculateCost();
  };

  const handleDatasetChange = (event) => {
    setDataset(parseInt(event.target.value, 10));
    calculateCost();
  };

  const handleEpochsChange = (event) => {
    setEpochs(parseInt(event.target.value, 10));
    calculateCost();
  };

  const calculateCost = () => {
    // Replace this with your actual cost calculation logic
    const cost = modelSize === 'Up to 7b'
      ? dataset * epochs * 0.01 // Example cost calculation
      : 0;
    setEstimatedCost(cost);
  };


  return (
    <>
      <div className='container mx-auto mt-20'>
        <div className='flex  justify-center items-center mb-10 font-semibold'>
          <button className='text-violet-700 select-none cursor-default px-4 py-2 rounded-full bg-gray-200'>
            Pricing
          </button>
        </div>
        <h1 className='text-5xl font-bold text-gray-800 mb-7 px-5 text-center'>Prices based on the goals of each business</h1>
        <h2 className='text-xl text-gray-500 mb-10 px-5 font-semibold text-center'>Select from developer plans that are ready to use or bespoke enterprise plans. Start cutting costs and increasing performance right now.</h2>
        <div className='grid items-start grid-cols-1 md:grid-cols-3 gap-8'>
          <div className=' rounded-md cursor-pointer shadow-lg w-5/6 flex flex-col mx-auto items-center border-2 border-gray-50'>
            <div className='py-3 bg-gray-200 flex  justify-center rounded-t-md items-center text-lg font-semibold w-full'>Developer</div>
            <div className='py-8 w-full'>
              <h1 className='text-lg text-center font-semibold pb-5'>Asva AI Cloud (SaaS)</h1>
              <div className='text-start px-4 pb-5'>
                <p className=''><span className='font-semibold text-gray-600'>Pricing:</span> Pay-as-you-go.</p>
              </div>
              <div className='text-start px-4 pb-5'>
                <ul className='font-semibold text-gray-600 list-decimal'>Fine-Tune LLMs
                  <li className='text-gray-600 font-normal ml-6'>Text classification</li>
                  <li className='text-gray-600 font-normal ml-6'>Named entity recognition</li>
                </ul>
              </div>
              <div className='text-start px-4 pb-5'>
                <ul className='font-semibold flex flex-col space-y-3 text-gray-600 list-disc'>Inference
                  <li className='text-gray-600 font-normal pr-8 ml-6 mt-3'>Serverless inference: Token-based pricing for base model and fine- tuned model</li>
                  <li className='text-gray-600 font-normal pr-8 ml-6'>Dedicated deployments: Limited to one 8B parameter base model with multiple fine-tuned adapters.</li>
                </ul>
              </div>
              <div className='text-start px-4 pb-5'>
                <p className=''><span className='font-semibold text-lg text-gray-600'>Performace:</span> 100 requests per second.</p>
              </div>
              <div className='text-start px-4 pb-5'>
                <p className=''><span className='font-semibold text-lg text-gray-600'>Concurrent training jobs:</span> Limited to 2d.</p>
              </div>
              <div className='text-start px-4 pb-5'>
                <p className=''><span className='font-semibold text-lg text-gray-600'>Customer support:</span> Discord, chat and email.</p>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <button className='px-7 py-3 rounded-md text-white bg-violet-700'>
                  Get Started with $25 Free Credits
                </button>
                <p className='text-xs mt-1'><span className='font-semibold text-gray-600'>Note: </span> Free credits expire after 30 days.</p>
              </div>
            </div>
          </div>
          <div className='  rounded-md cursor-pointer shadow-lg w-5/6 flex flex-col mx-auto items-center border-2 border-gray-50'>
            <div className='py-3 bg-gray-200 flex  justify-center rounded-t-md items-center text-lg font-semibold w-full'>Enterprise</div>
            <div className='py-8 w-full'>
              <h1 className='text-lg text-center font-semibold pb-5'>Asva AI Cloud (SaaS)</h1>
              <div className='text-start px-4 pb-5'>
                <p className=''><span className='font-semibold text-gray-600'>Pricing:</span>  Discounted pay-as-you-go.</p>
              </div>
              <div className='text-start px-4 pb-5'>
                <ul className='font-semibold text-gray-600 list-decimal'>Fine-Tune LLMs
                  <li className='text-gray-600 font-normal ml-6'>Up to 70B parameters</li>
                  <li className='text-gray-600 font-normal ml-6'>Access to A100 GPUs</li>
                </ul>
              </div>
              <div className='text-start px-4 pb-5'>
                <ul className='font-semibold flex flex-col space-y-3 text-gray-600 list-disc'>Inference
                  <li className='text-gray-600 font-normal pr-8 ml-6 mt-3'>Serverless inference: Token-based pricing for base model and fine- tuned model</li>
                  <li className='text-gray-600 font-normal pr-8 ml-6'>Dedicated deployments: Limited to one 8B parameter base model with multiple fine-tuned adapters.</li>
                </ul>
              </div>
              <div className='text-start px-4 pb-5'>
                <p className=''><span className='font-semibold text-lg text-gray-600'>Performace:</span> 100 requests per second.</p>
              </div>
              <div className='text-start px-4 pb-5'>
                <p className=''><span className='font-semibold text-lg text-gray-600'>Concurrent training jobs:</span> Can be increased upon request .</p>
              </div>
              <div className='text-start px-4 pb-5'>
                <p className=''><span className='font-semibold text-lg text-gray-600'>Customer support:</span> Discord, chat and email.</p>
              </div>
              <div className='flex justify-center'>
                <button className='px-7 py-3 rounded-md text-white bg-violet-700'>
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
          <div className=' rounded-md cursor-pointer shadow-lg w-5/6 flex flex-col mx-auto items-center border-2 border-gray-50'>
            <div className='py-3 bg-gray-200 flex  justify-center rounded-t-md items-center text-lg font-semibold w-full'>Virtual Private Cloud (VPC)</div>
            <div className='py-8 w-full'>
              <h1 className='text-lg text-center font-semibold pb-5'>VPC on AWS, GCP, or Azure</h1>
              <div className='text-start px-4 pb-5'>
                <p className=''><span className='font-semibold text-gray-600'>Pricing:</span> Pay-as-you-go.</p>
              </div>
              <div className='text-start px-4 pb-5'>
                <ul className='font-semibold text-gray-600 list-decimal'>Fine-Tune LLMs
                  <li className='text-gray-600 font-normal ml-6'>Up to 70B parameters</li>
                  <li className='text-gray-600 font-normal ml-6'>Use GPUs in own cloud</li>
                </ul>
              </div>
              <div className='text-start px-4 pb-5'>
                <ul className='font-semibold flex flex-col space-y-3 text-gray-600 list-disc'>Inference
                  <li className='text-gray-600 font-normal pr-8 ml-6 mt-3'>Dedicated Deployments:Unlimited deployments for all model sizes. Serve multiple fine-tuned variants on a single base model with </li>
                </ul>
              </div>
              <div className='text-start px-4 pb-5'>
                <p className=''><span className='font-semibold text-lg text-gray-600'>Performace:</span>  No rate limiting.</p>
              </div>
              <div className='text-start px-4 pb-5'>
                <p className=''><span className='font-semibold text-lg text-gray-600'>Concurrent training jobs:</span> Unlimited.</p>
              </div>
              <div className='text-start px-4 pb-5'>
                <p className=''><span className='font-semibold text-lg text-gray-600'>Customer support:</span> Predibase's Customer Success program includes a dedicated support channel, training, and priority support from our ML experts.</p>
              </div>
              <div className='flex justify-center'>
                <button className='px-7 py-3 rounded-md text-white bg-violet-700'>
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto bg-gray-50 px-8 py-5 mt-20">
          <div className='flex  justify-center items-center mb-10 font-semibold'>
            <button className='text-violet-700 select-none cursor-default px-4 py-2 rounded-full bg-gray-200'>
              Model price
            </button>
          </div>
          <h1 className="text-5xl font-bold text-center mb-8">
            Serverless Inference Endpoints
          </h1>

          <p className="text-xl font-semibold text-center mb-4">
            Same price for both pre-trained and fine-tuned models
          </p>

          <p className="mb-4 text-gray-600 text-lg text-center ">
            Asva AI supports state-of-the-art, efficient inference for both
            pre-trained and fine-tuned models at the same, flat per-token price. It is
            enabled by LORA Exchange (LoRAX), Asva AI's unique technology that
            allows us to have the most cost-effective fine-tuned model serving in the
            market.
          </p>

          <p className="mb-10 text-gray-600 text-lg text-center ">
            For comparison, OpenAI GPT-3.5 charges 8x more for inference on their
            fine-tuned models than the base model. And most other OSS LLM
            infrastructure companies don't give you the option, forcing you to use an
            expensive $ / GPU-hour pricing model for fine-tuned models.
          </p>

          <h2 className="text-xl text-center text-gray-700 font-semibold mb-4">Models supported include:</h2>

          <div className="grid gird-cols-1 ml-10 mx-auto md:grid-cols-4 gap-y-2 md:gap-x-7">
            <ul className="list-disc space-y-2 text-gray-500">
              <li>Llama-3-8b</li>
              <li>Mistral-7b-instruct-v0.1</li>
              <li>Gemma-2B-Instruct</li>
              <li>Llama-2-13b-chat</li>
              <li>Code-llama-70b-instruct</li>
              <li>Phi-2</li>
            </ul>
            <ul className="list-disc space-y-2 text-gray-500">
              <li>Llama-3-8b-instruct</li>
              <li>Mistral-7b-instruct-v0.2</li>
              <li>Gemma-7b</li>
              <li>Llama-2-7b</li>
              <li>Llama-2-70b</li>
              <li>Zephyr-7b-beta</li>
            </ul>
            <ul className="list-disc space-y-2 text-gray-500">
              <li>Llama-3-70b</li>
              <li>Mistral-7b</li>
              <li>Gemma-7B-Instruct</li>
              <li>Llama-2-7b-chat</li>
              <li>Llama-2-70b-chat</li>
            </ul>
            <ul className="list-disc space-y-2 text-gray-500">
              <li>Llama-3-70b-instruct</li>
              <li>Gemma-2b</li>
              <li>Code-llama-13b-instruct</li>
              <li>Llama-2-13b</li>
              <li>Mixtral-8x7B-Instruct-v0.1</li>
            </ul>
          </div>

          <p className="mt-8 font-semibold text-center">
            Note: We are continuously adding support for inference for pre-trained
            models. If there are other models you'd like to see hosted, please let us
            know.
          </p>
          <div className="flex w-full justify-center mx-auto mt-10">
            <table className=" text-center border-collapse shadow-md rounded-lg">
              <thead>
                <tr>
                  <th className="px-4 py-3 border-b bg-white border-gray-200 text-gray-800 font-semibold  tracking-wider">Model size (Pre-trained and fine-tuned models)</th>
                  <th className="px-10 py-3 border-b border-gray-200 bg-gray-100 text-gray-800 font-semibold tracking-wider">Price per 1M tokens (input + output)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-3 border-b bg-white border-gray-200">Up to 7B</td>
                  <td className="px-6 py-3 border-b bg-gray-100 border-gray-200">$0.2</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 border-b bg-white border-gray-200">Up to 21B</td>
                  <td className="px-6 py-3 border-b bg-gray-100 border-gray-200">$0.25</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 border-b bg-white border-gray-200">Up to 70B</td>
                  <td className="px-6 py-3 border-b bg-gray-100 border-gray-200">$1.0</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 border-b bg-white border-gray-200">Mixtral-8x7B</td>
                  <td className="px-6 py-3 border-b bg-gray-100 border-gray-200">$1.0</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex flex-col items-center mx-auto mt-20 px-5">
          <div className='flex w-full justify-center items-center mb-10 font-semibold'>
            <button className='text-violet-700 select-none cursor-default px-4 py-2 rounded-full bg-gray-200'>
              Calculate Fine-tuning cost
            </button>
          </div>
          <h1 className="text-5xl font-bold text-center mb-8">
            Fine-tuning Costs
          </h1>
          <p className="text-lg w-5/6 font-semibold text-center mb-10">
            Asva AI offers state-of-the-art fine-tuning at cost-effective prices. Expected costs vary
            depending on the dataset and the size of the model being fine-tuned.
          </p>
          <div className="bg-gray-50 rounded-md md:w-1/3 shadow-xl p-6">
            <h2 className="text-xl text-center font-bold mb-10">
              Calculate Your Fine-tuning Cost
            </h2>
            <div className="mb-8">
              <label htmlFor="modelSize" className="block text-gray-700 font-semibold mb-2">
                Model Size (parameters)
              </label>
              <select
                id="modelSize"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={modelSize}
                onChange={handleModelSizeChange}
              >
                <option value="Up to 7b">Up to 7b</option>
                {/* Add more model sizes as needed */}
              </select>
            </div>
            <div className="mb-8">
              <label htmlFor="dataset" className="block text-gray-700 font-semibold mb-2">
                Dataset (tokens)
              </label>
              <input
                type="number"
                id="dataset"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={dataset}
                onChange={handleDatasetChange}
              />
            </div>
            <div className="mb-8">
              <label htmlFor="epochs" className="block text-gray-700 font-semibold mb-2">
                Epochs (number of iterations)
              </label>
              <input
                type="number"
                id="epochs"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={epochs}
                onChange={handleEpochsChange}
              />
            </div>
            <div className="flex justify-between">
              <label className="block text-gray-700 font-semibold mb-2">
                Estimated Cost
              </label>
              <span className="text-gray-700 font-semibold">
                ${estimatedCost.toFixed(2)}
              </span>
            </div>
          </div>
        </div>
        <div className="container mx-auto bg-gray-50 px-8 py-5 mt-20">
          <div className='flex  justify-center items-center mb-10 font-semibold'>
            <button className='text-violet-700 select-none cursor-default px-4 py-2 rounded-full bg-gray-200'>
              Model price
            </button>
          </div>
          <h1 className="text-5xl font-bold text-center mb-8">
            Serverless Inference Endpoints
          </h1>

          <p className="text-xl font-semibold text-center mb-10">
            Same price for both pre-trained and fine-tuned models
          </p>
          <div className='flex w-5/6 md:justify-center items-center md:flex-row flex-col mx-auto'>
            <div className='flex bg-white text-center rounded-t-md md:rounded-s-md flex-col md:w-1/3 w-4/5'>
              <div className='px-5 py-3 border-b text-lg font-semibold border-gray-200'>Hardware</div>
              <div className='px-5 py-3 border-b border-gray-200'>Up to 7B</div>
              <div className='px-5 py-3 border-b border-gray-200'>Up to 21B</div>
              <div className='px-5 py-3 border-b border-gray-200'>Up to 70B</div>
              <div className='px-5 py-3 border-gray-200'>Mixtral-8x7B</div>
            </div>
            <div className='flex bg-gray-100 text-center flex-col md:w-1/3 w-4/5'>
              <div className='px-5 py-3 border-b text-lg font-semibold border-gray-200'>Pricing Per Hour of Serving</div>
              <div className='px-5 py-3 border-b border-gray-200'>$0.2</div>
              <div className='px-5 py-3 border-b border-gray-200'>$0.25</div>
              <div className='px-5 py-3 border-b border-gray-200'>$1.0</div>
              <div className='px-5 py-3 border-gray-200'>$1.0</div>
            </div>
            <div className='flex bg-white text-center rounded-b-md md:rounded-e-md flex-col md:w-1/3 w-4/5'>
              <div className='px-5 py-3 border-b text-lg font-semibold border-gray-200'>Model Size</div>
              <div className='px-5 py-3 border-b border-gray-200'>Up to 7B</div>
              <div className='px-5 py-3 border-b border-gray-200'>Up to 21B</div>
              <div className='px-5 py-3 border-b border-gray-200'>Up to 70B</div>
              <div className='px-5 py-3 border-gray-200'>Mixtral-8x7B</div>
            </div>
          </div>
        </div>

      </div>


    </>
  )
}

export default Pricing