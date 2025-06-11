
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, GraduationCap, Award, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Step1 from './quiz/Step1';
import Step2 from './quiz/Step2';
import Step3 from './quiz/Step3';
import SuccessPage from './quiz/SuccessPage';
import Footer from './Footer';

const Quiz = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState({
    education: '',
    goal: '',
    course: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleAnswerChange = (step: string, value: string) => {
    setAnswers(prev => ({
      ...prev,
      [step]: value
    }));
  };

  const handleSuccess = () => {
    setShowSuccess(true);
  };

  if (showSuccess) {
    return <SuccessPage />;
  }

  const getStepIcon = (step: number) => {
    switch (step) {
      case 1:
        return <BookOpen className="w-6 h-6" />;
      case 2:
        return <Award className="w-6 h-6" />;
      case 3:
        return <GraduationCap className="w-6 h-6" />;
      default:
        return <BookOpen className="w-6 h-6" />;
    }
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return answers.education !== '';
      case 2:
        return answers.goal !== '';
      case 3:
        return answers.course !== '';
      default:
        return false;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8 fade-in">
          <div className="flex justify-center items-center mb-4">
            <div className="bg-institutional-blue text-white p-3 rounded-full">
              <GraduationCap className="w-8 h-8" />
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            Quiz Educacional
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descubra a formação ideal para o seu futuro profissional
          </p>
        </div>

        {/* Progress Bar */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="flex items-center justify-between">
            {[1, 2, 3].map((step) => (
              <div
                key={step}
                className={`flex items-center ${step < 3 ? 'flex-1' : ''}`}
              >
                <div
                  className={`flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all duration-300 ${
                    step <= currentStep
                      ? 'bg-institutional-blue text-white border-institutional-blue'
                      : 'bg-white text-gray-400 border-gray-300'
                  }`}
                >
                  {getStepIcon(step)}
                </div>
                {step < 3 && (
                  <div
                    className={`flex-1 h-1 mx-4 transition-all duration-300 ${
                      step < currentStep
                        ? 'bg-institutional-blue'
                        : 'bg-gray-300'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2 text-sm font-medium text-gray-600">
            <span>Formação</span>
            <span>Objetivo</span>
            <span>Curso</span>
          </div>
        </div>

        {/* Main Content */}
        <Card className="max-w-4xl mx-auto shadow-xl border-0 slide-up">
          <CardContent className="p-8">
            {currentStep === 1 && (
              <Step1
                value={answers.education}
                onChange={(value) => handleAnswerChange('education', value)}
              />
            )}
            {currentStep === 2 && (
              <Step2
                value={answers.goal}
                onChange={(value) => handleAnswerChange('goal', value)}
              />
            )}
            {currentStep === 3 && (
              <Step3
                value={answers.course}
                onChange={(value) => handleAnswerChange('course', value)}
                onSuccess={handleSuccess}
                answers={answers}
              />
            )}

            {/* Navigation Buttons */}
            {currentStep < 3 && (
              <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
                <Button
                  variant="outline"
                  onClick={handleBack}
                  disabled={currentStep === 1}
                  className="flex items-center gap-2 px-6 py-3"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Voltar
                </Button>

                <Button
                  onClick={handleNext}
                  disabled={!canProceed()}
                  className="flex items-center gap-2 px-6 py-3 bg-institutional-blue hover:bg-blue-600 quiz-button"
                >
                  <span>Avançar</span>
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default Quiz;
