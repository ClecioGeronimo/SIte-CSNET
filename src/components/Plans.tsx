import React from 'react';
import { Check } from 'lucide-react';

function Plans() {
  return (
    <div className="py-20 bg-white" id="planos">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Nossos Planos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PlanCard
            name="Básico"
            speed="60"
            price="59,90"
            features={[
              'Download 60 Mega',
              'Upload 30 Mega',
              'Wi-Fi Grátis',
              'Instalação Grátis'
            ]}
          />
          <PlanCard
            name="Família"
            speed="200"
            price="69,90"
            popular={true}
            features={[
              'Download 200 Mega',
              'Upload 80 Mega',
              'Wi-Fi Grátis',
              'Instalação Grátis',
              'Suporte Prioritário'
            ]}
          />
          <PlanCard
            name="Gamer"
            speed="300"
            price="99,90"
            features={[
              'Download 300 Mega',
              'Upload 100 Mega',
              'Wi-Fi Grátis',
              'Instalação Grátis',
              'Suporte VIP 24/7',
              'IP Fixo'
            ]}
          />
        </div>
      </div>
    </div>
  );
}

interface PlanCardProps {
  name: string;
  speed: string;
  price: string;
  features: string[];
  popular?: boolean;
}

function PlanCard({ name, speed, price, features, popular = false }: PlanCardProps) {
  return (
    <div className={`rounded-2xl p-8 ${popular ? 'bg-blue-600 text-white ring-4 ring-blue-500' : 'bg-gray-50'}`}>
      {popular && (
        <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
          Mais Popular
        </span>
      )}
      <h3 className={`text-2xl font-bold mt-4 ${popular ? 'text-white' : 'text-gray-800'}`}>{name}</h3>
      <div className="mt-4">
        <span className={`text-4xl font-bold ${popular ? 'text-white' : 'text-gray-800'}`}>{speed}</span>
        <span className={`text-xl ${popular ? 'text-white/90' : 'text-gray-600'}`}>MEGA</span>
      </div>
      <div className="mt-4">
        <span className={`text-sm ${popular ? 'text-white/90' : 'text-gray-600'}`}>R$</span>
        <span className={`text-4xl font-bold ${popular ? 'text-white' : 'text-gray-800'}`}>{price}</span>
        <span className={`text-sm ${popular ? 'text-white/90' : 'text-gray-600'}`}>/mês</span>
      </div>
      <ul className="mt-8 space-y-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-3">
            <Check className={`w-5 h-5 ${popular ? 'text-white' : 'text-orange-500'}`} />
            <span className={popular ? 'text-white/90' : 'text-gray-600'}>{feature}</span>
          </li>
        ))}
      </ul>
      <button
        className={`w-full mt-8 py-3 px-6 rounded-lg font-semibold transition-all ${
          popular
            ? 'bg-white text-blue-600 hover:bg-gray-100'
            : 'bg-orange-500 text-white hover:bg-orange-600'
        }`}
      >
        Assinar Agora
      </button>
    </div>
  );
}

export default Plans;