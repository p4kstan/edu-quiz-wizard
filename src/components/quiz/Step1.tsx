
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, GraduationCap, Award, Users, Wrench } from 'lucide-react';

interface Step1Props {
  value: string;
  onChange: (value: string) => void;
}

const Step1 = ({ value, onChange }: Step1Props) => {
  const options = [
    {
      id: 'educacao-basica',
      label: 'Educação Básica',
      description: 'Ensino Fundamental ou Médio',
      icon: <BookOpen className="w-6 h-6" />,
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'graduacao',
      label: 'Graduação',
      description: 'Bacharelado, Licenciatura ou Tecnólogo',
      icon: <GraduationCap className="w-6 h-6" />,
      color: 'from-green-500 to-green-600'
    },
    {
      id: 'pos-graduacao-mba',
      label: 'Pós-Graduação',
      description: 'MBA ou Especialização',
      icon: <Award className="w-6 h-6" />,
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 'pos-graduacao-stricto',
      label: 'Pós-Graduação',
      description: 'Mestrado ou Doutorado',
      icon: <Users className="w-6 h-6" />,
      color: 'from-orange-500 to-orange-600'
    },
    {
      id: 'curso-tecnico',
      label: 'Curso Técnico',
      description: 'Formação técnica especializada',
      icon: <Wrench className="w-6 h-6" />,
      color: 'from-indigo-500 to-indigo-600'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          Qual o seu nível de formação atual?
        </h2>
        <p className="text-lg text-gray-600">
          Em que etapa da sua jornada acadêmica você se encontra?
        </p>
      </div>

      {/* Educational Image */}
      <div className="flex justify-center mb-8">
        <div className="relative w-full max-w-md h-48 rounded-lg overflow-hidden shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            alt="Estudantes em ambiente acadêmico"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {options.map((option) => (
          <Card
            key={option.id}
            className={`cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 ${
              value === option.id
                ? 'ring-2 ring-institutional-blue bg-blue-50'
                : 'hover:bg-gray-50'
            }`}
            onClick={() => onChange(option.id)}
          >
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${option.color} text-white flex-shrink-0`}>
                  {option.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg text-gray-800 mb-1">
                    {option.label}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {option.description}
                  </p>
                </div>
                <div className={`w-4 h-4 rounded-full border-2 transition-all duration-200 ${
                  value === option.id
                    ? 'bg-institutional-blue border-institutional-blue'
                    : 'border-gray-300'
                }`}>
                  {value === option.id && (
                    <div className="w-full h-full rounded-full bg-white scale-50"></div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Step1;
