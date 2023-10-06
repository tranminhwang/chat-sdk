type IconProps = React.HTMLAttributes<SVGElement>;

const Icons = {
  close: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  ),
  expand: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
      />
    </svg>
  ),
  collapse: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 9V4.5M9 9H4.5M9 9L3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5l5.25 5.25"
      />
    </svg>
  ),
  spinner: ({ className, ...props }: IconProps) => (
    <svg
      className={`animate-spin ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  ),
  seen: (props: IconProps) => (
    <svg
      viewBox="0 0 16 9"
      fill="none"
      xmlns="https://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12.3036 1.02014C12.4988 0.824879 12.4988 0.508296 12.3036 0.313034C12.1083 0.117772 11.7917 0.117772 11.5964 0.313034L4.62046 7.28903L1.35355 4.02212C1.15829 3.82686 0.841709 3.82686 0.646447 4.02212C0.451185 4.21738 0.451184 4.53397 0.646446 4.72923L4.2669 8.34969C4.36067 8.44345 4.48785 8.49613 4.62046 8.49613C4.75306 8.49613 4.88024 8.44345 4.97401 8.34969L12.3036 1.02014Z"
        fill="#38383D"
      ></path>
      <path
        d="M15.3036 1.02014C15.4988 0.824879 15.4988 0.508296 15.3036 0.313034C15.1083 0.117772 14.7917 0.117772 14.5964 0.313034L7.62045 7.28903L7.1813 6.84988L6.4742 7.55698L7.2669 8.34969C7.36067 8.44345 7.48784 8.49613 7.62045 8.49613C7.75306 8.49613 7.88024 8.44345 7.97401 8.34969L15.3036 1.02014Z"
        fill="#38383D"
      ></path>
    </svg>
  ),
  send: (props: IconProps) => (
    <svg
      viewBox="0 0 12 9"
      fill="none"
      xmlns="https://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.8036 0.313034C11.9988 0.508296 11.9988 0.824879 11.8036 1.02014L4.47401 8.34968C4.38024 8.44345 4.25307 8.49613 4.12046 8.49613C3.98785 8.49613 3.86067 8.44345 3.7669 8.34968L0.146447 4.72922C-0.0488156 4.53396 -0.0488155 4.21738 0.146447 4.02212C0.341709 3.82686 0.658291 3.82686 0.853554 4.02212L4.12046 7.28902L11.0964 0.313034C11.2917 0.117772 11.6083 0.117772 11.8036 0.313034Z"
        fill="#38383D"
      ></path>
    </svg>
  ),
  plusCircle: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  ),
};

export default Icons;
