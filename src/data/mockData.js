export const mockTranslations = [
  {
    id: 1,
    originalText: "مرحبا، كيف حالك اليوم؟",
    simplifiedText: "Hello, how are you today?",
    signLanguageImage: "/src/assets/images/sign1.svg",
    signLanguageVideo: "/src/assets/videos/sign1.mp4",
    category: "greetings"
  },
  {
    id: 2,
    originalText: "أحتاج إلى مساعدة في هذا الأمر",
    simplifiedText: "I need help with this matter",
    signLanguageImage: "/src/assets/images/sign2.svg",
    signLanguageVideo: "/src/assets/videos/sign2.mp4",
    category: "requests"
  },
  {
    id: 3,
    originalText: "شكرا لك على المساعدة",
    simplifiedText: "Thank you for your help",
    signLanguageImage: "/src/assets/images/sign3.svg",
    signLanguageVideo: "/src/assets/videos/sign3.mp4",
    category: "gratitude"
  },
  {
    id: 4,
    originalText: "أين يمكنني العثور على هذا؟",
    simplifiedText: "Where can I find this?",
    signLanguageImage: "/src/assets/images/sign4.svg",
    signLanguageVideo: "/src/assets/videos/sign4.mp4",
    category: "questions"
  },
  {
    id: 5,
    originalText: "هذا مهم جداً",
    simplifiedText: "This is very important",
    signLanguageImage: "/src/assets/images/sign5.svg",
    signLanguageVideo: "/src/assets/videos/sign5.mp4",
    category: "emphasis"
  },
  {
    id: 6,
    originalText: "من فضلك انتظر قليلاً",
    simplifiedText: "Please wait a moment",
    signLanguageImage: "/src/assets/images/sign1.svg",
    signLanguageVideo: "/src/assets/videos/sign1.mp4",
    category: "requests"
  },
  {
    id: 7,
    originalText: "أعتذر عن التأخير",
    simplifiedText: "I apologize for the delay",
    signLanguageImage: "/src/assets/images/sign3.svg",
    signLanguageVideo: "/src/assets/videos/sign3.mp4",
    category: "gratitude"
  },
  {
    id: 8,
    originalText: "هل يمكنك مساعدتي؟",
    simplifiedText: "Can you help me?",
    signLanguageImage: "/src/assets/images/sign4.svg",
    signLanguageVideo: "/src/assets/videos/sign4.mp4",
    category: "questions"
  }
];

export const mockDocument = {
  id: "doc_001",
  title: "Government Service Request",
  originalLanguage: "Arabic",
  uploadDate: "2024-01-15",
  status: "translated",
  translations: mockTranslations
};

export const supportedLanguages = [
  { code: "ar", name: "Arabic", flag: "🇸🇦" },
  { code: "ar-tn", name: "Tunisian Arabic", flag: "🇹🇳" },
  { code: "en", name: "English", flag: "🇺🇸" }
];

export const signLanguageCategories = [
  { id: "greetings", name: "Greetings", color: "bg-blue-100 text-blue-800" },
  { id: "requests", name: "Requests", color: "bg-green-100 text-green-800" },
  { id: "gratitude", name: "Gratitude", color: "bg-purple-100 text-purple-800" },
  { id: "questions", name: "Questions", color: "bg-yellow-100 text-yellow-800" },
  { id: "emphasis", name: "Emphasis", color: "bg-red-100 text-red-800" }
];
