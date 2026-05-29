import AuthCard from "../components/auth/AuthCard";
import RegisterForm from "../components/auth/RegisterForm";
import SocialLogin from "../components/auth/SocialLogin";

function RegisterPage() {
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
      {/* Luxury Background Glow */}

      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.12),transparent_40%)]
        "
      />

      {/* Left Ambient Glow */}

      <div
        className="
          absolute
          left-[-10%]
          top-[8%]
          h-[420px]
          w-[420px]
          rounded-full
          bg-[#d4af37]/5
          blur-[120px]
        "
      />

      {/* Right Ambient Glow */}

      <div
        className="
          absolute
          right-[-10%]
          bottom-[5%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#d4af37]/5
          blur-[150px]
        "
      />

      {/* Center Luxury Glow */}

      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[650px]
          w-[650px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#d4af37]/[0.04]
          blur-[200px]
        "
      />

      {/* Premium Grid Texture */}

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
          max-w-7xl
          items-center
          justify-center
        "
      >
        <div className="w-full max-w-2xl">
          <AuthCard
            title="Create Your Account"
            subtitle="Join Elegant and unlock luxury shopping experiences, member-exclusive rewards, faster checkout, wishlist synchronization, and premium account benefits."
          >
            <RegisterForm />

            <div className="mt-10">
              <SocialLogin />
            </div>
          </AuthCard>
        </div>
      </div>
    </main>
  );
}

export default RegisterPage;