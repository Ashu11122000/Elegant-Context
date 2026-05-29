import PropTypes from "prop-types";
import {
  FaApple,
  FaFacebookF,
  FaGoogle,
} from "react-icons/fa";
import {
  FiCheckCircle,
  FiShield,
} from "react-icons/fi";

const PROVIDERS = [
  {
    id: "google",
    label: "Google",
    icon: FaGoogle,
  },
  {
    id: "facebook",
    label: "Facebook",
    icon: FaFacebookF,
  },
  {
    id: "apple",
    label: "Apple",
    icon: FaApple,
  },
];

function SocialLogin({
  onProviderClick,
}) {
  const handleClick = (
    provider
  ) => {
    if (onProviderClick) {
      onProviderClick(provider);
    }
  };

  return (
    <div className="space-y-7">
      {/* Premium Divider */}

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div
            className="
              w-full
              border-t
              border-[#3b2a1b]
            "
          />
        </div>

        <div className="relative flex justify-center">
          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-[#3b2a1b]
              bg-[#140d08]
              px-5
              py-2
            "
          >
            <FiShield
              className="
                text-xs
                text-[#d4af37]
              "
            />

            <span
              className="
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.22em]
                text-[#b6925b]
              "
            >
              Or Continue With
            </span>
          </div>
        </div>
      </div>

      {/* Trust Indicators */}

      <div
        className="
          flex
          flex-wrap
          items-center
          justify-center
          gap-3
        "
      >
        <div
          className="
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-[#322214]
            bg-[#18110b]
            px-3.5
            py-2
          "
        >
          <FiCheckCircle
            className="
              text-xs
              text-[#d4af37]
            "
          />

          <span
            className="
              text-xs
              text-[#b7a48d]
            "
          >
            Secure Authentication
          </span>
        </div>

        <div
          className="
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-[#322214]
            bg-[#18110b]
            px-3.5
            py-2
          "
        >
          <FiCheckCircle
            className="
              text-xs
              text-[#d4af37]
            "
          />

          <span
            className="
              text-xs
              text-[#b7a48d]
            "
          >
            One-Tap Sign In
          </span>
        </div>
      </div>

      {/* Providers */}

      <div className="grid gap-4">
        {PROVIDERS.map(
          ({
            id,
            label,
            icon: Icon,
          }) => (
            <button
              key={id}
              type="button"
              onClick={() =>
                handleClick(id)
              }
              aria-label={`Continue with ${label}`}
              className="
                group
                relative
                overflow-hidden
                rounded-[1.5rem]
                border
                border-[#3b2a1b]
                bg-gradient-to-br
                from-[#1b130c]
                to-[#120c07]
                p-[1px]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[#d4af37]
              "
            >
              <div
                className="
                  flex
                  items-center
                  justify-between
                  rounded-[1.45rem]
                  bg-[#18110b]
                  px-5
                  py-4
                "
              >
                <div
                  className="
                    flex
                    items-center
                    gap-4
                  "
                >
                  <div
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-2xl
                      border
                      border-[#4a3520]
                      bg-[#21160d]
                      transition-all
                      duration-300
                      group-hover:border-[#d4af37]
                    "
                  >
                    <Icon
                      className="
                        text-lg
                        text-[#d4af37]
                        transition-transform
                        duration-300
                        group-hover:scale-110
                      "
                    />
                  </div>

                  <div className="text-left">
                    <p
                      className="
                        font-semibold
                        text-white
                      "
                    >
                      Continue with {label}
                    </p>

                    <p
                      className="
                        text-xs
                        text-[#8f7b63]
                      "
                    >
                      Fast & secure authentication
                    </p>
                  </div>
                </div>

                <div
                  className="
                    text-[#d4af37]
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                >
                  →
                </div>
              </div>
            </button>
          )
        )}
      </div>

      {/* Bottom Security Message */}

      <div
        className="
          rounded-[1.5rem]
          border
          border-[#322214]
          bg-[#18110b]
          p-5
          text-center
        "
      >
        <div
          className="
            mb-2
            flex
            items-center
            justify-center
            gap-2
          "
        >
          <FiShield
            className="
              text-[#d4af37]
            "
          />

          <span
            className="
              text-xs
              font-semibold
              uppercase
              tracking-[0.2em]
              text-[#d4af37]
            "
          >
            Protected Access
          </span>
        </div>

        <p
          className="
            text-sm
            leading-6
            text-[#b7a48d]
          "
        >
          Social sign-in is encrypted and
          securely processed through trusted
          authentication providers.
        </p>
      </div>
    </div>
  );
}

SocialLogin.propTypes = {
  onProviderClick:
    PropTypes.func,
};

SocialLogin.defaultProps = {
  onProviderClick: undefined,
};

export default SocialLogin;