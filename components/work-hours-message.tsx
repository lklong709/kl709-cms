"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTranslation, type Translation } from "@/hooks/use-translation";
import { Languages } from "lucide-react";

const workHoursMessage: Translation = {
  en: "Good morning team! 😊\nThis is a friendly reminder to please ensure you have accurately tracked your 40 work hours for the week. As you know, aiming for 40 hours is crucial for efficient project management and workload distribution.\nAlso, Remember to log your leaves accordingly. All leave requests must be clocked through this non-billable ticket.",
  vi: "Chào buổi sáng đồng đội! 😊\nĐây là lời nhắc nhở thân thiện để các bạn đảm bảo đã theo dõi chính xác 40 giờ làm việc trong tuần. Như các bạn biết, việc đạt được 40 giờ làm việc rất quan trọng cho việc quản lý dự án hiệu quả và phân bổ khối lượng công việc.\nNgoài ra, hãy nhớ ghi nhận nghỉ phép một cách phù hợp. Tất cả các yêu cầu nghỉ phép phải được đăng ký thông qua ticket không tính phí này."
};

const languageLabels: Translation = {
  en: "Switch to Vietnamese",
  vi: "Chuyển sang tiếng Anh"
};

export const WorkHoursMessage = () => {
  const { currentLanguage, translate, switchLanguage } = useTranslation();

  return (
    <Card className="w-full max-w-4xl">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <h2 className="text-xl font-semibold">
          {translate({
            en: "📊 Work Hours Tracking Reminder",
            vi: "📊 Nhắc Nhở Theo Dõi Giờ Làm Việc"
          })}
        </h2>
        <Button
          variant="outline"
          size="sm"
          onClick={switchLanguage}
          className="flex items-center gap-2"
        >
          <Languages className="h-4 w-4" />
          {translate(languageLabels)}
        </Button>
      </CardHeader>
      <CardContent>
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-md">
          <div className="text-sm text-blue-800 whitespace-pre-line">
            {translate(workHoursMessage)}
          </div>
        </div>
        <div className="mt-4 text-xs text-gray-500 text-center">
          {translate({
            en: `Currently viewing in: ${currentLanguage === "en" ? "English" : "Vietnamese"}`,
            vi: `Hiện đang xem bằng: ${currentLanguage === "en" ? "Tiếng Anh" : "Tiếng Việt"}`
          })}
        </div>
      </CardContent>
    </Card>
  );
};