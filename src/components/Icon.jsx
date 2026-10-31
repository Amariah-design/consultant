const paths = {
    menu: (
        <>
            <path d="M4 7h16M4 12h16M4 17h16" />
        </>
    ),
    close: (
        <>
            <path d="m18 6-12 12M6 6l12 12" />
        </>
    ),
    arrow: (
        <>
            <path d="M5 12h14M12 5l7 7-7 7" />
        </>
    ),
    arrowUp: (
        <>
            <path d="M7 17 17 7M7 7h10v10" />
        </>
    ),
    globe: (
        <>
            <circle cx="12" cy="12" r="10" />
            <path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" />
        </>
    ),
    graduation: (
        <>
            <path d="m2 10 10-5 10 5-10 5-10-5Z" />
            <path d="M6 12v5c3 3 9 3 12 0v-5M22 10v6" />
        </>
    ),
    medical: (
        <>
            <path d="M10 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-4" />
            <path d="M14 3h7v7M21 3l-9 9" />
            <path d="M12 15v4M10 17h4" />
        </>
    ),
    briefcase: (
        <>
            <rect x="3" y="7" width="18" height="14" rx="2" />
            <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18M10 12v2h4v-2" />
        </>
    ),
    family: (
        <>
            <circle cx="9" cy="8" r="3" />
            <path d="M3 20v-2a6 6 0 0 1 12 0v2M16 5a3 3 0 0 1 0 6M18 14a5 5 0 0 1 3 4v2" />
        </>
    ),
    check: (
        <>
            <path d="m5 12 4 4L19 6" />
        </>
    ),
    shield: (
        <>
            <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" />
            <path d="m9 12 2 2 4-4" />
        </>
    ),
    file: (
        <>
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
            <path d="M14 2v6h6M8 13h8M8 17h8" />
        </>
    ),
    headset: (
        <>
            <path d="M3 14v-3a9 9 0 0 1 18 0v3" />
            <path d="M5 14h2v6H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2ZM19 14h-2v6h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2ZM17 20c-1 2-3 2-5 2" />
        </>
    ),
    pin: (
        <>
            <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
            <circle cx="12" cy="10" r="2.5" />
        </>
    ),
    clock: (
        <>
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6v6l4 2" />
        </>
    ),
    phone: (
        <>
            <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7l.5 3a2 2 0 0 1-.6 1.8L7.5 10a16 16 0 0 0 6 6l1.5-1.5a2 2 0 0 1 1.8-.6l3 .5a2 2 0 0 1 2.2 2.5Z" />
        </>
    ),
    mail: (
        <>
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="m22 7-10 6L2 7" />
        </>
    ),
    search: (
        <>
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
        </>
    ),
    plane: (
        <>
            <path d="m22 2-7 20-4-9-9-4Z" />
            <path d="M22 2 11 13" />
        </>
    ),
    calendar: (
        <>
            <rect x="3" y="4" width="18" height="17" rx="2" />
            <path d="M16 2v4M8 2v4M3 10h18" />
        </>
    ),
};

export default function Icon({ name, size = 20, className = "" }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            aria-hidden="true"
        >
            {paths[name] || paths.globe}
        </svg>
    );
}
