import { Variants, Transition } from "framer-motion";

/**
 * -----------------------------------------------------------------------------
 * Transitions & Spring Configurations
 * -----------------------------------------------------------------------------
 */
export const transitions = {
    fast: { duration: 0.2, ease: "easeOut" } as Transition,
    normal: { duration: 0.5, ease: "easeOut" } as Transition,
    slow: { duration: 0.8, ease: "easeOut" } as Transition,
    smooth: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } as Transition,
    spring: { type: "spring", stiffness: 300, damping: 25 } as Transition,
    bouncy: { type: "spring", stiffness: 400, damping: 15 } as Transition,
    gentle: { type: "spring", stiffness: 120, damping: 14 } as Transition,
};

/**
 * -----------------------------------------------------------------------------
 * Fade In / Directional Variants
 * -----------------------------------------------------------------------------
 */
export const fadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: transitions.normal,
    },
};

export const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: transitions.slow,
    },
};

export const fadeInDown: Variants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: transitions.slow,
    },
};

export const fadeInLeft: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
        opacity: 1,
        x: 0,
        transition: transitions.slow,
    },
};

export const fadeInRight: Variants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
        opacity: 1,
        x: 0,
        transition: transitions.slow,
    },
};

/**
 * Dynamic Directional Fade Factory
 */
export const fadeDirection = (
    direction: "up" | "down" | "left" | "right",
    distance = 30,
    duration = 0.6,
    delay = 0
): Variants => {
    const x = direction === "left" ? -distance : direction === "right" ? distance : 0;
    const y = direction === "up" ? distance : direction === "down" ? -distance : 0;

    return {
        hidden: { opacity: 0, x, y },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: { duration, delay, ease: "easeOut" },
        },
    };
};

/**
 * -----------------------------------------------------------------------------
 * Scale & Zoom Variants
 * -----------------------------------------------------------------------------
 */
export const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: transitions.normal,
    },
};

export const scaleUp: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: transitions.spring,
    },
};

export const zoomIn: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: transitions.smooth,
    },
};

/**
 * -----------------------------------------------------------------------------
 * Stagger Container & Child Variants (Lists, Card Grids, Badges)
 * -----------------------------------------------------------------------------
 */
export const containerVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};

export const columnVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

export const linkContainerVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.08,
        },
    },
};

export const linkItemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.45, ease: "easeOut" },
    },
};

export const staggerContainer = (
    staggerChildren = 0.1,
    delayChildren = 0
): Variants => ({
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren,
            delayChildren,
        },
    },
});

export const staggerItem: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
        opacity: 1,
        y: 0,
        transition: transitions.normal,
    },
};

export const staggerItemScale: Variants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: transitions.spring,
    },
};

/**
 * -----------------------------------------------------------------------------
 * Micro-Interactions (Hover, Tap, Focus)
 * -----------------------------------------------------------------------------
 */
export const buttonHoverTap = {
    whileHover: { scale: 1.03 },
    whileTap: { scale: 0.97 },
    transition: { type: "spring" as const, stiffness: 400, damping: 20 },
};

export const iconHoverTap = {
    whileHover: { scale: 1.15, y: -2 },
    whileTap: { scale: 0.92 },
    transition: { type: "spring" as const, stiffness: 400, damping: 15 },
};

export const cardHover = {
    whileHover: { y: -6, transition: { duration: 0.25, ease: "easeOut" } },
};

export const cardHoverScale = {
    whileHover: { y: -6, scale: 1.02, transition: { duration: 0.3, ease: "easeOut" } },
};

/**
 * -----------------------------------------------------------------------------
 * Dropdowns, Accordions & Menus (AnimatePresence)
 * -----------------------------------------------------------------------------
 */
export const dropdownVariants: Variants = {
    hidden: { opacity: 0, y: 8, scale: 0.98 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.2, ease: "easeOut" },
    },
    exit: {
        opacity: 0,
        y: 6,
        scale: 0.98,
        transition: { duration: 0.15, ease: "easeIn" },
    },
};

export const accordionVariants: Variants = {
    hidden: { opacity: 0, height: 0, overflow: "hidden" },
    visible: {
        opacity: 1,
        height: "auto",
        transition: { duration: 0.25, ease: "easeOut" },
    },
    exit: {
        opacity: 0,
        height: 0,
        overflow: "hidden",
        transition: { duration: 0.2, ease: "easeInOut" },
    },
};

export const mobileDrawerVariants: Variants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.2, ease: "easeOut" },
    },
    exit: {
        opacity: 0,
        y: -10,
        transition: { duration: 0.15, ease: "easeIn" },
    },
};

export const backdropVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.2 } },
    exit: { opacity: 0, transition: { duration: 0.15 } },
};

/**
 * -----------------------------------------------------------------------------
 * Continuous / Looping Animations (Badges, Live Feed Dots, Floaters)
 * -----------------------------------------------------------------------------
 */
export const floatingBadge = {
    animate: {
        y: [0, -8, 0],
    },
    transition: {
        repeat: Infinity,
        duration: 4,
        ease: "easeInOut",
    } as Transition,
};

export const pulseDot = {
    animate: {
        scale: [1, 1.25, 1],
        opacity: [1, 0.7, 1],
    },
    transition: {
        repeat: Infinity,
        duration: 2,
        ease: "easeInOut",
    } as Transition,
};

export const rotateSlow = {
    animate: {
        rotate: 360,
    },
    transition: {
        repeat: Infinity,
        duration: 20,
        ease: "linear",
    } as Transition,
};

export const ambientGlowPulse = {
    animate: {
        opacity: [0.35, 0.7, 0.35],
        scale: [0.95, 1.08, 0.95],
    },
    transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
    } as Transition,
};

export const radarPingPulse = {
    animate: {
        scale: [0.85, 1.25, 0.85],
        opacity: [0.1, 0.35, 0.1],
    },
    transition: {
        duration: 7,
        repeat: Infinity,
        ease: "easeInOut",
    } as Transition,
};

export const horizontalNudge = {
    animate: {
        x: [0, 2, 0],
    },
    transition: {
        repeat: Infinity,
        duration: 2.2,
        ease: "easeInOut",
    } as Transition,
};

/**
 * -----------------------------------------------------------------------------
 * Page Top & Breadcrumb Header Animations
 * -----------------------------------------------------------------------------
 */
export const pageTopContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1,
        },
    },
};

export const pageTopItemVariants: Variants = {
    hidden: { opacity: 0, y: 24, scale: 0.98 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
        },
    },
};

export const pageTopBarVariants: Variants = {
    hidden: { width: 0, opacity: 0 },
    visible: {
        width: 72,
        opacity: 1,
        transition: {
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
        },
    },
};

/**
 * -----------------------------------------------------------------------------
 * Standard Viewport Observer Config
 * -----------------------------------------------------------------------------
 */
export const defaultViewport = {
    once: true,
    margin: "-60px",
};

