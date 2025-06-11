
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Wrench, Award, BookOpen, Brain, Microscope } from 'lucide-react';
import CourseModal from './CourseModal';

interface Step3Props {
  value: string;
  onChange: (value: string) => void;
  onSuccess: () => void;
  answers: {
    education: string;
    goal: string;
    course: string;
  };
}

const Step3 = ({ value, onChange, onSuccess, answers }: Step3Props) => {
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const courseOptions = [
    {
      id: 'ensino-medio',
      label: 'Ensino Médio',
      emoji: '📚',
      icon: <BookOpen className="w-6 h-6" />,
      color: 'from-blue-500 to-blue-600',
      warning: 'Ensino Médio Regular ou EJA',
      price: 'R$ 600,00',
      description: 'A documentação completa do Ensino Médio está disponível por R$ 600,00 e inclui:',
      features: [
        'Diploma',
        'Histórico Escolar', 
        'Certificado de Conclusão'
      ],
      additionalInfo: 'Válidos em todo território nacional, para empregos, cursos técnicos e universidades.\n🔒 Processo seguro, sigiloso e profissional.\n💳 Pagamento: Pix, boleto ou transferência.'
    },
    {
      id: 'tecnico',
      label: 'Técnico',
      emoji: '🛠️',
      icon: <Wrench className="w-6 h-6" />,
      color: 'from-green-500 to-green-600',
      warning: 'Técnico em Enfermagem, Técnico em Informática',
      price: 'A partir de R$ 1.200,00',
      description: '✔️ Válido para concursos, processos seletivos, registros em conselhos e todas as finalidades legais',
      features: [
        'Documentação completa: Diploma, Declaração de Conclusão, Histórico Escolar (com notas e carga horária) e Certificado de Conclusão',
        'Instituições disponíveis: Uniasselvi, Estácio, Uninter, Anhanguera, Mackenzie, UFRN, UNIP, Unopar, PUC, UFMG, Senac, Senai',
        'Homologado pelo MEC, publicado no Diário Oficial da União'
      ],
      additionalInfo: '📸 Verificação antecipada por fotos e vídeos reais\n📦 Entrega via transportadora + PDF digital\n💳 Pagamento via Pix, transferência ou boleto'
    },
    {
      id: 'tecnologo',
      label: 'Tecnólogo',
      emoji: '💼',
      icon: <Award className="w-6 h-6" />,
      color: 'from-purple-500 to-purple-600',
      warning: 'Tecnólogo em Logística, RH',
      price: 'A partir de R$ 1.900,00',
      description: '✔️ Válido para concursos, processos seletivos, registros em conselhos e todas as finalidades legais',
      features: [
        'Documentação completa: Diploma, Declaração de Conclusão, Histórico Escolar (com notas e carga horária) e Certificado de Conclusão',
        'Instituições disponíveis: Uniasselvi, Estácio, Uninter, Anhanguera, Mackenzie, UFRN, UNIP, Unopar, PUC, UFMG, Senac, Senai',
        'Homologado pelo MEC, publicado no Diário Oficial da União'
      ],
      additionalInfo: '📸 Verificação antecipada por fotos e vídeos reais\n📦 Entrega via transportadora + PDF digital\n💳 Pagamento via Pix, transferência ou boleto'
    },
    {
      id: 'graduacao',
      label: 'Graduação',
      emoji: '🎓',
      icon: <GraduationCap className="w-6 h-6" />,
      color: 'from-orange-500 to-orange-600',
      warning: 'Graduação em Direito, Psicologia, Administração',
      price: 'A partir de R$ 2.200,00',
      description: '✔️ Válido para concursos, processos seletivos, registros em conselhos e todas as finalidades legais',
      features: [
        'Documentação completa: Diploma, Declaração de Conclusão, Histórico Escolar (com notas e carga horária) e Certificado de Conclusão',
        'Instituições disponíveis: Uniasselvi, Estácio, Uninter, Anhanguera, Mackenzie, UFRN, UNIP, Unopar, PUC, UFMG, Senac, Senai',
        'Homologado pelo MEC, publicado no Diário Oficial da União'
      ],
      additionalInfo: '📸 Verificação antecipada por fotos e vídeos reais\n📦 Entrega via transportadora + PDF digital\n💳 Pagamento via Pix, transferência ou boleto'
    },
    {
      id: 'pos-graduacao',
      label: 'Pós-Graduação',
      emoji: '📈',
      icon: <Award className="w-6 h-6" />,
      color: 'from-red-500 to-red-600',
      warning: 'MBA em Gestão de Projetos',
      price: 'A partir de R$ 2.000,00',
      description: '✔️ Válido para concursos, processos seletivos, registros em conselhos e todas as finalidades legais',
      features: [
        'Documentação completa: Diploma, Declaração de Conclusão, Histórico Escolar (com notas e carga horária) e Certificado de Conclusão',
        'Instituições disponíveis: Uniasselvi, Estácio, Uninter, Anhanguera, Mackenzie, UFRN, UNIP, Unopar, PUC, UFMG, Senac, Senai',
        'Homologado pelo MEC, publicado no Diário Oficial da União'
      ],
      additionalInfo: '📸 Verificação antecipada por fotos e vídeos reais\n📦 Entrega via transportadora + PDF digital\n💳 Pagamento via Pix, transferência ou boleto'
    },
    {
      id: 'mestrado',
      label: 'Mestrado',
      emoji: '🔬',
      icon: <Brain className="w-6 h-6" />,
      color: 'from-indigo-500 to-indigo-600',
      warning: 'Mestrado em Educação',
      price: 'A partir de R$ 2.900,00',
      description: '✔️ Válido para concursos, processos seletivos, registros em conselhos e todas as finalidades legais',
      features: [
        'Documentação completa: Diploma, Declaração de Conclusão, Histórico Escolar (com notas e carga horária) e Certificado de Conclusão',
        'Instituições disponíveis: Uniasselvi, Estácio, Uninter, Anhanguera, Mackenzie, UFRN, UNIP, Unopar, PUC, UFMG, Senac, Senai',
        'Homologado pelo MEC, publicado no Diário Oficial da União'
      ],
      additionalInfo: '📸 Verificação antecipada por fotos e vídeos reais\n📦 Entrega via transportadora + PDF digital\n💳 Pagamento via Pix, transferência ou boleto'
    },
    {
      id: 'doutorado',
      label: 'Doutorado',
      emoji: '🧠',
      icon: <Microscope className="w-6 h-6" />,
      color: 'from-pink-500 to-pink-600',
      warning: 'Doutorado em Ciências Jurídicas',
      price: 'A partir de R$ 3.600,00',
      description: '✔️ Válido para concursos, processos seletivos, registros em conselhos e todas as finalidades legais',
      features: [
        'Documentação completa: Diploma, Declaração de Conclusão, Histórico Escolar (com notas e carga horária) e Certificado de Conclusão',
        'Instituições disponíveis: Uniasselvi, Estácio, Uninter, Anhanguera, Mackenzie, UFRN, UNIP, Unopar, PUC, UFMG, Senac, Senai',
        'Homologado pelo MEC, publicado no Diário Oficial da União'
      ],
      additionalInfo: '📸 Verificação antecipada por fotos e vídeos reais\n📦 Entrega via transportadora + PDF digital\n💳 Pagamento via Pix, transferência ou boleto'
    }
  ];

  const handleCourseClick = (courseId: string) => {
    setSelectedCourse(courseId);
    onChange(courseId);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedCourse(null);
  };

  const selectedCourseData = courseOptions.find(course => course.id === selectedCourse);

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          Qual formação você deseja iniciar?
        </h2>
        <p className="text-lg text-gray-600">
          Agora selecione abaixo a formação que você deseja iniciar:
        </p>
      </div>

      {/* Educational Image */}
      <div className="flex justify-center mb-8">
        <div className="relative w-full max-w-md h-48 rounded-lg overflow-hidden shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            alt="Formação acadêmica e certificados"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courseOptions.map((course) => (
          <div key={course.id} className="space-y-3">
            <Card
              className="cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 quiz-button"
              onClick={() => handleCourseClick(course.id)}
            >
              <CardContent className="p-6 text-center">
                <div className={`mx-auto mb-4 w-16 h-16 rounded-full bg-gradient-to-r ${course.color} flex items-center justify-center text-white`}>
                  {course.icon}
                </div>
                <h3 className="font-semibold text-lg text-gray-800 mb-2">
                  {course.emoji} {course.label}
                </h3>
                <p className="text-sm text-gray-600">
                  Clique para mais informações
                </p>
              </CardContent>
            </Card>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 text-sm">
              <div className="flex items-start space-x-2">
                <span className="text-yellow-600 font-semibold">⚠️</span>
                <div>
                  <p className="font-semibold text-yellow-800 mb-1">IMPORTANTE!</p>
                  <p className="text-yellow-700 mb-1">
                    <span className="text-red-600">❌</span> Respostas genéricas como "Quero {course.label.toLowerCase()}" ou "qualquer {course.label.toLowerCase()}" NÃO serão aceitas.
                  </p>
                  <p className="text-yellow-700">
                    <span className="text-green-600">✅</span> Seja específico: Ex: {course.warning}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && selectedCourseData && (
        <CourseModal
          isOpen={isModalOpen}
          onClose={handleModalClose}
          course={selectedCourseData}
          onSuccess={onSuccess}
          answers={answers}
        />
      )}
    </div>
  );
};

export default Step3;
