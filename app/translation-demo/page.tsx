import { WorkHoursMessage } from "@/components/work-hours-message";

export default function TranslationDemo() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            🌍 Translation Demo
          </h1>
          <p className="text-gray-600 text-lg">
            Work Hours Tracking Reminder with English/Vietnamese Translation
          </p>
        </div>
        
        <div className="flex justify-center">
          <WorkHoursMessage />
        </div>
        
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>Click the language button to switch between English and Vietnamese</p>
        </div>
      </div>
    </main>
  );
}