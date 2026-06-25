  // Variants for card animation
export   const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.95,
      rotateX: 5
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: { 
        duration: 0.6, 
        delay: delay,
        ease: [0.25, 0.1, 0.25, 1],
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  // Icon variants for floating animation
export   const iconVariants = {
    hidden: { 
      scale: 0.5, 
      rotate: -180,
      opacity: 0 
    },
    visible: { 
      scale: 1, 
      rotate: 0,
      opacity: 1,
      transition: { 
        duration: 0.5, 
        delay: delay + 0.2,
        type: "spring",
        stiffness: 200,
        damping: 10
      }
    },
    hover: {
      scale: 1.1,
      rotate: [0, -10, 10, -5, 5, 0],
      transition: { 
        duration: 0.6,
        ease: "easeInOut"
      }
    }
  };

  // Content variants for staggered text reveal
 export  const contentVariants = {
    hidden: { 
      opacity: 0,
      x: -20
    },
    visible: { 
      opacity: 1,
      x: 0,
      transition: { 
        duration: 0.4, 
        ease: "easeOut"
      }
    }
  };
