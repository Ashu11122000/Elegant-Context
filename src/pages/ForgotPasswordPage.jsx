import AuthCard from "../components/auth/AuthCard";
import ForgotPasswordForm from "../components/auth/ForgotPasswordForm";

function ForgotPasswordPage() {
  return (
    <main
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#0b0805]
        px-4
        py-12
        sm:px-6
        lg:px-8
      "
    >
      {/* Luxury Background Layers */}

      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.10),transparent_40%)]
        "
      />

      <div
        className="
          absolute
          left-[-10%]
          top-[10%]
          h-[400px]
          w-[400px]
          rounded-full
          bg-[#d4af37]/5
          blur-[120px]
        "
      />

      <div
        className="
          absolute
          right-[-10%]
          bottom-[5%]
          h-[450px]
          w-[450px]
          rounded-full
          bg-[#d4af37]/5
          blur-[140px]
        "
      />

      <div
        className="
          absolute
          inset-0
          opacity-[0.04]
          [background-image:linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.15)_1px,transparent_1px)]
          [background-size:80px_80px]
        "
      />

      {/* Content */}

      <div
        className="
          relative
          mx-auto
          flex
          min-h-[85vh]
          items-center
          justify-center
        "
      >
        <div className="w-full max-w-2xl">
          <AuthCard
            title="Forgot Password"
            subtitle="Enter your registered email address and we&apos;ll send secure instructions to reset your password and restore access to your account."
          >
            <ForgotPasswordForm />
          </AuthCard>
        </div>
      </div>
    </main>
  );
}

export default ForgotPasswordPage;