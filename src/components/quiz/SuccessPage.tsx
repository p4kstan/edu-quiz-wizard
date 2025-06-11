
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, MessageCircle, Phone } from 'lucide-react';
import Footer from '../Footer';

const SuccessPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          {/* Success Icon */}
          <div className="flex justify-center mb-8">
            <div className="bg-green-500 text-white p-6 rounded-full animate-pulse">
              <CheckCircle className="w-16 h-16" />
            </div>
          </div>

          {/* Success Message */}
          <Card className="shadow-xl border-0 mb-8">
            <CardContent className="p-8">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                🎉 Parabéns!
              </h1>
              
              <div className="space-y-4 text-lg text-gray-700">
                <p className="flex items-center justify-center space-x-2">
                  <MessageCircle className="w-6 h-6 text-green-600" />
                  <span>Todos os dados foram enviados com sucesso para o atendimento via WhatsApp:</span>
                </p>
                
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-center justify-center space-x-2">
                    <Phone className="w-6 h-6 text-green-600" />
                    <span className="font-bold text-xl text-green-800">
                      +62 838-7107-2811
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-lg text-blue-800 mb-3">
                  🚀 Próximos Passos:
                </h3>
                <ul className="text-left space-y-2 text-blue-700">
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600 mt-1">✓</span>
                    <span>Aguarde o contato da nossa equipe em até 24 horas</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600 mt-1">✓</span>
                    <span>Tenha seus documentos básicos em mãos</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600 mt-1">✓</span>
                    <span>Prepare suas dúvidas sobre o processo</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 text-sm text-gray-600">
                <p className="font-medium">📧 Dúvidas? Entre em contato:</p>
                <p>Estamos sempre prontos para ajudar você!</p>
              </div>
            </CardContent>
          </Card>

          {/* Additional Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="bg-white shadow-md">
              <CardContent className="p-6 text-center">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Processo Seguro</h3>
                <p className="text-sm text-gray-600">
                  Documentação válida e reconhecida pelo MEC
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-md">
              <CardContent className="p-6 text-center">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Suporte Completo</h3>
                <p className="text-sm text-gray-600">
                  Atendimento personalizado do início ao fim
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-md">
              <CardContent className="p-6 text-center">
                <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Resposta Rápida</h3>
                <p className="text-sm text-gray-600">
                  Retorno em até 24 horas úteis
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SuccessPage;
