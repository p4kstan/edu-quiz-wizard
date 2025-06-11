
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { X, Check, AlertCircle } from 'lucide-react';

interface CourseModalProps {
  isOpen: boolean;
  onClose: () => void;
  course: {
    id: string;
    label: string;
    emoji: string;
    price: string;
    description: string;
    features: string[];
    additionalInfo: string;
    warning: string;
  };
  onSuccess: () => void;
  answers: {
    education: string;
    goal: string;
    course: string;
  };
}

const CourseModal = ({ isOpen, onClose, course, onSuccess, answers }: CourseModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    courseName: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    courseName: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Clear error when user starts typing
    if (errors[field as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {
      name: '',
      courseName: ''
    };

    if (!formData.name.trim()) {
      newErrors.name = 'Nome completo é obrigatório';
    }

    if (!formData.courseName.trim()) {
      newErrors.courseName = 'Nome exato do curso é obrigatório';
    }

    setErrors(newErrors);
    return !newErrors.name && !newErrors.courseName;
  };

  const handleInterested = () => {
    if (!validateForm()) {
      return;
    }

    // Prepare WhatsApp message
    const whatsappNumber = '+6283871072811';
    const message = encodeURIComponent(`
🎓 INTERESSE EM FORMAÇÃO EDUCACIONAL

📋 *DADOS DO CLIENTE:*
Nome: ${formData.name}
Curso Desejado: ${formData.courseName}

📊 *INFORMAÇÕES DO QUIZ:*
Nível Atual: ${answers.education}
Objetivo: ${answers.goal}
Formação Escolhida: ${course.label}

💰 *VALOR:* ${course.price}

🔒 Tenho real interesse em atendimento personalizado.
    `.trim());

    // Open WhatsApp
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
    
    // Call GTM function with proper type checking
    if (window.DispararGTM && typeof window.DispararGTM === 'function') {
      window.DispararGTM();
    }
    
    // Call EnviarActive if available with proper type checking
    if (window.EnviarActive && typeof window.EnviarActive === 'function') {
      window.EnviarActive();
    }

    onSuccess();
  };

  const handleNotInterested = () => {
    onClose();
  };

  const getPlaceholder = () => {
    switch (course.id) {
      case 'ensino-medio':
        return 'Ex: Ensino Médio Regular ou EJA';
      case 'tecnico':
        return 'Ex: Técnico em Enfermagem, Técnico em Informática';
      case 'tecnologo':
        return 'Ex: Tecnólogo em Logística, RH';
      case 'graduacao':
        return 'Ex: Graduação em Direito, Psicologia, Administração';
      case 'pos-graduacao':
        return 'Ex: MBA em Gestão de Projetos';
      case 'mestrado':
        return 'Ex: Mestrado em Educação';
      case 'doutorado':
        return 'Ex: Doutorado em Ciências Jurídicas';
      default:
        return 'Digite o nome exato do curso';
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            {course.emoji} {course.label}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Price */}
          <div className="text-center bg-institutional-blue text-white p-4 rounded-lg">
            <h3 className="text-2xl font-bold">{course.price}</h3>
          </div>

          {/* Description */}
          <div className="space-y-3">
            <p className="text-gray-700">{course.description}</p>
            
            {course.id === 'ensino-medio' ? (
              <ul className="space-y-1">
                {course.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <span className="text-green-600">–</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <ul className="space-y-2">
                {course.features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            )}

            <div className="whitespace-pre-line text-sm text-gray-600 bg-gray-50 p-3 rounded">
              {course.additionalInfo}
            </div>
          </div>

          {/* Form */}
          <div className="space-y-4 border-t pt-6">
            <h4 className="font-semibold text-lg">Preencha seus dados:</h4>
            
            <div>
              <Label htmlFor="name">Nome completo *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                placeholder="Digite seu nome completo"
                className={errors.name ? 'border-red-500' : ''}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="courseName">Nome exato do curso ou área desejada *</Label>
              <Input
                id="courseName"
                value={formData.courseName}
                onChange={(e) => handleInputChange('courseName', e.target.value)}
                placeholder={getPlaceholder()}
                className={errors.courseName ? 'border-red-500' : ''}
              />
              {errors.courseName && (
                <p className="text-red-500 text-sm mt-1 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.courseName}
                </p>
              )}
            </div>

            {/* Warning */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <div className="flex items-start space-x-2">
                <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5" />
                <div className="text-sm">
                  <p className="font-semibold text-yellow-800 mb-1">AVISO IMPORTANTE:</p>
                  <p className="text-yellow-700 mb-1">
                    <span className="text-red-600">❌</span> Respostas como "quero {course.label.toLowerCase()}", "uma pós na saúde" ou "qualquer mestrado" não serão aceitas.
                  </p>
                  <p className="text-yellow-700">
                    <span className="text-green-600">✅</span> O campo "Nome exato do curso" é OBRIGATÓRIO. Descreva com precisão para garantir um atendimento direcionado e eficaz.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col space-y-3 pt-4">
            <Button
              onClick={handleInterested}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg font-semibold"
            >
              ✅ Sim! Tenho real interesse em atendimento.
            </Button>
            
            <Button
              onClick={handleNotInterested}
              variant="outline"
              className="w-full py-3 text-lg"
            >
              ❌ Não. Achei o valor muito alto.
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CourseModal;
