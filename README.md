# 🧳 Torino - Travel & Tour Booking Site

Torino یک سایت حرفه‌ای برای مشاهده، رزرو و پرداخت آنلاین تورهای مسافرتی است. کاربران می‌توانند با شماره موبایل خود وارد شوند، تورها را جستجو و فیلتر کنند، سبد خرید بسازند و با پرداخت آنلاین سفر خود را نهایی کنند.

[🎨 طراحی در فیگما](https://www.figma.com/design/MMjxNJiAEN8AhtxbPVPatB/torino?node-id=1-3&p=f&t=TxOx9pp2Gd0f2ig3-0)

---

## 🚀 ویژگی‌های کلیدی

- احراز هویت با شماره موبایل و OTP
- مشاهده لیست تورها همراه با فیلتر مبدأ، مقصد و تاریخ
- سبد خرید و پرداخت آنلاین
- پروفایل کاربر و ویرایش اطلاعات شخصی
- طراحی واکنش‌گرا (Responsive)
- بک‌اند اختصاصی با REST API

---

## 🧠 تکنولوژی‌ها و ابزارها

### Frontend
- [React 19](https://react.dev/)
- [Next.js 15 (App Router)](https://nextjs.org/)
- [Formik](https://formik.org/)
- [Yup](https://github.com/jquense/yup)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [SwiperJS](https://swiperjs.com/)
- [react-multi-date-picker](https://shahabyazdi.github.io/react-multi-date-picker/)
- بدون استفاده از کتابخانه‌های اضافی برای مدیریت وضعیت یا کوکی

### Backend
- Node.js + Express (RESTful API)
- احراز هویت با JWT (accessToken / refreshToken)

---

## 📂 ساختار پوشه‌ها

```bash
src/
├──📦 actions/                  # اکشن‌های مربوط به API (مثل ارسال و بررسی OTP، دریافت تورها)
│   ├── checkOtpAction.js
│   ├── sendOtpAction.js
│   └── tours.js
│
├──📦 app/                      # ساختار صفحات بر پایه App Router
│   ├──📂 basket/               # صفحه سبد خرید
│   │   ├── layout.js
│   │   └── page.js
│   ├──📂 tour/                 # صفحه تورها
│   │   ├──📂 [tourId]/         # صفحه جزئیات هر تور
│   │   │   └── page.js
│   │   ├──📂 layout.js
│   │   └── page.js
│   ├──📂 user/                 
│   │   ├──📂 profile/          # صفحه پروفایل کاربر
│   │   │   └── page.js
│   │   ├──📂 tours/            # تورهای ثبت‌نام شده کاربر
│   │   │   └── page.js
│   │   └──📂 transactions/     # لیست تراکنش‌ها
│   │       └── page.js
│   ├── error.js              # صفحه خطا
│   ├── globals.css           # فایل استایل کلی
│   ├── not-found.js          # صفحه 404
│   ├── layout.js             # لایه اصلی برنامه
│   └── page.js               # صفحه اصلی (Home)
│
├──📦 components/
│   └──📂 atomic/              # دکمه ها
│       ├── BtnLogin.js
│       └── ProfileDropDown.js
│       ├── ReserveButton.js
│       └── SubmitBtn.js
│       └── UserBtn.js
│   └──📂container/            # container
│       ├── ModalContainer.js  # مدال سراسری
│   └──📂icons/               # آیکون ها ( به صورت کامپوننت)
│   └──📂 layout/              # دکمه ها
│       ├── Footer.js
│       └── Header.js
│       ├── Layout.js
│   └──📂 modules/              # کامپوننت صفحات
│       ├── 📂 basket/         # کامپوننت سبد خرید
│           ├── basketComponent.js
│       ├── 📂 home/         # کامپوننت های صفحه اصلی
│            ├── CallToBookBanner.js  # بنر صفحه ی اصلی
│            ├── SearchTour.js        # قسمت جستجو تورها
│            ├── SiteFeatures.js      # ویژگی های تورینو
│            ├── SwapperSlider.js     # اسلایدر
│            ├── WhyTorino.js         # چرا تورینو؟
│       ├── 📂 user/            # کامپوننت های صفحه کاربر
│            ├── Profile.js   # اطلاعات کاربر
│            ├── Tours.js       # تورهای کاربر
│            ├── Transactions.js     # تراکنش های کاربر
│            ├── UserSideBar.js     # سایدبار کاربر
│       ├── 📂 public/            # کامپوننت های عمومی
│            ├── MenuItems.js   # آیتم های منو
│            ├── PersianDatePicker.js      # تقویم
│            ├── Toast.js     # اعلان ها
│            ├── TourDetails.js     # جزئیات تور
│            ├── wrapper.js     
.
.
.
.


🧪 اجرای پروژه
🔹 اجرای فرانت‌اند
git clone https://github.com/FatemehMohammadi18/torino.git
cd torino
npm install
npm run dev


🔸 اجرای بک‌اند
cd server
npm install
npm run dev


