// الفئات / Categories  (colors from your palette)
export const CATEGORIES = [
  { id: 'food',      ar: 'المطاعم والضيافة',   en: 'Food & Hospitality', color: '#FF8A3D', icon: '🍽️' },
  { id: 'warehouse', ar: 'المستودعات',         en: 'Warehouses',         color: '#FFD45A', icon: '🏭' },
  { id: 'factory',   ar: 'المصانع',            en: 'Factories',          color: '#A3B230', icon: '⚙️' },
  { id: 'health',    ar: 'الصحة والصيدليات',   en: 'Health & Pharmacy',  color: '#00C6A7', icon: '➕' },
  { id: 'retail',    ar: 'الأسواق والمجمعات',  en: 'Retail & Malls',     color: '#7ED957', icon: '🛒' },
]

// حالات الامتثال / Compliance states
export const STATUS = {
  gold:   { ar: 'وسام ذهبي',  en: 'Gold Badge',   color: '#C9A227', bg: '#FFF6D6', icon: '🥇' },
  silver: { ar: 'وسام فضي',   en: 'Silver Badge', color: '#7A8794', bg: '#EEF1F4', icon: '🥈' },
  warn:   { ar: 'إنذار أصفر', en: 'Yellow Alert', color: '#E0A100', bg: '#FFF3C4', icon: '⚠️' },
  bad:    { ar: 'إنذار أحمر', en: 'Red Alert',    color: '#D93025', bg: '#FDE4E2', icon: '⛔' },
}

// بيانات تجريبية / Mock data — replace with real API later
export const FACILITIES = [
  { id: 1, cat: 'food', name: 'مطعم اللؤلؤة', branch: 'فرع الربوة', type: 'مطعم عائلي', rating: 4.7, dist: 1.2, badge: 'gold',
    sensors: [{ ar: 'نظافة الزيت', en: 'Oil quality', v: '12%', ok: true }, { ar: 'حرارة الثلاجة', en: 'Fridge temp', v: '3°C', ok: true }] },
  { id: 2, cat: 'food', name: 'مطعم النخبة', branch: 'فرع الملقا', type: 'مطعم فاخر', rating: 4.3, dist: 3.8, badge: 'silver',
    sensors: [{ ar: 'نظافة الزيت', en: 'Oil quality', v: '19%', ok: true }, { ar: 'حرارة الثلاجة', en: 'Fridge temp', v: '4°C', ok: true }] },
  { id: 3, cat: 'food', name: 'ذا كيتشن', branch: 'فرع النخيل', type: 'مطعم ومقهى', rating: 3.9, dist: 5.4, badge: 'warn', hoursLeft: 31,
    sensors: [{ ar: 'نظافة الزيت', en: 'Oil quality', v: '27%', ok: false }, { ar: 'حرارة الثلاجة', en: 'Fridge temp', v: '4°C', ok: true }] },
  { id: 4, cat: 'health', name: 'صيدلية الدواء', branch: 'فرع العليا', type: 'صيدلية', rating: 4.8, dist: 2.1, badge: 'gold',
    sensors: [{ ar: 'حرارة تخزين الأدوية', en: 'Drug storage temp', v: '5°C', ok: true }] },
  { id: 5, cat: 'health', name: 'صيدلية الشفاء', branch: 'فرع السليمانية', type: 'صيدلية', rating: 3.2, dist: 4.4, badge: 'bad',
    sensors: [{ ar: 'حرارة تخزين الأدوية', en: 'Drug storage temp', v: '14°C', ok: false }] },
  { id: 6, cat: 'warehouse', name: 'مستودعات الرياض', branch: 'المدينة الصناعية', type: 'مستودع تبريد', rating: 4.5, dist: 9.0, badge: 'silver',
    sensors: [{ ar: 'إنذار الحريق', en: 'Fire alarm', v: 'يعمل', ok: true }, { ar: 'الحرارة', en: 'Temperature', v: '18°C', ok: true }] },
  { id: 7, cat: 'factory', name: 'مصنع الصقر', branch: 'الخرج', type: 'خط إنتاج', rating: 4.1, dist: 22, badge: 'gold',
    sensors: [{ ar: 'انبعاثات الغاز', en: 'Gas emissions', v: 'طبيعي', ok: true }] },
  { id: 8, cat: 'retail', name: 'هايبر الأمل', branch: 'فرع الياسمين', type: 'سوبرماركت', rating: 4.0, dist: 6.3, badge: 'warn', hoursLeft: 12,
    sensors: [{ ar: 'مخارج الطوارئ', en: 'Emergency exits', v: 'مغلق مخرج', ok: false }] },
]
